/*
* Server related task
*
*/

// Dependencies
const http = require("http");
const https = require("https");
const url = require("url");
const fs = require("fs");
const StringDecoder = require("string_decoder").StringDecoder;
const path = require("path");
const config = require("./config");
const handlers = require("./handlers");
const helpers = require("./helpers");

// Instantiate the server module object
const server = {};

// Instantiating the HTTP server
server.httpServer = http.createServer((req, res) => {
  server.unifiedServer(req, res);
});

// Instantiating the HTTPS server
server.httpsServerOptions = {
  key: fs.readFileSync(path.join(__dirname, "/../https/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "/../https/cert.pem"))
};

server.httpsServer = https.createServer(
  server.httpsServerOptions,
  (req, res) => {
    server.unifiedServer(req, res);
  }
);

// All the server logic for both the http and the https server
server.unifiedServer = (req, res) => {
  // Get URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the path from the URL
  const path = parsedUrl.pathname;

  // Trim off any extraneous slashes off the path
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload if any
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", data => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();

    // Choose the handler that this req should go to. If one does not exist use the notFound handler
    const chosenHandler =
      typeof server.router[trimmedPath] !== "undefined"
        ? server.router[trimmedPath]
        : handlers.notFound;

    // Construct the data object that we send to the handler
    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: helpers.parseJsonToObject(buffer)
    };

    // Route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // use the status code called back by the handler or default to 200
      statusCode = typeof statusCode == "number" ? statusCode : 200;

      // use the payload called back by the handler, or use an empty object
      payload = typeof payload === "object" ? payload : {};

      // Conver the payload to a string
      const payloadString = JSON.stringify(payload);

      //return the response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);
      console.log(statusCode, payload);
    });
  });
};

// Define a request router
server.router = {
  users: handlers.users,
  tokens: handlers.tokens,
  menu: handlers.menu,
  login: handlers.login,
  logout: handlers.logout,
  orders: handlers.orders
};

// Init scripts
server.init = () => {
  // Start the http server
  server.httpServer.listen(config.httpPort, () => {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `The server is listening on port ${config.httpPort}`
    );
  });

  // Start the  https server
  server.httpsServer.listen(config.httpsPort, () => {
    console.log(
      "\x1b[35m%s\x1b[0m",
      `The server is listening on port ${config.httpsPort}`
    );
  });
};

// Export the module
module.exports = server;
