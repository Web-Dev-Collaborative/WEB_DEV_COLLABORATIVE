import { connect } from 'react-redux'
import {login} from '../../actions/user_actions'
import {clearErrors} from '../../actions/error_actions';
import LoginForm from './login_form';

const mSTP = state => {
    return({
        errors: state.errors
    })
}

const mDTP = dispatch => {
    return({
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mSTP, mDTP)(LoginForm);