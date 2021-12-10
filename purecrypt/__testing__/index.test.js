const purecrypt = require('../index.js')

describe("Testing encryption, decryption, and validation", () => {
	test("Encryption", () => {
		let testString = "This is just a test"
		let encrypted = purecrypt.encrypt(testString)
		expect(encrypted).toEqual(expect.not.stringMatching(testString))
	})
	test("Decryption", () => {
		let testString = "This is just a test"
		let encrypted = purecrypt.encrypt(testString)
		let decrypted = purecrypt.decrypt(encrypted)
		expect(decrypted).toEqual(expect.stringMatching(testString))
	})
	test("Validation", () => {
		let testString = "This is just a test"
		let encrypted = purecrypt.encrypt(testString)
		expect(purecrypt.validate(encrypted, testString)).toBeTruthy()
	})
})

