"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = type;
REGISTRATION_REQUEST_SENT = 'redux-token-auth/REGISTRATION_REQUEST_SENT';
exports.default = ;
var REGISTRATION_REQUEST_SENT = 'redux-token-auth/REGISTRATION_REQUEST_SENT';
exports.default = type;
REGISTRATION_REQUEST_SUCCEEDED = 'redux-token-auth/REGISTRATION_REQUEST_SUCCEEDED';
exports.default = ;
var REGISTRATION_REQUEST_SUCCEEDED = 'redux-token-auth/REGISTRATION_REQUEST_SUCCEEDED';
exports.default = type;
REGISTRATION_REQUEST_FAILED = 'redux-token-auth/REGISTRATION_REQUEST_FAILED';
exports.default = ;
var REGISTRATION_REQUEST_FAILED = 'redux-token-auth/REGISTRATION_REQUEST_FAILED';
exports.default = type;
VERIFY_TOKEN_REQUEST_SENT = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SENT';
exports.default = ;
var VERIFY_TOKEN_REQUEST_SENT = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SENT';
exports.default = type;
VERIFY_TOKEN_REQUEST_SUCCEEDED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SUCCEEDED';
exports.default = ;
var VERIFY_TOKEN_REQUEST_SUCCEEDED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SUCCEEDED';
exports.default = type;
VERIFY_TOKEN_REQUEST_FAILED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_FAILED';
exports.default = ;
var VERIFY_TOKEN_REQUEST_FAILED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_FAILED';
exports.default = type;
SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT';
exports.default = ;
var SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT';
exports.default = type;
SIGNIN_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNIN_REQUEST_SUCCEEDED';
exports.default = ;
var SIGNIN_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNIN_REQUEST_SUCCEEDED';
exports.default = type;
SIGNIN_REQUEST_FAILED = 'redux-token-auth/SIGNIN_REQUEST_FAILED';
exports.default = ;
var SIGNIN_REQUEST_FAILED = 'redux-token-auth/SIGNIN_REQUEST_FAILED';
exports.default = type;
SIGNOUT_REQUEST_SENT = 'redux-token-auth/SIGNOUT_REQUEST_SENT';
exports.default = ;
var SIGNOUT_REQUEST_SENT = 'redux-token-auth/SIGNOUT_REQUEST_SENT';
exports.default = type;
SIGNOUT_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNOUT_REQUEST_SUCCEEDED';
exports.default = ;
var SIGNOUT_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNOUT_REQUEST_SUCCEEDED';
exports.default = type;
SIGNOUT_REQUEST_FAILED = 'redux-token-auth/SIGNOUT_REQUEST_FAILED';
exports.default = ;
var SIGNOUT_REQUEST_FAILED = 'redux-token-auth/SIGNOUT_REQUEST_FAILED';
exports.default = type;
SET_HAS_VERIFICATION_BEEN_ATTEMPTED = 'redux-token-auth/SET_HAS_VERIFICATION_BEEN_ATTEMPTED';
exports.default = ;
var SET_HAS_VERIFICATION_BEEN_ATTEMPTED = 'redux-token-auth/SET_HAS_VERIFICATION_BEEN_ATTEMPTED';
exports.default = type;
ReduxAction = RegistrationRequestSentAction
    | RegistrationRequestSucceededAction
    | RegistrationRequestFailedAction
    | VerifyTokenRequestSentAction
    | VerifyTokenRequestSucceededAction
    | VerifyTokenRequestFailedAction
    | SignInRequestSentAction
    | SignInRequestSucceededAction
    | SignInRequestFailedAction
    | SignOutRequestSentAction
    | SignOutRequestSucceededAction
    | SignOutRequestFailedAction
    | SetHasVerificationBeenAttemptedAction;
exports.default = type;
ReduxAsyncAction = function (input) { return function (dispatch) { return Promise < void  >
; }; };
exports.default = type;
VerifyCredentialsFunction = function (store) { return void ; };
exports.default = type;
ActionsGeneratorExport = function (config) { return ActionsExport; };
exports.default = type;
RequireSignInWrapper = function (PageComponent) { return ComponentClass; };
//# sourceMappingURL=types.js.map