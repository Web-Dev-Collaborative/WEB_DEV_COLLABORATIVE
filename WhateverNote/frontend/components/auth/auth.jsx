import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

export default class Auth extends React.Component{
    render(){
      

        return(
            <div className="auth">
                <img id="auth-background" src={window.authbackground} />
                <a id="reference" href="https://www.freepik.com/vectors/background">@</a>
                <Switch>
                    <Route exact path='/auth/login' component={LoginFormContainer} />
                    <Route exact path='/auth/signup' component={SignupFormContainer} />
                </Switch>
            </div>
        )
    }
}