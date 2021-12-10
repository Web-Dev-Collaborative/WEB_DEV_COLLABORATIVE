from wsgiref import simple_server
from ._version import get_versions

import threading
import logging

try:
    from itertools import izip
except ImportError:
    izip = zip

try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen

__version__ = get_versions()['version']
del get_versions

try:
    _string_type = basestring
    _binary_type = str
except NameError:
    _string_type = str
    _binary_type = bytes

log = logging.getLogger('webmock')


class StoppableWSGIServer(simple_server.WSGIServer):

    stopped = False

    def serve_forever(self):
        while not self.stopped:
            self.handle_request()


class LoggingWSGIRequestHandler(simple_server.WSGIRequestHandler):

    def log_message(self, format, *args):
        log.debug(format % args)


class MockServer(object):

    quit_path = '/$!mock_server/quit'

    def __init__(self, app):
        self.app = app
        self._server = None

    def _middleware(self, environ, start_response):
        if environ['PATH_INFO'] == self.quit_path:
            self._server.stopped = True
            start_response('200 OK', [])
            return []
        return self.app(environ, start_response)

    def __enter__(self):
        assert not self._server, "server already started"

        self._server = simple_server.make_server(
            '127.0.0.1', 0, self._middleware,
            server_class=StoppableWSGIServer,
            handler_class=LoggingWSGIRequestHandler)

        self._thread = threading.Thread(
            name='mock_server',
            target=self._server.serve_forever)
        self._thread.daemon = True
        self._thread.start()

        return self._server.server_port

    start = __enter__

    def __exit__(self, *exc_info):
        assert self._server, "server not running"

        # send the quit signal
        urlopen('http://127.0.0.1:%d%s' % (self._server.server_port,
                                           self.quit_path))
        self._thread.join()
        self._server.server_close()
        self._server = None

    stop = __exit__

    def __call__(self, fn):
        def replacement(*args, **kwargs):
            port = self.start()
            try:
                fn(port, *args, **kwargs)
            finally:
                self.stop()
        return replacement

mock_server = MockServer


class MockCall(object):

    def matches(self, call):
        if isinstance(call, _string_type):
            return call == str(self)
        return False

    def __str__(self):
        return '{0} {1}'.format(self.method, self.path)


class MockApp(object):

    def __init__(self, response='200 OK', body=None, headers=None):
        self.mock_calls = []
        self._response = response
        if body:
            assert isinstance(body, _binary_type), "body must be bytes"
            self._body = [body]
        else:
            self._body = []
        self._headers = headers or []

    def __call__(self, environ, start_response):
        call = MockCall()
        self.mock_calls.append(call)
        call.path = environ['PATH_INFO']
        call.method = environ['REQUEST_METHOD']
        headers = self._headers[:]
        start_response(self._response, headers)
        return self._body

    def assert_any_call(self, call):
        if not any(c.matches(call) for c in self.mock_calls):
            raise AssertionError("no calls matching {}".format(call))

    def assert_called_once_with(self, call):
        if len(self.mock_calls) > 1:
            raise AssertionError("more than one call")
        self.assert_called_with(call)

    def assert_called_with(self, call):
        if not self.mock_calls or not self.mock_calls[-1].matches(call):
            raise AssertionError("last call does not match {0}".format(call))

    def assert_has_calls(self, calls, any_order=False):
        if not any_order:
            for offset in range(len(self.mock_calls) - len(calls) + 1):
                for l, r in zip(self.mock_calls[offset:], calls):
                    if not l.matches(r):
                        break
                else:
                    return
            raise AssertionError("Sequential call sequence not found")

        for r in calls:
            for l in self.mock_calls:
                if l.matches(r):
                    break
            else:
                raise AssertionError("No match found for {0}".format(l))
