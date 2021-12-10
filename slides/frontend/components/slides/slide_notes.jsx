import React from 'react';
import markdown from '../../util/markdown';

const SlideNotes = ({slide}) => (
  <div className="slide-notes">
    <div className="markdown"
         dangerouslySetInnerHTML={{__html: markdown.render(slide.notes)}} />
  </div>
);

export default SlideNotes;
