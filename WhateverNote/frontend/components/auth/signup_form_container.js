import { connect } from "react-redux";
import { signup } from "../../actions/user_actions";
import SignupForm from './signup_form'
import {clearErrors} from '../../actions/error_actions'

const mSTP = state =>{
    return({
        errors: state.errors.session
    })
}

const mDTP = dispatch => {
    return({
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mSTP, mDTP)(SignupForm);