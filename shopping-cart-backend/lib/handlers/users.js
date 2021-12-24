/*
* Handlers for user CRUD operations
*
*/

// Dependencies
const _data = require("../data");
const helpers = require("../helpers");
const tokens = require("./tokens");

const users = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _users[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
const _users = {};

// Users - post
// Required data: firstName, lastName, email, password, tosAgreement, address
// Optional data: none
_users.post = (data, callback) => {
  // Check that all required fields are filled out
  const firstName =
    typeof data.payload.firstName == "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;
  const lastName =
    typeof data.payload.lastName == "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;
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
  const tosAgreement =
    typeof data.payload.tosAgreement == "boolean" &&
    data.payload.tosAgreement == true
      ? true
      : false;
  const address =
    typeof data.payload.address == "string" &&
    data.payload.address.trim().length > 0
      ? data.payload.address.trim()
      : false;
  if (firstName && lastName && email && password && tosAgreement && address) {
    // Make sure that the user doesnt already exist
    _data.read("users", email, (err, data) => {
      if (err) {
        // Hash the password
        const hashedPassword = helpers.hash(password);

        if (hashedPassword) {
          // Create the user object
          const userObject = {
            firstName,
            lastName,
            email,
            hashedPassword,
            tosAgreement: true,
            address
          };

          // Store the user
          _data.create("users", email, userObject, err => {
            if (!err) {
              callback(200);
            } else {
              callback(500, { Error: "Could not create the new user" });
            }
          });
        } else {
          callback(500, { Error: "Could not hash the user's password" });
        }
      } else {
        // User already exist
        callback(400, { Error: "A user with that email already exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};

// Users - get
// Required data: email
// Optional data: none
_users.get = (data, callback) => {
  // Check that the email is valid
  const email =
    typeof data.queryStringObject.email == "string" &&
    /\S+@\S+/.test(data.queryStringObject.email.trim()) &&
    data.queryStringObject.email.trim().length < 254
      ? data.queryStringObject.email.trim()
      : false;
  if (email) {
    // Get the token from the headers
    const token =
      typeof data.headers.token == "string" ? data.headers.token : false;
    // Verify that the given token is valid for the email number
    tokens.verifyToken(token, email, tokenIsValid => {
      if (tokenIsValid) {
        // Lookup the user
        _data.read("users", email, (err, data) => {
          if (!err && data) {
            // Remove the hashed password from the user object before returning to the requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404);
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

// Users - put
// Required data: email
// Optional data: firstName, lastName, password (at least one must be specified)
_users.put = (data, callback) => {
  // Check for the required field
  const email =
    typeof data.payload.email == "string" &&
    /\S+@\S+/.test(data.payload.email.trim()) &&
    data.payload.email.trim().length < 254
      ? data.payload.email.trim()
      : false;
  // Check for the optional fields
  const firstName =
    typeof data.payload.firstName == "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;
  const lastName =
    typeof data.payload.lastName == "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;
  const password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;

  // Error if email is invalid
  if (email) {
    if (firstName || lastName || password) {
      // Get the token from the headers
      const token =
        typeof data.headers.token == "string" ? data.headers.token : false;
      // Verify that the given token is valid for the phone number
      tokens.verifyToken(token, email, tokenIsValid => {
        if (tokenIsValid) {
          // Look up user
          _data.read("users", email, (err, userData) => {
            if (!err && data) {
              // Update the fields necessary
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the new updates
              _data.update("users", email, userData, err => {
                if (!err) {
                  callback(200);
                } else {
                  console.log(err);
                  callback(500, { Error: "Could not update the user" });
                }
              });
            } else {
              callback(400, { Error: "The specified user does not exist" });
            }
          });
        } else {
          callback(403, {
            Error: "Missing required token in header or token is invalid"
          });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Users - delete
// Required Field: email
_users.delete = (data, callback) => {
  // Check that the email is valid
  const email =
    typeof data.queryStringObject.email == "string" &&
    /\S+@\S+/.test(data.queryStringObject.email.trim()) &&
    data.queryStringObject.email.trim().length < 254
      ? data.queryStringObject.email.trim()
      : false;

  // Error if email is invalid
  if (email) {
    // Get the token from the headers
    const token =
      typeof data.headers.token == "string" ? data.headers.token : false;
    // Verify that the given token is valid for the email number
    tokens.verifyToken(token, email, tokenIsValid => {
      if (tokenIsValid) {
        // Look up the user
        _data.read("users", email, (err, userData) => {
          if (!err && userData) {
            _data.delete("users", email, err => {
              if (!err) {
                // Delete the token object associated with user
                _data.delete("tokens", token, err => {
                  if (!err) {
                    callback(200);
                  } else {
                    callback(500, {
                      Error: "Error deleting token associated with deleted user"
                    });
                    console.log("Error deleting token", err);
                  }
                });
              } else {
                callback(500, { Error: "Could not delete specified user" });
              }
            });
          } else {
            callback(400, { Error: "Could not find the specified user" });
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

module.exports = users;
