/*
* Handlers for menu CRUD operations
*
*/

// Dependencies
const tokens = require("./tokens");

const logout = (data, callback) => {
  const acceptableMethods = ["delete"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _logout[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
const _logout = {};

// Logout
// Required: tokenId
// Optional: none
_logout.delete = (data, callback) => {
  // Get the token from the headers
  const tokenId =
    typeof data.headers.token == "string" &&
    data.headers.token.trim().length == 20
      ? data.headers.token
      : false;

  data.queryStringObject.id = tokenId;

  if (tokenId) {
    // Delete token
    tokens(data, callback);
  } else {
    callback(400, { Error: "Missing auth token" });
  }
};

module.exports = logout;
