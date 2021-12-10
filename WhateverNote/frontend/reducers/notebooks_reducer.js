import {RECEIVE_ALL_NOTEBOOKS, REMOVE_NOTEBOOK, RECEIVE_NOTEBOOK} from '../actions/notebook_actions';
import {LOGOUT_CURRENT_USER} from '../actions/user_actions';

export default function notebooksReducer(state={}, action){
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ALL_NOTEBOOKS:
            action.notebooks.forEach(notebook => {
                newState[notebook.id] = {
                    id: notebook.id,
                    updatedAt: notebook.updated_at,
                    createdAt: notebook.created_at,
                    name: notebook.name,
                    authorId: notebook.author_id,
                    notes: notebook.notes.map(note => note.id)
                }
            })
            return Object.assign({}, state, newState);
        case RECEIVE_NOTEBOOK:
            return Object.assign({}, state, {[action.notebook.id]: {
                    id: action.notebook.id,
                    updatedAt: action.notebook.updated_at,
                    createdAt: action.notebook.created_at,
                    name: action.notebook.name,
                    authorId: action.notebook.author_id,
                    notes: action.notebook.notes.map(note => note.id)
                }});
        case REMOVE_NOTEBOOK:
            newState = Object.assign({}, state);
            delete newState[action.notebookId];
            return newState; 
        case LOGOUT_CURRENT_USER:
            return {};
        default:
          return state;
    }
}