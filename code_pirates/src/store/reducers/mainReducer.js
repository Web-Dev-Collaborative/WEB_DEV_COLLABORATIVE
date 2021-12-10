import * as actionTypes from "../actions/types";

const initialState = {
  tags: [
    // { id: "html", content: "<html> </html>", tip: "هيكلة الصفحة" },
    { id: "p", content: "<p> </p>", tip: "صغير بس فنان" },
    { id: "h1", content: "<h1> </h1>", tip: "رهييب" },
    { id: "img", content: "<img />", tip: "حافظ على الراية" }
  ],
  buildingBlocks: [],
  textObj: { class: "TextBlock" }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BLOCK:
      return {
        ...state,
        buildingBlocks: state.buildingBlocks.concat(action.payload)
      };
    case actionTypes.DELETE_BLOCK:
      return {
        ...state,
        buildingBlocks: state.buildingBlocks.filter(bb => bb !== action.payload)
      };
    case actionTypes.SET_BB:
      return {
        ...state,
        buildingBlocks: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;
