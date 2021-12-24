import { connect } from 'react-redux';

import EditView from './edit_view';
import { updateText, resetState, updateSlideIndex } from '../../actions';

const mapStateToProps = ({ text, slideIndex }) => ({ text, slideIndex });

const mapDispatchToProps = dispatch => ({
  updateSlideIndex: (slideIndex) => dispatch(updateSlideIndex(slideIndex)),
  updateText: (text) => dispatch(updateText(text)),
  resetState: () => dispatch(resetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditView);
