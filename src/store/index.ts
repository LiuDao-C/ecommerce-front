import { configureStore } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createHashHistory()

export const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [routerMiddleware(history)],
})
