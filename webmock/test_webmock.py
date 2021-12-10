from webmock import mock_server, MockApp
from wsgiref import simple_server
from nose.tools import assert_raises
import socket

try:
    from urllib.request import urlopen
    from urllib.error import HTTPError
except ImportError:
    from urllib2 import urlopen
    from urllib2 import HTTPError

def assert_port_closed(port):
    try:
        sk = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sk.connect(('127.0.0.1', port))
    except socket.error:
        pass
    else:
        assert 0, "port still open"

def assert_server_running(port):
    assert 'Hello' in urlopen('http://127.0.0.1:%d/hi' % port).read().decode('ascii')

def test_contextmanager():
    with mock_server(simple_server.demo_app) as port:
        assert_server_running(port)
    assert_port_closed(port)

def test_start_stop():
    svr = mock_server(simple_server.demo_app)
    port = svr.start()
    assert_server_running(port)
    svr.stop()
    assert_port_closed(port)

def test_decorator():
    port_storage = []

    @mock_server(simple_server.demo_app)
    def decorated(port, arg1, arg2=None):
        port_storage.append(port)
        assert arg1 == 1
        assert arg2 == 2
        assert_server_running(port)
    decorated(1, arg2=2)
    assert_port_closed(port_storage[0])

def test_MockApp_assert_any_call():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/cruel' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    app.assert_any_call('GET /cruel')

def test_MockApp_assert_called_with():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    assert_raises(AssertionError, lambda:
        app.assert_called_with('GET /hello'))
    app.assert_called_with('GET /world')

def test_MockApp_assert_called_once_with_two_calls():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    assert_raises(AssertionError, lambda:
        app.assert_called_once_with('GET /world'))

def test_MockApp_assert_called_once_with():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
    app.assert_called_once_with('GET /hello')

def test_MockApp_assert_has_calls_unordered_fails():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    assert_raises(AssertionError, lambda:
        app.assert_has_calls(['GET /cruel', 'GET /planet'], any_order=True))

def test_MockApp_assert_has_calls_unordered_ok():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/cruel' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    app.assert_has_calls(['GET /cruel', 'GET /hello'], any_order=True)

def test_MockApp_assert_has_calls_ordered_fails():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/cruel' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    assert_raises(AssertionError, lambda:
        app.assert_has_calls(['GET /hello', 'GET /world'], any_order=False))

def test_MockApp_assert_has_calls_ordered_ok():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/cruel' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    app.assert_has_calls(['GET /cruel', 'GET /world'], any_order=False)

def test_MockApp_assert_has_calls_ordered_ok_all_calls():
    app = MockApp()
    with mock_server(app) as port:
        urlopen('http://127.0.0.1:%d/hello' % port)
        urlopen('http://127.0.0.1:%d/cruel' % port)
        urlopen('http://127.0.0.1:%d/world' % port)
    app.assert_has_calls(['GET /hello', 'GET /cruel', 'GET /world'], any_order=False)

def test_MockApp_custom_response():
    app = MockApp(response='403 Forbidden')
    with mock_server(app) as port:
        assert_raises(HTTPError, lambda:
            urlopen('http://127.0.0.1:%d/world' % port))
    app.assert_any_call('GET /world')

def test_MockApp_custom_body():
    app = MockApp(body=b'oh noes')
    with mock_server(app) as port:
        resp = urlopen('http://127.0.0.1:%d/world' % port).read()
        assert resp == b'oh noes', 'got {!r}'.format(resp)
    app.assert_any_call('GET /world')

def test_MockApp_custom_headers():
    app = MockApp(headers=[('Authorization', 'Bearer abc')])
    with mock_server(app) as port:
        resp = urlopen('http://127.0.0.1:%d/world' % port)
        assert resp.headers['authorization'] == 'Bearer abc', resp.headers
    app.assert_any_call('GET /world')
