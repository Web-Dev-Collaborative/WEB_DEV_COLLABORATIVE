const { combineReducers } = require("redux");
import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filtersReducer
})

export default uiReducer;