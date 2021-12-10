import React from 'react';
import EditViewContainer from './edit/edit_view_container';
import SlideIndexContainer from './slides/slide_index_container';

const SplitView = (props) => (
  <div className="side-by-side-container">
    <div className="side-container"><EditViewContainer /></div>
    <div className="side-container"><SlideIndexContainer /></div>
  </div>
);

export default SplitView;
