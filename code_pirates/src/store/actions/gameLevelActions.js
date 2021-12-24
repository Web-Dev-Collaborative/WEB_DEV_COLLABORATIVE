import * as actionTypes from "./types";

// experimenting...
export const getLevelGoals = id => {
  return {
    type: actionTypes.FINISH_LVL,
    payload: id
  };
};
