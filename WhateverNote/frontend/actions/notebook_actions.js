import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
})

const receiveAllNotebooks = notebooks => ({
    type: RECEIVE_ALL_NOTEBOOKS,
    notebooks
})

const removeNotebook = notebookId => ({
    type: REMOVE_NOTEBOOK,
    notebookId
})

const receiveNotebookErrors = errors => ({
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
})

// THUNK ACTIONS

export const fetchNotebooks = () => dispatch => (
    NotebookApiUtil.fetchNotebooks().then( notebooks => dispatch(receiveAllNotebooks(notebooks)), errors => dispatch(receiveNotebookErrors(errors)))
)

export const fetchNotebook = id => dispatch => (
    NotebookApiUtil.fetchNotebook(id).then( notebook => dispatch(receiveNotebook(notebook)), errors => dispatch(receiveNotebookErrors(errors)))
)

export const createNotebook = notebook => dispatch => (
    NotebookApiUtil.createNotebook(notebook).then( notebook => dispatch(receiveNotebook(notebook)), errors => dispatch(receiveNotebookErrors(errors)))
)

export const updateNotebook = notebook => dispatch => (
    NotebookApiUtil.updateNotebook(notebook).then( notebook => dispatch(receiveNotebook(notebook)), errors => dispatch(receiveNotebookErrors(errors)))
)

export const deleteNotebook = id => dispatch => (
    NotebookApiUtil.deleteNotebook(id).then( () => dispatch(removeNotebook(id)), errors => dispatch(receiveNotebookErrors(errors)))
)