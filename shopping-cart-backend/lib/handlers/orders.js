/*
* Handlers for orders CRUD operations
*
*/

// Dependencies
const _data = require("../data");
const tokens = require("./tokens");
const config = require("../config");
const helpers = require("../helpers");

const orders = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];

  if (acceptableMethods.indexOf(data.method) > -1) {
    _orders[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
const _orders = {};

// // Logic for post and put methods
// // Required fields: email, order, total, date, confirm
// // Optional fields: id
// _orders.updateCart = (data, callback) => {
//   // Check the required fields
//   const email =
//     typeof data.payload.email == "string" &&
//     /\S+@\S+/.test(data.payload.email.trim()) &&
//     data.payload.email.trim().length < 254
//       ? data.payload.email.trim()
//       : false;
//   const id =
//     typeof data.payload.id == "string" && data.payload.id.length === 20
//       ? data.payload.id
//       : false;
//   const order =
//     typeof data.payload.order == "object" && data.payload.order instanceof Array
//       ? data.payload.order
//       : false;
//   const total =
//     typeof data.payload.total == "string" &&
//     data.payload.total.trim().length > 0
//       ? data.payload.total
//       : false;
//   const date =
//     typeof data.payload.date == "number" && data.payload.date < Date.now()
//       ? data.payload.date
//       : false;
//   const confirmed =
//     typeof data.payload.confirmed == "boolean" && data.payload.confirmed
//       ? data.payload.confirmed
//       : false;

//   if (order && total && date && email) {
//     // Get the token from the headers
//     const token =
//       typeof data.headers.token == "string" ? data.headers.token : false;
//     // Verify that the given token is valid for the email number
//     tokens.verifyToken(token, email, tokenIsValid => {
//       if (tokenIsValid) {
//         // Get the user's profile data
//         _data.read("users", email, (err, userData) => {
//           if (!err && userData) {
//             const userOrders =
//               typeof userData.orders == "object" &&
//               userData.orders instanceof Array
//                 ? userData.orders
//                 : [];

//             userData.orders = userOrders;

//             const orderId = id ? id : helpers.createRandomString(20);
//             const orderObject = {
//               id: orderId,
//               email,
//               order,
//               total,
//               date,
//               systemDate: Date.now(),
//               confirmed
//             };

//             // If not confirmed either create or update the order object
//             if (!confirmed) {
//               if (id) {
//                 // Store the new updates to order file
//                 _data.update("orders", id, orderObject, err => {
//                   if (!err) {
//                     callback(200, orderObject);
//                   } else {
//                     callback(500, { Error: "Could not update the order" });
//                   }
//                 });
//               } else {
//                 _data.create("orders", orderId, orderObject, err => {
//                   if (!err) {
//                     // Add the order id to the user's object
//                     userData.orders.push(orderId);
//                     // Save the new user data
//                     _data.update("users", email, userData, err => {
//                       if (!err) {
//                         callback(200, orderObject);
//                       } else {
//                         callback(500, {
//                           Error: "Could not update the user with the new order"
//                         });
//                       }
//                     });
//                   } else {
//                     callback(500, {
//                       Error: `There was an error placing order for ${email}. ${err}`
//                     });
//                   }
//                 });
//               }
//             } else {
//               // Make purchase to stripe
//               console.log("Make a purchase");
//               // Remove order id from array
//               const orderIdIndex = userData.orders.indexOf(orderId);
//               if (orderIdIndex > -1) {
//                 userData.orders.splice(orderIdIndex, 1);
//               }
//               // Save the new user data
//               _data.update("users", email, userData, err => {
//                 if (!err) {
//                   if (id) {
//                     _data.delete("orders", id, err => {
//                       if (!err) {
//                         callback(200, orderObject);
//                       } else {
//                         callback(500, {
//                           Error: "Could not delete order"
//                         });
//                       }
//                     });
//                   }

//                   // Save new purchase data
//                 } else {
//                   callback(500, {
//                     Error: "Could not update the user with the new order"
//                   });
//                 }
//               });
//             }
//           } else {
//             callback(403, {
//               Error: "There was an error looking up the users data"
//             });
//           }
//         });
//       } else {
//         callback(403, {
//           Error: "Missing required token in header or token is invalid"
//         });
//       }
//     });
//   } else {
//     callback(400, { Error: "Missing required field" });
//   }
// };

//////////////////////////////////////////////////////////////////////////////
// Logic for post and put methods
// Required fields: email, order, total, date, confirm
// Optional fields: id
_orders.updateCart = (data, callback) => {
  // Check the required fields
  const email =
    typeof data.payload.email == "string" &&
    /\S+@\S+/.test(data.payload.email.trim()) &&
    data.payload.email.trim().length < 254
      ? data.payload.email.trim()
      : false;
  const id =
    typeof data.payload.id == "string" && data.payload.id.length === 20
      ? data.payload.id
      : false;
  const order =
    typeof data.payload.order == "object" && data.payload.order instanceof Array
      ? data.payload.order
      : false;
  const total =
    typeof data.payload.total == "number" && data.payload.total > 0
      ? data.payload.total
      : false;
  const date =
    typeof data.payload.date == "number" && data.payload.date < Date.now()
      ? data.payload.date
      : false;
  const confirmed =
    typeof data.payload.confirmed == "boolean" && data.payload.confirmed
      ? data.payload.confirmed
      : false;

  if (order && total && date && email) {
    // Get the token from the headers
    const token =
      typeof data.headers.token == "string" &&
      data.headers.token.trim().length == 20
        ? data.headers.token
        : false;
    // Verify that the given token is valid for the email number
    tokens.verifyToken(token, email, tokenIsValid => {
      if (tokenIsValid) {
        // Look up user to update
        _data.read("users", email, (err, userData) => {
          if (!err && userData) {
            const userOrders =
              typeof userData.orders == "object" &&
              userData.orders instanceof Array
                ? userData.orders
                : [];

            userData.orders = userOrders;
            const orderId = id ? id : helpers.createRandomString(20);
            const orderObject = {
              id: orderId,
              email,
              order,
              total,
              date,
              systemDate: Date.now(),
              confirmed
            };

            // Check if purchase is being made
            if (confirmed && id) {
              // Remove order id from array in userData
              const orderIdIndex = userData.orders.indexOf(orderId);
              if (orderIdIndex > -1) {
                userData.orders.splice(orderIdIndex, 1);
              }

              // Create a stripe charge for the user's order
              helpers.createStripeCharge(
                {
                  amount: total,
                  currency: "usd",
                  description: "Charge for order",
                  source: config.stripeToken
                },
                err => {
                  if (!err) {
                    helpers.sendEmailReceipt(email, orderObject, err => {
                      if (!err) {
                        // Create Purchase from orderObject
                        _data.create("purchases", orderId, orderObject, err => {
                          if (!err) {
                            // Add the Purchase id to the user's object
                            const userPurchases =
                              typeof userData.purchases == "object" &&
                              userData.purchases instanceof Array
                                ? userData.purchases
                                : [];
                            userData.purchases = userPurchases;

                            // Push this new purchase on to the array
                            userData.purchases.push(orderId);

                            // Delete order
                            _data.delete("orders", id, err => {
                              if (!err) {
                                // Save the new user data
                                _data.update("users", email, userData, err => {
                                  if (!err) {
                                    callback(200, orderObject);
                                  } else {
                                    callback(500, {
                                      Error:
                                        "Could not update the user with the new purchase"
                                    });
                                  }
                                });
                              } else {
                                callback(500, {
                                  Error: "Could not delete order"
                                });
                              }
                            });
                          } else {
                            callback(500, {
                              Error: `There was an error placing order for ${email}. ${err}`
                            });
                          }
                        });
                      } else {
                        callback(500, {
                          Error: "Error sending receipt" + err
                        });
                      }
                    });
                  } else {
                    callback(500, { Error: "Error creating charge, " + err });
                  }
                }
              );
            } else if (confirmed) {
              // Create a stripe charge for the user's order
              helpers.createStripeCharge(
                {
                  amount: total,
                  currency: "usd",
                  description: "Charge for order",
                  source: config.stripeToken
                },
                err => {
                  if (!err) {
                    helpers.sendEmailReceipt(email, orderObject, err => {
                      if (!err) {
                        // Create Purchase from orderObject
                        _data.create("purchases", orderId, orderObject, err => {
                          if (!err) {
                            // Add the Purchase id to the user's object
                            const userPurchases =
                              typeof userData.purchases == "object" &&
                              userData.purchases instanceof Array
                                ? userData.purchases
                                : [];
                            userData.purchases = userPurchases;

                            // Push this new purchase on to the array
                            userData.purchases.push(orderId);

                            // Save the new user data
                            _data.update("users", email, userData, err => {
                              if (!err) {
                                callback(200, orderObject);
                              } else {
                                callback(500, {
                                  Error:
                                    "Could not update the user with the new purchase"
                                });
                              }
                            });
                          } else {
                            callback(500, {
                              Error: `There was an error placing order for ${email}. ${err}`
                            });
                          }
                        });
                      } else {
                        callback(500, {
                          Error: "Error sending receipt" + err
                        });
                      }
                    });
                  } else {
                    callback(500, { Error: "Error creating charge, " + err });
                  }
                }
              );
            } else if (id) {
              // update order
              _data.update("orders", email, orderObject, err => {
                if (!err) {
                  callback(200, orderObject);
                } else {
                  callback(500, {
                    Error: "Could not update the user with the new purchase"
                  });
                }
              });
            } else {
              // Create order ID
              // Add to order array in userData
              // Create new order
              // Save new purchase data
              _data.create("orders", orderId, orderObject, err => {
                if (!err) {
                  // Add the order id to the user's object
                  const userOrders =
                    typeof userData.orders == "object" &&
                    userData.orders instanceof Array
                      ? userData.orders
                      : [];

                  userData.orders = userOrders;
                  userData.orders.push(orderId);
                  // Save the new user data
                  _data.update("users", email, userData, err => {
                    if (!err) {
                      callback(200, orderObject);
                    } else {
                      callback(500, {
                        Error: "Could not update the user with the new order"
                      });
                    }
                  });
                } else {
                  callback(500, {
                    Error: `There was an error placing order for ${email}. ${err}`
                  });
                }
              });
            }
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

// Orders - post
// Required fields: email, order, total, date, confirm
// @TODO: In order to prevent duplicate orders check if there are any other order files with orders placed within an hour of the current one and send an error if so.
_orders.post = (data, callback) => {
  _orders.updateCart(data, callback);
};

// orders - get
// Required data: orderId
// Optional data: none
_orders.get = (data, callback) => {
  // Check that the id is valid
  const id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.trim().length == 20
      ? data.queryStringObject.id.trim()
      : false;
  if (id) {
    // Lookup the user
    _data.read("orders", id, (err, orderData) => {
      if (!err && orderData) {
        // Get the token from the headers
        const token =
          typeof data.headers.token == "string" ? data.headers.token : false;
        // Verify that the given token is valid for the email
        tokens.verifyToken(token, orderData.email, tokenIsValid => {
          if (tokenIsValid) {
            // return the order data
            callback(200, orderData);
          } else {
            callback(403, {
              Error: "Missing required token in header or token is invalid"
            });
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Orders - put
// Required fields: email, order, total, date, confirm
// @TODO: In order to prevent duplicate orders check if there are any other order files with orders placed within an hour of the current one and send an error if so.
_orders.put = (data, callback) => {
  _orders.updateCart(data, callback);
};

// Orders - delete
// Required: email, id
_orders.delete = (data, callback) => {
  // Check that the id is valid
  const id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.length === 20
      ? data.queryStringObject.id
      : false;

  if (id) {
    // Lookup the user
    _data.read("orders", id, (err, orderData) => {
      if (!err && orderData) {
        // Get the token from the headers
        const token =
          typeof data.headers.token == "string" ? data.headers.token : false;
        // Verify that the given token is valid for the email
        tokens.verifyToken(token, orderData.email, tokenIsValid => {
          if (tokenIsValid) {
            // FIX THIS PART AND UPDATE THE USER ORDERS ARRAY
            _data.delete("orders", id, err => {
              if (!err) {
                // Get the user's profile data
                _data.read("users", orderData.email, (err, userData) => {
                  if (!err && userData) {
                    const userOrders =
                      typeof userData.orders == "object" &&
                      userData.orders instanceof Array
                        ? userData.orders
                        : [];

                    userData.orders = userOrders;
                    // Remove order id from array
                    const orderIdIndex = userData.orders.indexOf(id);
                    if (orderIdIndex > -1) {
                      userData.orders.splice(orderIdIndex, 1);
                    }
                    // Save the new user data
                    _data.update("users", orderData.email, userData, err => {
                      if (!err) {
                        callback(200, orderData);
                      } else {
                        callback(500, {
                          Error: "Could not remove cart id from the user object"
                        });
                      }
                    });
                  }
                });
              } else {
                callback(500, {
                  Error: "Could not delete order"
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
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

module.exports = orders;
