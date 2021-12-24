import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {openModal} from '../../../actions/modal_actions';
import {deleteNote} from '../../../actions/note_actions';
import NoteIndexItem from './note_index_item';

// const mSTP = (state, ownProps) => ({
//     users: state.entities.users,
//     note: ownProps.note
// })
const mSTP = (state, ownProps) => ({
    users: ownProps.users,
    note: ownProps.note
})

const mDTP = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id)),
    openModal: (modal, info) => dispatch(openModal(modal, info))
})

export default withRouter(connect(mSTP, mDTP)(NoteIndexItem));
