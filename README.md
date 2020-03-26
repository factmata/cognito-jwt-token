# cognito-jwt-token
The NodeJS code for issuing an AWS Cognito JWT tokens.

## Requirements
 * [Git](https://git-scm.com/)
 * [NodeJS](https://nodejs.org/en/)

## Instalation
```
git clone git@github.com:factmata/cognito-jwt-token.git
cd cognito-jwt-token
npm install
```

After installation, Cognito credentials should be specified in the `issue_token.js` script.

## Obtaining JWT token
```
export JWT_TOKEN=`node issue_token.js`
```

## Factmata Intelligence API
The API documentation can be found [here](https://factmata.github.io/slate-api-documentation/?python#intelligence)
