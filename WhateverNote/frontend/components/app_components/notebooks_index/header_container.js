import { connect } from "react-redux";
import Header from './header';
import {openModal} from '../../../actions/modal_actions';

const mSTP = state =>({
    notebooks: Object.values(state.entities.notebooks),
    notes: state.entities.notes
})

const mDTP = dispatch => ({
    openModal: (modal, info) => dispatch(openModal(modal, info))
})

export default connect(mSTP, mDTP)(Header);