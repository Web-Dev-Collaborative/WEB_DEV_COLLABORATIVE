import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchNotebook, fetchNotebooks} from '../../../actions/notebook_actions';
import NotebooksSidebar from './notebooks_sidebar';

const mSTP = state => ({
    notebooks: Object.values(state.entities.notebooks)
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: id => dispatch(fetchNotebook(id))
})

export default withRouter(connect(mSTP, mDTP)(NotebooksSidebar));
