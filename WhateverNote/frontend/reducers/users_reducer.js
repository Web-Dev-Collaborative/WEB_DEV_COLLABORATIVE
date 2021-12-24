import {RECEIVE_CURRENT_USER} from '../actions/user_actions';

export default function usersReducer(state={}, action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        default:
            return state;
    }
}