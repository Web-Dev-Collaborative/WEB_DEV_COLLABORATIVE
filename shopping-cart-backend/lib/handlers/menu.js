/*
* Handlers for menu CRUD operations
*
*/

// Dependencies
const _data = require("../data");
const tokens = require("./tokens");

const menu = (data, callback) => {
  const acceptableMethods = ["get"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _menu[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
const _menu = {};

// menu - get
// Required: email
_menu.get = (data, callback) => {
  // Check for the required field
  const email =
    typeof data.headers.user == "string" &&
    /\S+@\S+/.test(data.headers.user.trim()) &&
    data.headers.user.trim().length < 254
      ? data.headers.user.trim()
      : false;

  if (email) {
    // Get the token from the headers
    const token =
      typeof data.headers.token == "string" ? data.headers.token : false;

    // Verify that the given token is valid for the email
    tokens.verifyToken(token, email, tokenIsValid => {
      if (tokenIsValid) {
        // Lookup the user
        _data.read("menu", "menu", (err, menuData) => {
          if (!err && menuData) {
            callback(200, menuData);
          } else {
            callback(404, { Error: "Could not find menu" });
          }
        });
      } else {
        callback(403, {
          Error: "Missing required token in header or token is invalid"
        });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

module.exports = menu;
