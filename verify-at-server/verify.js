const fs = require('fs');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');

// get validation keys from https://moresecuritywithserverless.auth.eu-central-1.amazoncognito.com
// curl https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_4M4qvLqWW/.well-known/jwks.json > jwks.json

const jwk = require('./jwks.json');
const pem = jwkToPem(jwk.keys[0]);
console.log(jwk.keys[0]);
console.log(pem);

const token = fs.readFileSync('./token.txt').toString();
jwt.verify(token, pem, function (err, data) {
    if (err) console.log(err.message, err.name);
    if (data) console.log(data);
});
