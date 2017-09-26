# More Security with Serverless
Code for my talk "More Security with Serverless"

## Client
get the code 
```
git clone https://github.com/ekkards/moresecuritywithserverless
cd signin-at-client
```
and run ```authenticate.html```

### Get AWS Cognito SDK
```
curl https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/aws-cognito-sdk.min.js > signin-at-client/aws-cognito-sdk.min.js
curl https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/aws-cognito-sdk.min.js.map > signin-at-client/aws-cognito-sdk.min.js.map
curl https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/amazon-cognito-identity.min.js > signin-at-client/amazon-cognito-identity.min.js
curl https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/amazon-cognito-identity.min.js.map > signin-at-client/amazon-cognito-identity.min.js.map
```

## Server
```
cd verify-at-server
npm install
npm start
```
