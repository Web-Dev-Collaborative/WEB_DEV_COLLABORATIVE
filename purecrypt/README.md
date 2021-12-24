# purecrypt
Ultralight string encryption, decryption, and validation package.

## Description

Use Purecrypt to quickly encrypt, decrypt, or validate any string on your Node.js project. 

## How to Use

Set up your .env...

```
// Can be any statement
CRYPTO_KEY=Super secret key

// See supported ciphers below
ALGO=aes-256-cbc

```

Encrypt any string...

```
require('dotenv').config()
const purecrypt = require('purecrypt')

...

let encryptedSample = purecrypt.encrypt('example');

```

Decrypt any previously encrypted string... Note: CRYPTO_KEY and ALGO in .env must match what was used to encrypt the string.

```
purecrypt.decrypt(encryptedSample)
```

Validate any previously encrypted string with an incoming string. Useful for password validation. Accepts existing encrypted string, then incoming string to validate.

```
router.post('login', async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.findBy({ username });
    if ( user && purecrypt.validate(user.password, password) ){
      ...
    } else {
      ...
    }
  } catch(e) {
    res.status(500).json({ error: e.message })
  }
})
```

## Ciphers Supported
  * aes-256-cbc,
  * aes-256-cfb,
  * aes-256-cfb1,
  * aes-256-cfb8,
  * aes-256-ctr,
  * aes256,
  * camellia-256-cbc,
  * camellia-256-cfb,
  * camellia-256-cfb1,
  * camellia-256-cfb8,
  * camellia-256-ofb,
  * camellia256,
 


