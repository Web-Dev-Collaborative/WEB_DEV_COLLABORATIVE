import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import NoteInfo from './note_info'
import {closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return({
        note: ownProps.info,
        author: state.entities.users[ownProps.info.author_id]
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(NoteInfo))