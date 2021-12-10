export const RECEIVE_STATE = 'RECEIVE_STATE';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_SLIDE_INDEX = 'UPDATE_SLIDE_INDEX';


export const receiveState = ({ text, slideIndex }) => ({
  type: RECEIVE_STATE,
  text,
  slideIndex
});

export const resetState = () => {
  localStorage.clear();
  return {
    type: RECEIVE_STATE,
    text: null,
    slideIndex: null
  };
};

export const updateText = (text) => {
  localStorage.setItem('text', text);
  return {
    type: UPDATE_TEXT,
    text
  };
};

export const updateSlideIndex = (slideIndex) => {
  localStorage.setItem('slideIndex', slideIndex);
  return {
    type: UPDATE_SLIDE_INDEX,
    slideIndex
  };
};
