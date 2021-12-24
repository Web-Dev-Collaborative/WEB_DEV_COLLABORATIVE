import React from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            errors: []
        }
        props.clearErrors();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
            if(this.props.errors.length > 0) this.props.clearErrors();
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
    }

    render(){
        const firstError = this.props.errors[0] || [];
        let errors = this.props.errors[0] || [];
        errors = errors.map(error=>(<li>{error}</li>));
        
        return(
            <div className="signup-form">
                <div className="form-logo"><Link to='/'>
                    <img src={window.logo} alt="WhateverNote"/>
                    <h2>WhateverNote</h2>
                    <p>Remember whatever you need.</p>
                </Link></div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type="text" placeholder="First name" onChange={this.handleChange('first_name')} value={this.state.first_name}/>

                    <input type="text" placeholder="Last name" onChange={this.handleChange('last_name')} value={this.state.last_name}/>

                    <input type="text" placeholder="Email address" onChange={this.handleChange('email')} value={this.state.email}/>

                    <input type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password} />
                    
                    {/* <ul className="errors"><li>{firstError[0]}</li></ul> */}
                    <ul className="errors">{errors}</ul>

                    <button>Sign up</button>
                </form>
                <div className="auth-options">
                    <p>Already have an account?</p>
                    <Link to='/auth/login'>Log in</Link>
                </div>
            </div>
        )
    }
}