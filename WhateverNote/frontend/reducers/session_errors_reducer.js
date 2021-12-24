import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/user_actions';
import {CLEAR_ERRORS} from '../actions/error_actions';

export default function sessionErrorsReducer(state=[], action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return [action.errors.responseJSON]
        case RECEIVE_CURRENT_USER, CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}