import { configureStore } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import createSagaMiddleware from "redux-saga"
import rootSaga from './sagas';

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [routerMiddleware(history), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
