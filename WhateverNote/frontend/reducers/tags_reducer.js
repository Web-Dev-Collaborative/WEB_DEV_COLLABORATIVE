import { DELETE_TAG, RECEIVE_ALL_TAGS, RECEIVE_TAG } from "../actions/tag_actions";

export default function tagsReducer(state = {}, action) {
    Object.freeze(state)
    let newState = Object.assign({}, state) 
    switch (action.type) {
        case RECEIVE_ALL_TAGS:
            action.tags.forEach( tag => newState[tag.id] = tag )
            return newState;
        case RECEIVE_TAG:
            newState[action.tag.id] = action.tag
            return newState;
        case DELETE_TAG:
            delete newState[action.tagId]
            return newState;
        default:
            return state;
    }
}