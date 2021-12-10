/*
* Request handlers
*
*/

// Dependencies
const users = require("./users");
const tokens = require("./tokens");
const menu = require("./menu");
const login = require("./login");
const logout = require("./logout");
const orders = require("./orders");
// const purchases = require("./purchases");

// Define handlers
const handlers = {};

///////////////////////////
// Tokens
///////////////////////////
handlers.tokens = (data, callback) => {
  tokens(data, callback);
};

///////////////////////////
// Users
///////////////////////////
handlers.users = (data, callback) => {
  users(data, callback);
};

///////////////////////////
// Menu Items
///////////////////////////
handlers.menu = (data, callback) => {
  menu(data, callback);
};

///////////////////////////
// Login Items
///////////////////////////
handlers.login = (data, callback) => {
  login(data, callback);
};

///////////////////////////
// Logout Items
///////////////////////////
handlers.logout = (data, callback) => {
  logout(data, callback);
};

///////////////////////////
// Orders
///////////////////////////

handlers.orders = (data, callback) => {
  orders(data, callback);
};

///////////////////////////
// Carts
///////////////////////////

handlers.carts = (data, callback) => {
  carts(data, callback);
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Export the module
module.exports = handlers;
