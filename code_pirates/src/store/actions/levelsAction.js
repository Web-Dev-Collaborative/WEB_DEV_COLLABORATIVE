import * as actionTypes from "./types";

export const finishLvl = id => {
  return {
    type: actionTypes.FINISH_LVL,
    payload: id
  };
};

export const getLevelGoals = id => {
  return {
    type: actionTypes.GET_LEVEL_GOALS,
    payload: id
  };
};

export const setLevelGoals = (id, goals) => {
  return {
    type: actionTypes.SET_LEVEL_GOALS,
    payload: { id: id, goals: goals }
  };
};
