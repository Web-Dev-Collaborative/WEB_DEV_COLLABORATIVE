import { connect } from "react-redux"
import {fetchNotebooks} from '../../../actions/notebook_actions';
import { withRouter } from "react-router-dom";
const { openModal } = require("../../../actions/modal_actions");
import EditorHeader from './editor_header';

const mSTP = (state, ownProps) => {
    return({
        note: ownProps.note,
        notebooks: state.entities.notebooks,
        deleteNote: ownProps.deleteNote,
    })
}

const mDTP = dispatch => ({
    openModal: (modal, info) => dispatch(openModal(modal, info)),
    fetchNotebooks: () => dispatch(fetchNotebooks())
})

// export default withRouter(connect(mSTP, mDTP)(Header));
export default withRouter(connect(mSTP, mDTP)(EditorHeader));