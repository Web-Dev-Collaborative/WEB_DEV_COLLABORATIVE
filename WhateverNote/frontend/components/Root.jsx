import React from "react";
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from './Splash';
import Auth from './auth/auth';
import App from './App';
import Loading from "./loading";

export default function Root({store}){
    return(
        <Provider store={store}>
            <HashRouter>
                <AuthRoute exact path='/' component={Splash} />
                <AuthRoute path="/auth" component={Auth} /> 
                <ProtectedRoute path='/app' component={App} />
                <Route exact path="/loading" component={Loading} />
            </HashRouter>
        </Provider>
    )
}

//maybe switch statements