import { ComponentClass } from 'react'
import {
  Dispatch,
  Store,
} from 'redux'

export default interface UserAttributes {
  [key: string]: string | number | null
}

export default interface User {
  readonly isSignedIn: boolean
  readonly isLoading: boolean
  readonly hasVerificationBeenAttempted: boolean
  readonly attributes: UserAttributes
}

export default interface ReduxTokenAuthState {
  readonly currentUser: User
}

export default interface ReduxState {
  readonly reduxTokenAuth: ReduxTokenAuthState
}

export default interface AuthHeaders {
  readonly 'access-token': string
  readonly 'token-type': string
  readonly client: string
  readonly expiry: string
  readonly uid: string
}

export default interface AuthResponse {
  readonly headers: AuthHeaders
  readonly data: {
    readonly data: { [key: string]: any }
  }
}

export default interface VerificationParams {
  readonly uid: string
  readonly client: string
  readonly 'access-token': string
  readonly 'admin-uid': string
  readonly 'admin-client': string
  readonly 'access-token': string
}

export default type REGISTRATION_REQUEST_SENT = 'redux-token-auth/REGISTRATION_REQUEST_SENT'
export default const REGISTRATION_REQUEST_SENT: REGISTRATION_REQUEST_SENT = 'redux-token-auth/REGISTRATION_REQUEST_SENT'

export default type REGISTRATION_REQUEST_SUCCEEDED = 'redux-token-auth/REGISTRATION_REQUEST_SUCCEEDED'
export default const REGISTRATION_REQUEST_SUCCEEDED: REGISTRATION_REQUEST_SUCCEEDED = 'redux-token-auth/REGISTRATION_REQUEST_SUCCEEDED'

export default type REGISTRATION_REQUEST_FAILED = 'redux-token-auth/REGISTRATION_REQUEST_FAILED'
export default const REGISTRATION_REQUEST_FAILED: REGISTRATION_REQUEST_FAILED = 'redux-token-auth/REGISTRATION_REQUEST_FAILED'

export default type VERIFY_TOKEN_REQUEST_SENT = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SENT'
export default const VERIFY_TOKEN_REQUEST_SENT: VERIFY_TOKEN_REQUEST_SENT = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SENT'

export default type VERIFY_TOKEN_REQUEST_SUCCEEDED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SUCCEEDED'
export default const VERIFY_TOKEN_REQUEST_SUCCEEDED: VERIFY_TOKEN_REQUEST_SUCCEEDED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_SUCCEEDED'

export default type VERIFY_TOKEN_REQUEST_FAILED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_FAILED'
export default const VERIFY_TOKEN_REQUEST_FAILED: VERIFY_TOKEN_REQUEST_FAILED = 'redux-token-auth/VERIFY_TOKEN_REQUEST_FAILED'

export default type SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT'
export default const SIGNIN_REQUEST_SENT: SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT'

export default type SIGNIN_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNIN_REQUEST_SUCCEEDED'
export default const SIGNIN_REQUEST_SUCCEEDED: SIGNIN_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNIN_REQUEST_SUCCEEDED'

export default type SIGNIN_REQUEST_FAILED = 'redux-token-auth/SIGNIN_REQUEST_FAILED'
export default const SIGNIN_REQUEST_FAILED: SIGNIN_REQUEST_FAILED = 'redux-token-auth/SIGNIN_REQUEST_FAILED'

export default type SIGNOUT_REQUEST_SENT = 'redux-token-auth/SIGNOUT_REQUEST_SENT'
export default const SIGNOUT_REQUEST_SENT: SIGNOUT_REQUEST_SENT = 'redux-token-auth/SIGNOUT_REQUEST_SENT'

export default type SIGNOUT_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNOUT_REQUEST_SUCCEEDED'
export default const SIGNOUT_REQUEST_SUCCEEDED: SIGNOUT_REQUEST_SUCCEEDED = 'redux-token-auth/SIGNOUT_REQUEST_SUCCEEDED'

export default type SIGNOUT_REQUEST_FAILED = 'redux-token-auth/SIGNOUT_REQUEST_FAILED'
export default const SIGNOUT_REQUEST_FAILED: SIGNOUT_REQUEST_FAILED = 'redux-token-auth/SIGNOUT_REQUEST_FAILED'

