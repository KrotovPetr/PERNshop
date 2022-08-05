import React from 'react';
import AppRouter from "./Component/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./Services/Reducers/stateReducer";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import NavBar from "./Component/NavBar/NavBar";
import indexStyles from './Component/App/app.module.scss';
import App from "./Component/App/App";



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
const container = document.getElementById('root');
const root = createRoot(container!);



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);