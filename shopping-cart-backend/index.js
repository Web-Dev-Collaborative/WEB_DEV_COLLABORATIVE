/*
* Primary file for API
*
*
*/

// Dependencies
const server = require("./lib/server");

// Declare the app
const app = {};

// Initialization function
app.init = () => {
  // Start the server
  server.init();
};

// Execute
app.init();

// Export the app
module.exports = app;
