import * as actionTypes from "./types";

export const addBuildingBlock = block => {
  console.log("TCL: block1", block);
  return {
    type: actionTypes.ADD_BLOCK,
    payload: block
  };
};
export const deleteBlock = block => {
  console.log("TCL: block2", block);

  return {
    type: actionTypes.DELETE_BLOCK,
    payload: block
  };
};
export const setBuildingBlocks = newBB => {
  return {
    type: actionTypes.SET_BB,
    payload: newBB
  };
};
