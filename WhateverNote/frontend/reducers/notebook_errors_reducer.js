import {RECEIVE_ALL_NOTEBOOKS, RECEIVE_NOTEBOOK_ERRORS, RECEIVE_NOTEBOOK} from '../actions/notebook_actions'

export default function notebookErrorsReducer(state = [], action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTEBOOK_ERRORS:
            return action.errors;
        case RECEIVE_NOTEBOOK, RECEIVE_ALL_NOTEBOOKS:
            return [];
        default:
            return state;
    }
}