# shopping-cart-backend

An node api for CRUDing users, login/out, and creating and processing a shopping cart

## Starting the app

If you are starting the app locally load your api key and token into enviroment variables and kick off the app with the `node index` command. Optionally you can add a runApp.sh bash script that will export your variables and kick off the node app like so.

```
#!/bin/bash

export STRIPE_API_KEY=[your api key]
export STRIPE_TOKEN=[your token]

node index.js
```

# API reference

## Users

**User Creation**

---

Will create a user if one does not exist with the same email address.

- **URL**

  `/users`

* **Method**

  `POST`

* **Data Params**

  Required

  ```
  {
    "firstName": [string],
    "lastName": [string],
    "email": [string],
    "password": [string],
    "tosAgreement": [boolean],
    "address": [string]
  }
  ```

* **Success Response**

  - **Code: `200`**

  - **Content:
    `{ "firstName": "David", "lastName": "Conner", "email": "test@test.com", "password": "thisIsAPassword", "tosAgreement": true, "address": "123 west st. Round Rock, tx 78665" }`**

* **Error Reponse**

  - **Code: `400`**
  - **Content `{ Error: "A user with that email already exist" }`**

  or

  - **Code: `403`**
  - **Content: `{ "Error": "Missing required token in header or token is invalid" }`**

--

**Get specified user**

---

Will grab the user object associated with provided email. Must be authenticated.

- **URL**

  `/users`

* **Method**

  `GET`

* **Header Params**

  `token: [string]`

* **URL Params**

  `email=[string]`

* **Success Response**

  - **Code: `200`**

  - **Content:
    `{ "firstName": "David", "lastName": "Conner", "email": "test@test.com", "password": "thisIsAPassword", "tosAgreement": true, "address": "123 west st. Round Rock, tx 78665" }`**

* **Error Reponse**

  - **Code: `403`**
  - **Content: `{ "Error": "Missing required token in header or token is invalid" }`**

--

**Update specified user**

---

Will update and return the user object associated with provided email. Must be authenticated.

- **URL**

  `/users`

* **Method**

  `PUT`

* **Header Params**

  `token: [string]`

* **Data Params**

  Required

  `{ email: [string] }`

  Optional

  ```
  {
    "firstName": [string],
    "lastName": [string],
    "password": [string],
    "tosAgreement": [boolean],
    "address": [string]
  }
  ```

* **Success Response**

  - **Code: `200`**

  - **Content:
    `{}`**

* **Error Reponse**

  - **Code: `403`**
  - **Content: `{ "Error": "Missing required token in header or token is invalid" }`**

  or

  - \*\*Code: `400`
  - **Content: `{ "Error": "Missing required field" }`**

--

**Delete specified user**

---

Will delete the user object associated with provided email. Must be authenticated.

- **URL**

  `/users`

* **Method**

  `PUT`

* **Header Params**

  `token: [string]`

* **URL Params**

  Required

  `{ email: [string] }`

- **Success Response**

  - **Code: `200`**

  - **Content:
    `{}`**

- **Error Reponse**

  - **Code: `403`**
  - **Content: `{ "Error": "Missing required token in header or token is invalid" }`**
