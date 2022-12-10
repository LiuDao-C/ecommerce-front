import { combineReducers } from 'redux'
import { connectRouter } from "connected-react-router"
import { History } from "history"
import testReducer from './test.reducer'

const createRootReducer = (history: History) =>
    combineReducers({
        rootReducer: testReducer,
        router: connectRouter(history)
})

export default createRootReducer