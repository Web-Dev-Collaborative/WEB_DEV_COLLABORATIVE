import { connect } from "react-redux";
import { addTag, fetchTag } from "../../../actions/tag_actions";
import { fetchNote } from '../../../actions/note_actions';
import EditorTags from './editor_tags';

const mSTP = (state, ownProps) => {
    return({
        allTags: Object.values(state.entities.tags),
        tags: state.entities.tags,
        note: ownProps.note
    })
}

const mDTP = dispatch => ({
    addTagging: (tagId, noteId) => dispatch(addTag(tagId, noteId)),
    fetchTag: tagId => dispatch(fetchTag(tagId)),
    fetchNote: noteId => dispatch(fetchNote(noteId))
})

export default connect(mSTP, mDTP)(EditorTags)