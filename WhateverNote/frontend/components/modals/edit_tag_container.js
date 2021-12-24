import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateTag } from '../../actions/tag_actions';
import TagForm from './tag_form';

const mSTP = (state, ownProps) => {
    return({
        formType: "Edit tag",
        tag: ownProps.tag
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    action: tag => dispatch(updateTag(tag))
})

export default connect(mSTP, mDTP)(TagForm);