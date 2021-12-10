import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            email: "",
            password: "",
            errors: []
        }
        this.appearEles = document.getElementsByClassName('appear');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoAccount = this.demoAccount.bind(this);
    }

    handleChange(field){
        return e => {
            if(field === 'email' && e.target.value === ""){
                this._toggleActive();
            }
            this.setState({errors: []});
            if(this.props.errors.session.length > 0) this.props.clearErrors();
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(document.getElementsByClassName('active')[0].innerText !== 'Continue'){
            this.props.login(this.state)
        }
        else if(this.state.email !== "") {
            this._toggleActive();
        }
        else {
            this.setState({errors: ["This is a required field"]});
        }
    }

    _toggleActive(){
        Array.from(this.appearEles).forEach(ele => {
            ele.classList.toggle('active');
        })
    }

    demoAccount(){
        const dori = {
            email:"dori@coralreef.au",
            password: "iforgot"
        }
        this.props.login(dori);
    }

    render(){
        return(
            <div className="login-form">
                <div className="form-logo"><Link to='/'>
                    <img src={window.logo} alt="WhateverNote"/>
                    <h2>WhateverNote</h2>
                    <p>Remember whatever you need.</p>
                </Link></div>

                <div className="demo">
                    <button onClick={this.demoAccount}><i className="fas fa-user"></i>Demo Account</button>
                    <p>or</p> 
                </div>
               

                <form onSubmit={this.handleSubmit}>
                    <input id="email" type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder=" Email address"/>
                    
                    <ul className="errors">
                        {this.state.errors}
                    </ul>
                    <button className="appear active">Continue</button>

                    <div className="appear">
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder=" Password"/>
                        <ul className="errors">
                            {this.props.errors.session}
                        </ul>
                        <button>Log in</button>
                    </div>
                </form>
                <div className="auth-options">
                    <p>Don't have an account?</p>
                    <Link to='/auth/signup'>Create account</Link>
                </div>
            </div>
        )
    }
}