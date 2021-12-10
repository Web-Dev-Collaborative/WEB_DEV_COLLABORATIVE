import * as actionTypes from "../actions/types";

const initialState = {
  lang: [
    {
      id: 1,
      name: "</ جـز يـرة HTML >",
      imageUrl: "",
      titleColor: "#ea6228",
      isAvailable: true,
      isPass: false
    },
    {
      id: 2,
      name: "</ جـز يـرة CSS >",
      imageUrl: "",
      titleColor: "#29a4d9",
      isAvailable: false,
      isPass: false
    },
    {
      id: 3,
      name: "</ جـز يـرة JavaScript >",
      imageUrl: "",
      titleColor: "#f6d43c",
      isAvailable: false,
      isPass: false
    }
  ]
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default languagesReducer;