export default type SET_HAS_VERIFICATION_BEEN_ATTEMPTED = 'redux-token-auth/SET_HAS_VERIFICATION_BEEN_ATTEMPTED'
export default const SET_HAS_VERIFICATION_BEEN_ATTEMPTED: SET_HAS_VERIFICATION_BEEN_ATTEMPTED = 'redux-token-auth/SET_HAS_VERIFICATION_BEEN_ATTEMPTED'

export default interface UserRegistrationDetails {
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
  readonly [key: string]: any
}

export default interface UserSignInCredentials {
  readonly email: string
  readonly password: string
}

export default interface UserSignOutCredentials {
  readonly 'access-token': string
  readonly client: string
  readonly uid: string
}

export default interface RegistrationRequestSentAction {
  readonly type: REGISTRATION_REQUEST_SENT
}

export default interface RegistrationRequestSucceededAction {
  readonly type: REGISTRATION_REQUEST_SUCCEEDED
  readonly payload: {
    readonly userAttributes: UserAttributes
  }
}

export default interface RegistrationRequestFailedAction {
  readonly type: REGISTRATION_REQUEST_FAILED
}

export default interface VerifyTokenRequestSentAction {
  readonly type: VERIFY_TOKEN_REQUEST_SENT
}

export default interface VerifyTokenRequestSucceededAction {
  readonly type: VERIFY_TOKEN_REQUEST_SUCCEEDED
  readonly payload: {
    readonly userAttributes: UserAttributes
  }
}

export default interface VerifyTokenRequestFailedAction {
  readonly type: VERIFY_TOKEN_REQUEST_FAILED
}

export default interface SignInRequestSentAction {
  readonly type: SIGNIN_REQUEST_SENT
}

export default interface SignInRequestSucceededAction {
  readonly type: SIGNIN_REQUEST_SUCCEEDED
  readonly payload: {
    readonly userAttributes: UserAttributes
  }
}

export default interface SignInRequestFailedAction {
  readonly type: SIGNIN_REQUEST_FAILED
}

export default interface SignOutRequestSentAction {
  readonly type: SIGNOUT_REQUEST_SENT
}

export default interface SignOutRequestSucceededAction {
  readonly type: SIGNOUT_REQUEST_SUCCEEDED
}

export default interface SignOutRequestFailedAction {
  readonly type: SIGNOUT_REQUEST_FAILED
}

export default interface SetHasVerificationBeenAttemptedAction {
  readonly type: SET_HAS_VERIFICATION_BEEN_ATTEMPTED
  readonly payload: {
    readonly hasVerificationBeenAttempted: boolean
  }
}

export default type ReduxAction = RegistrationRequestSentAction
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
  | SetHasVerificationBeenAttemptedAction

export default type ReduxAsyncAction = (input?: any) => (dispatch: Dispatch<{}>) => Promise<void>

export default type VerifyCredentialsFunction = (store: Store<{}>) => void

export default interface ActionsExport {
  readonly registerUser: ReduxAsyncAction
  readonly verifyToken: ReduxAsyncAction
  readonly signInUser: ReduxAsyncAction
  readonly signOutUser: ReduxAsyncAction
  readonly verifyCredentials: VerifyCredentialsFunction
}

export default type ActionsGeneratorExport = (config: { [key: string]: any }) => ActionsExport

export default interface SingleLayerStringMap {
  [key: string]: string
}

export default interface GenerateRequireSignInWrapperConfig {
  readonly redirectPathIfNotSignedIn: string
}

export default type RequireSignInWrapper = (PageComponent: ComponentClass) => ComponentClass

export default interface DeviceStorage {
  readonly getItem: (key: string) => Promise<any>
  readonly setItem: (key: string, value: string) => Promise<any>
  readonly removeItem: (key: string) => Promise<any>
  readonly clear: () => Promise<any>
  readonly getAllKeys: () => Promise<any>
  readonly multiGet: (keys: string[]) => Promise<any>
  readonly multiSet: (keyValuePairs: string[][]) => Promise<any>
}
