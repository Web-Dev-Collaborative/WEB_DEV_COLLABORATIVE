import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createTag } from '../../actions/tag_actions';
import TagForm from './tag_form';

const mSTP = state => {
    return({
        formType: "Create new tag",
        tag: {name: ""}
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    action: tag => dispatch(createTag(tag))
})

export default connect(mSTP, mDTP)(TagForm);