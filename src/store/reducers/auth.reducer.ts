import { signup, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL } from './../actions/auth.action';
import { AuthUnionType } from "../actions/auth.action";

export interface AuthState {
    signup: {
        loaded: boolean,
        success: boolean
    }
}

const initialState = {
    signup: {
        loaded: false,
        success: false
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
        default:
            return state;
    }
}