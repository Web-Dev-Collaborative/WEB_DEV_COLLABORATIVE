import React from 'react';
import markdown from '../../util/markdown';

const SlideDetail = ({slide, selected, onClick}) => (
  <div className={selected ? "slide selected" : "slide"}
       onClick={onClick}>
    <div className="markdown"
         dangerouslySetInnerHTML={{__html: markdown.render(slide.markdown)}} />
  </div>
);

export default SlideDetail;
