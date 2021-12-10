import {CLOSE_MODAL, OPEN_MODAL} from '../actions/modal_actions';

export default function modalReducer(state=null, action){
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return {type: action.modal, info: action.info || {}}
        case CLOSE_MODAL:
            return null
        default:
            return state;
    }
}