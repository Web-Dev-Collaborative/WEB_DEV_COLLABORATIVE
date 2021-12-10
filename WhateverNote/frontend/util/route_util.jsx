import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import React from 'react';

const mSTP = state => {
    return {loggedIn: Boolean(state.session.id)}
}

const Auth = ({component: Component, path, exact, loggedIn}) => {
    return <Route path={path} exact={exact} render={props => !loggedIn ? <Component {...props}/> : <Redirect to='/app/notes'/>} />
}

const Protected = ({component: Component, path, exact, loggedIn}) => {
    return <Route path={path} exact={exact} render={props => loggedIn ? <Component {...props}/> : <Redirect to='/'/>} />
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));