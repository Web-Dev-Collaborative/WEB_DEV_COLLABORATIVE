import * as actionTypes from "../actions/types";

// temporary moved to the levels reducers
// it'll moved here later when needed...
const initialState = {
  goals: []
};

const gameLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameLevelReducer;
