import { connect } from 'react-redux';

import PresentView from './present_view';
import { updateSlideIndex } from '../../actions';

const mapStateToProps = ({ slides, slideIndex }) => ({ slides, slideIndex });

const mapDispatchToProps = dispatch => ({
  updateSlideIndex: (slideIndex) => dispatch(updateSlideIndex(slideIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentView);
