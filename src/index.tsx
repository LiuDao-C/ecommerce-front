import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  MyRoutes  from './Routes';
import { history, store } from "./store/index"
import "./style.css"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MyRoutes />
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
