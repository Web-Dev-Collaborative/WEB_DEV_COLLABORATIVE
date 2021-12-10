import { connect } from "react-redux";
import SideBar from './side_bar';
import {logout} from '../../../actions/user_actions';
import { withRouter } from "react-router-dom";
import { createNote, fetchNotes } from "../../../actions/note_actions";
import { closeModal, openModal } from '../../../actions/modal_actions';
import { clearFilter } from "../../../actions/filter_actions";
import { fetchTags } from "../../../actions/tag_actions";

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    notes: Object.values(state.entities.notes)
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    openModal: modal => dispatch(openModal(modal)),
    clearFilters: () => dispatch(clearFilter()),
    fetchTags: () => dispatch(fetchTags()),
    fetchNotes: () => dispatch(fetchNotes()),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(SideBar));