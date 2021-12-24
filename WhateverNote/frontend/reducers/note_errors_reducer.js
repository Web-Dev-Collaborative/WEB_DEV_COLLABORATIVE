import {RECEIVE_ALL_NOTES, RECEIVE_NOTE, RECEIVE_NOTE_ERRORS} from '../actions/note_actions';
import {CLEAR_ERRORS} from '../actions/error_actions';

export default function noteErrorsReducer(state = [], action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTE_ERRORS:
            return action.errors;
        case RECEIVE_NOTE, RECEIVE_ALL_NOTES, CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}