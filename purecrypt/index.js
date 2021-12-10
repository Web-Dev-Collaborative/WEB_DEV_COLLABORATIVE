require('dotenv').config()
const crypto = require('crypto');

const key = crypto.createHash('sha256').update(String(process.env.CRYPTO_KEY)).digest('base64').substr(0, 32);
const iv = Buffer.from(process.env.CRYPTO_KEY, "base64").toString('hex').slice(0, 16)

function encrypt(value) {
	try {
		if (value === undefined) throw new Error("Input value is undefined");
		if (value === null) throw new Error("Input value is null");
		if (value === '') throw new Error("Input value is an empty string");
		if (typeof (value) !== 'string') throw new Error("Input value must be a string");
		let crypted = ''
		const cipher = crypto.createCipheriv(process.env.ALGO, key, iv)
		cipher.on('readable', () => {
			let chunk;
			while (null !== (chunk = cipher.read())) {
				crypted += chunk.toString('hex');
			}
		})
		cipher.write(value);
		cipher.end()
		return crypted
	} catch (e) {
		console.log(e.message)
	}

}

function decrypt(value) {
	try {
		if (value === undefined) throw new Error("Input value is undefined");
		if (value === null) throw new Error("Input value is null");
		if (value === '') throw new Error("Input value is an empty string");
		if (typeof (value) !== 'string') throw new Error("Input value must be a string");

		let decrypted = ''
		const decipher = crypto.createDecipheriv(process.env.ALGO, key, iv)
		decipher.on('readable', () => {
			let chunk;
			while (null !== (chunk = decipher.read())) {
				decrypted += chunk.toString('utf8');
			}
		})
		decipher.write(value, 'hex');
		decipher.end()
		return decrypted

	} catch (e) {
		console.log(e.message)
	}
}

function validate(existing, incoming) {
	try {
		if (existing === undefined || incoming === undefined) throw new Error("Received undefined");
		if (existing === null || incoming === null) throw new Error("Received null");
		if (existing === '' || incoming === '') throw new Error("Received an empty string");
		if (typeof (existing) !== 'string' || typeof (incoming) !== 'string') throw new Error("Input values must be a string");

		const encrypted = encrypt(incoming)
		if (existing === encrypted) {
			return true
		} else {
			return false
		}
	} catch (e) {
		console.log(e.message)
	}
}

module.exports = { encrypt, decrypt, validate }
