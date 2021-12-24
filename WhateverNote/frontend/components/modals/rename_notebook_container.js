const { updateNotebook } = require("../../actions/notebook_actions")
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import NotebookForm from './notebook_form';

const mSTP = (state, ownProps) => ({
    user: state.session.id,
    notebook: ownProps.info,
    errors: state.errors.notebook,
    formType: "Rename notebook"
})

const mDTP = dispatch => ({
    action: notebook => dispatch(updateNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(NotebookForm)