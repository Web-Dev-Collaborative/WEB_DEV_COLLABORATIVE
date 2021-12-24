import { connect } from "react-redux";
import NotesIndex from './notes_index';
import {createNote, fetchNote, fetchNotes} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import { clearFilter } from "../../../actions/filter_actions";

export function sortByLastUptade(note1, note2){
    return note1.updated_at <= note2.updated_at ? 1 : -1;
}

const mSTP = (state) => {
    const notes = state.ui.filter === null ? Object.values(state.entities.notes) : state.entities.tags[state.ui.filter].notes.map(ele => state.entities.notes[ele]);
    return({
    notes: notes.sort(sortByLastUptade),
    title: "All Notes",
    user: state.entities.users[state.session.id],
    tag: state.ui.filter !== null ? state.entities.tags[state.ui.filter] : null,
    tags: state.entities.tags
})}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: note => dispatch(createNote(note)),
    clearFilter: () => dispatch(clearFilter())
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));