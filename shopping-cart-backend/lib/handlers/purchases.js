/*
* Handlers for Purchases CR_D operations
*
*/

// Dependencies
const _data = require("../data");
const helpers = require("../helpers");
const tokens = require("./tokens");

const purchases = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _purchases[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the purchases submethods
const _purchases = {};

// Purchases - post
// Required fields: email, id (cart id), order, total, date
// @TODO: Add functionality that will keep the purchase list down to last 10 orders
_orders.post = (data, callback) => {
  // Check the required fields
  const email =
    typeof data.payload.email == "string" &&
    /\S+@\S+/.test(data.payload.email.trim()) &&
    data.payload.email.trim().length < 254
      ? data.payload.email.trim()
      : false;
  // Cart id
  const orderId =
    typeof data.payload.id == "string" && data.payload.id.length === 20
      ? data.payload.id
      : false;
  const order =
    typeof data.payload.order == "object" && data.payload.order instanceof Array
      ? data.payload.order
      : false;
  const total =
    typeof data.payload.total == "string" &&
    data.payload.total.trim().length > 0
      ? data.payload.total
      : false;
  const date =
    typeof data.payload.date == "number" && data.payload.date < Date.now()
      ? data.payload.date
      : false;

  if (email && id && order && total && date) {
    // Get the token from the headers
    const token =
      typeof data.headers.token == "string" ? data.headers.token : false;
    // Verify that the given token is valid for the email number
    tokens.verifyToken(token, email, tokenIsValid => {
      if (tokenIsValid) {
        // Generate the purchase id
        const id = helpers.createRandomString(20);
        const purchaseObject = {
          id,
          email,
          orderId,
          order,
          total,
          date,
          systemDate: Date.now()
        };
        // Get the user's profile data
        _data.read("users", email, (err, userData) => {
          if (!err && userData) {
            const userPurchases =
              typeof userData.purchases == "object" &&
              userData.purchases instanceof Array
                ? userData.purchases
                : [];

            userData.purchases = userPurchases;
            // Add the purchase id to the user's object
            userData.purchases.push(id);
            // Save the new user data
            _data.update("users", email, userData, err => {
              if (!err) {
                callback(200, purchaseObject);
              } else {
                callback(500, {
                  Error: "Could not update the user with the new order"
                });
              }
            });
          } else {
            callback(403, {
              Error: "There was an error looking up the users data"
            });
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

// Export the module
module.exports = purchases;
