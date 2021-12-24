import { connect } from "react-redux"
import { fetchNotebooks } from "../../../actions/notebook_actions";
import NotebooksIndex from './notebooks_index';

const mSTP = (state, ownProps) => {
    return({
        notebooks: Object.values(state.entities.notebooks),
    })
}
const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(mSTP, mDTP)(NotebooksIndex);