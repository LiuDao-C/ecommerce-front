import { combineReducers } from 'redux'
import { connectRouter, RouterState } from "connected-react-router"
import { History } from "history"
import testReducer from './test.reducer'

export interface AppState {
    router: RouterState
}

const createRootReducer = (history: History) =>
    combineReducers({
        rootReducer: testReducer,
        router: connectRouter(history)
})

export default createRootReducer