const AWS = require('aws-sdk');
const CognitoSDK = require('amazon-cognito-identity-js-node');
AWS.CognitoIdentityServiceProvider.AuthenticationDetails = CognitoSDK.AuthenticationDetails;
AWS.CognitoIdentityServiceProvider.CognitoUserPool = CognitoSDK.CognitoUserPool;
AWS.CognitoIdentityServiceProvider.CognitoUser = CognitoSDK.CognitoUser;

const Username = '<AWS Cognito username>';
const Password = '<AWS Cognito password>';
const config = { region: '<AWS Region>' };
const UserPoolId = '<AWS Cognito userpoolid>';
const ClientId = '<AWS Cognito clientid>';

const cognitoIdentityServiceProvider =
  new AWS.CognitoIdentityServiceProvider(config);


const issueToken = (profile) => {
  
  //User Pool
  const poolData = {
    UserPoolId : UserPoolId,
    ClientId : ClientId
  };
  const userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  
  //User
  const userParams = {
    Pool: userPool,
    Username: Username,
  };
  var cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(userParams);

  //Authentication
  const authenticationData = {
    Username: Username,
    Password: Password,
  }
  const authenticationDetails = new AWS.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
  var responseFunctions = {
    onSuccess: (result) => {
      console.log(result.idToken.jwtToken);
    },
    onFailure: (err) => {
      console.log('Error:');
      console.log(err);
    }
  };

  cognitoUser.authenticateUser(authenticationDetails, responseFunctions);
};

issueToken();
