import { connect } from 'react-redux';

import SlideIndex from './slide_index';
import { updateSlideIndex } from '../../actions';

const mapStateToProps = ({ slides, slideIndex }) => ({ slides, slideIndex });

const mapDispatchToProps = dispatch => ({
  updateSlideIndex: (slideIndex) => dispatch(updateSlideIndex(slideIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideIndex);
