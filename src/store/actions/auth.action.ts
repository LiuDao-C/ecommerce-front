export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAIL = "SIGNUP_FAIL"

export interface SignupPayLoad {
    email: string,
    name: string,
    password: string
}

export interface SignupAction {
    type: typeof SIGNUP,
    payload: SignupPayLoad
}

export interface SignupSuccessAction {
    type: typeof SIGNUP_SUCCESS
}

export interface SignupFailAction {
    type: typeof SIGNUP_FAIL,
    message: string
}

export const signup = (payload: SignupPayLoad): SignupAction => ({
    type: SIGNUP,
    payload
})

export const signupSuccess = (): SignupSuccessAction => ({
    type: SIGNUP_SUCCESS
})

export const signupFail = (message: string): SignupFailAction => ({
    type: SIGNUP_FAIL,
    message
})

export type  AuthUnionType = SignupAction | SignupSuccessAction | SignupFailAction