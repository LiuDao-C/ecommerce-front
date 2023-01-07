import { combineReducers } from 'redux'
import { connectRouter, RouterState } from "connected-react-router"
import { History } from "history"
import testReducer from './test.reducer'
import authReducer, { AuthState } from './auth.reducer'

export interface AppState {
    router: RouterState,
    auth: AuthState
}

const createRootReducer = (history: History) =>
    combineReducers({
        rootReducer: testReducer,
        router: connectRouter(history),
        auth: authReducer
})

export default createRootReducer