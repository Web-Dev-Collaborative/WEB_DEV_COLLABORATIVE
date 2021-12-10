import { connect } from 'react-redux';
import {logout} from '../../actions/user_actions';
import NavBar from './nav_bar';

const mSTP = state => ({
    session: state.session,
    user: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);