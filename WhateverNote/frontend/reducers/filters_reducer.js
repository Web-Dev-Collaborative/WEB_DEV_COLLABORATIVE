import { CLEAR_FILTER, SET_FILTER } from '../actions/filter_actions';

export default function filtersReducer(state = null, action){
    Object.freeze(state);
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        case CLEAR_FILTER:
            return null
        default:
            return state;
    }
}