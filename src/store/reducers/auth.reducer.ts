import { signup, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL, RESET_SIGNUP } from './../actions/auth.action';
import { AuthUnionType } from "../actions/auth.action";

export interface AuthState {
    signup: {
        loaded: boolean,
        success: boolean,
        message: string
    }
}

const initialState = {
    signup: {
        loaded: false,
        success: false,
        message: ''
    }
}

export default function authReducer(state = initialState, action: AuthUnionType) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false
                }
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: true
                }
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: false,
                    message: action.message
                }
            }
        case RESET_SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            }
        default:
            return state;
    }
}