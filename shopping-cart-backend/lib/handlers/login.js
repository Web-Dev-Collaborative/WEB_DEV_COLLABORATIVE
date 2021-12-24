/*
* Handlers for menu CRUD operations
*
*/

// Dependencies
const helpers = require("../helpers");
const _data = require("../data");
const tokens = require("./tokens");

const login = (data, callback) => {
  const acceptableMethods = ["post"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _login[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
const _login = {};

// Login
// Required: email, password
// Optional: none
// @TODO: add more generic error message when email or password does not exist.
_login.post = (data, callback) => {
  // Check that the email is valid
  const email =
    typeof data.payload.email == "string" &&
    /\S+@\S+/.test(data.payload.email.trim()) &&
    data.payload.email.trim().length < 254
      ? data.payload.email.trim()
      : false;

  const password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;

  if (email && password) {
    // Look up user
    _data.read("users", email, (err, userData) => {
      if (!err && userData) {
        if (userData.hashedPassword == helpers.hash(password)) {
          // Forward the request to the tokens handler
          tokens(data, callback);
        } else {
          callback(400, { Error: "The password entered is incorrect" });
        }
      } else {
        callback(400, { Error: "The specified user does not exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

module.exports = login;
