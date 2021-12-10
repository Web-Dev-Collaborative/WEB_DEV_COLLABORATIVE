import React from 'react';
import SlideDisplay from '../slides/slide_display';
import SlideDetail from '../slides/slide_detail';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Progress from 'react-progressbar';

class PresentView extends SlideDisplay {
  handleKeyPress(e) {
    const superResult = super.handleKeyPress(e);
    if (superResult) { return superResult; }

    switch (e.key) {
      case "F5":
      case "Escape":
        e.preventDefault();
        this.props.history.push('/');
    }
  }

  render() {
    const progress = Math.round(
      (this.props.slideIndex + 1) / this.props.slides.length * 100);

    return (
      <div className="present-container" onKeyDown={this.toggleSlide}>
        <ReactCSSTransitionReplace
          className="present-replace-container"
          transitionName="fade-wait"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <SlideDetail slide={this.currentSlide()} />
        </ReactCSSTransitionReplace>
        <Progress completed={progress} color="darkseagreen" height={5}/>
      </div>
    );
  }
}

export default PresentView;
