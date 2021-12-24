import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_NOTEBOOK } from '../actions/notebook_actions';
import {RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE} from '../actions/note_actions';
import {LOGOUT_CURRENT_USER} from '../actions/user_actions';

export default function notesReducer(state={}, action){
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ALL_NOTES:
            action.notes.forEach(note=>{newState[note.id] = note})
            return newState;
        case RECEIVE_NOTE:
            return Object.assign({}, state, {[action.note.id]: action.note})
        // case RECEIVE_NOTEBOOK:
        //     action.notebook.notes.forEach(note=>{newState[note.id] = note});
        //     return Object.assign({}, state, newState);
        // case RECEIVE_ALL_NOTEBOOKS:
        //     action.notebooks.forEach(notebook => notebook.notes.forEach(note=>{newState[note.id] = note}))
        //     return Object.assign({}, state, newState);
        case REMOVE_NOTE:
            newState = Object.assign({}, state);
            delete newState[action.noteId];
            return newState;  
        case LOGOUT_CURRENT_USER:
            return {};  
        default:
            return state;
    }
}