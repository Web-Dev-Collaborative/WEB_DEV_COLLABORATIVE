import {
  RECEIVE_STATE,
  UPDATE_TEXT
} from '../actions';
import { parseSlides } from '../util/slides';

const slidesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_STATE:
    case UPDATE_TEXT:
      return parseSlides(action.text);

    default:
      return state;
  }
};

export default slidesReducer;
