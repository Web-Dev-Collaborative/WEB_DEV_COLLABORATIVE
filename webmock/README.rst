webmock
=======

This tool provides an in-process WSGI server on an ephemeral port.
It is intended for use in unit tests, when the system under test makes outgoing HTTP connections that cannot easily be mocked.

Usage
-----

First, create a WSGI application that represents the fake web server you want to create.
This is simpler than it seems; for example::

    def simple_app(environ, start_response):
        status = '200 OK'
        headers = [('Content-type', 'text/plain')]
        start_response(status, headers)
        return ['Hello, world!\n']

Next, activate the test server.
There are several ways to do this, but all of them produce a port number.

As a context manager::

    from webmock import mock_server
    def test_web_request():
        with mock_server(simple_app) as port:
            my_client.get_greeting('http://127.0.0.1:{}'.format(port))

As a decorator::

    from webmock import mock_server
    @mock_server(simple_app)
    def test_web_request(port):
        my_client.get_greeting('http://127.0.0.1:{}'.format(port))

Or manually started and stopped::

    from webmock import mock_server
    @mock_server
    def test_web_request():
        server = mock_server(simple_app)
        # ...
        port = server.start()
        my_client.get_greeting('http://127.0.0.1:{}'.format(port))
        server.stop()

In the latter case, be careful to stop the server.

Mock App
--------

The ``webmock`` package includes a simple WSGI app which behaves like the Python ``Mock``: it accepts and records any request, and allows tests to make assertions after the operation is complete.

Its usage is simple::

    from webmock import mock_server, MockApp

    app = MockApp()
    with mock_server(app) as port:
        # ..
    app.assert_called_with('GET /foo/bar')

The assertion methods available are:

* ``assert_called_with(call)`` -- assert that the most recent request matches ``call``
* ``assert_called_once_with(call)`` -- assert that only one request was made and that it matches ``call``
* ``assert_any_call(call)`` -- assert that the any request matches ``call``
* ``assert_has_call([call, call, ..], any_order=False)`` -- assert that the given calls all occurred.  If ``any_order`` is false, the calls must be sequential.

A call can be described with a string containing the method and the path.

The mock app's behavior can be adjusted in some minor ways.
For anything more complex, build a custom WSGI app.

* ``MockApp(response='403 Forbidden')`` -- customize the HTTP response (default is "200 OK")
* ``MockApp(body='hello world\n')`` -- customize the response body (default is empty)
* ``MockApp(headers=[('X-Auth', 'abc123')])`` -- customize the response headers
