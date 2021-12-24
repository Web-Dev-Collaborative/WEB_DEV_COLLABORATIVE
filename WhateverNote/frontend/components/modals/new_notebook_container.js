const { createNotebook } = require("../../actions/notebook_actions")
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import NotebookForm from './notebook_form';

const mSTP = state => ({
    user: state.session.id,
    notebook: {name: "", author_id: null},
    errors: state.errors.notebook,
    formType: "Create new notebook"
})

const mDTP = dispatch => ({
    action: notebook => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(NotebookForm)