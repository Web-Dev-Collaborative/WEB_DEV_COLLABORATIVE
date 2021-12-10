import { connect } from "react-redux";
import {fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import { openModal } from "../../../actions/modal_actions";
import RichTextEditor from "./rich_text_editor";

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.match.params.note_id],
        noteIds: [],
        notebooks: state.entities.notebooks,
        type: "stand-alone"
    })
}

const mDTP = dispatch => {
    return({
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id)),
        openModal: (modal, info) => dispatch(openModal(modal, info))
    })
}
export default withRouter(connect(mSTP, mDTP)(RichTextEditor));