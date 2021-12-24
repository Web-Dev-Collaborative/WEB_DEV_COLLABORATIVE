const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = '123abc';

/*bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(pass, salt, (err, hash) =>{
		console.log(hash);
	});
});*/

var hashPass = '$2a$10$mGPHYHx/cHkITJTVZlpj2./PlADGDfZ9b4Bp8dBaSYLRICEdDOqGG';

bcrypt.compare(pass, hashPass, (err, res)=>{
	console.log(res);
});


/*
var message = 'I am user 1';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
	id:4
};

var token = {
	data, 
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};


var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if(resultHash === token.hash){
	console.log('Data not altered');
}
else console.log('Data altered!! Breached');

var token = jwt.sign(data, '123abc');
console.log(token);	

var decoded = jwt.verify(token, '123abc');
console.log(decoded);
*/