import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchNotebook } from "../../../actions/notebook_actions";
import NotesIndex from "./notes_index"
import {sortByLastUptade} from '../../../util/formats_util';
import { createNote } from "../../../actions/note_actions";

const mSTP = (state, ownProps) => {
    if(Object.keys(state.entities.notebooks).length > 0){
        const notes = Object.values(state.entities.notes).filter(note => note.notebook_id === parseInt(ownProps.match.params.notebook_id)).sort(sortByLastUptade);
        return({
            notes: notes,
            notebook: state.entities.notebooks[ownProps.match.params.notebook_id],
            title: state.entities.notebooks[ownProps.match.params.notebook_id].name,
            user: state.entities.users[state.session.id],
            tag: state.ui.filter !== null ? state.entities.tags[state.ui.filter] : null,
            tags: state.entities.tags
        })
    }
    else{
        return({
            notes: Object.values(state.entities.notes),
            user: state.entities.users[state.session.id]
        })
    }    
}

const mDTP = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    createNote: note => dispatch(createNote(note))
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex))