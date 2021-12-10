import React from 'react';
import SlideDisplay from './slide_display';
import SlideDetail from './slide_detail';
import SlideNotes from './slide_notes';
import { withRouter } from "react-router";

class SlideIndex extends SlideDisplay {
  componentDidMount() {
    super.componentDidMount();
    this.scroll(this.props.slideIndex, 'auto');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.slideIndex === this.props.slideIndex) return;
    this.scroll(newProps.slideIndex);
  }

  scroll(slideIndex, behavior) {
    const slidesEl = this.refs.slides;
    if (!slidesEl) return;

    const previousSlideEl = slidesEl.childNodes[slideIndex - 1];

    let top;
    if (previousSlideEl) {
      const currentSlideEl = slidesEl.childNodes[slideIndex];

      const margin = (currentSlideEl.offsetTop -
        (previousSlideEl.offsetTop + previousSlideEl.offsetHeight)) / 2;
      top = currentSlideEl.offsetTop - slidesEl.clientTop - margin;
    } else {
      top = 0;
    }

    behavior = behavior ||
      Math.abs(top - slidesEl.scrollTop) > 1000 ? 'auto' : 'smooth';

    slidesEl.scrollTo({left: 0, top, behavior});
  }

  handleKeyPress(e) {
    const superResult = super.handleKeyPress(e);
    if (superResult) { return superResult; }

    switch (e.key) {
      case "F5":
        e.preventDefault();
        this.props.history.push('/present');
    }
  }

  render() {
    return (
      <div className="slide-index" onKeyDown={this.handleKeyPress}>
        <div className="slides" ref="slides">
          {this.props.slides.map((slide, i) => (
            <SlideDetail
              key={i} slide={slide}
              selected={i === this.props.slideIndex}
              onClick={this.props.updateSlideIndex.bind(null, i)} />
          ))}
        </div>
        <SlideNotes slide={this.currentSlide()} />
      </div>
    );
  }
}

export default withRouter(SlideIndex);
