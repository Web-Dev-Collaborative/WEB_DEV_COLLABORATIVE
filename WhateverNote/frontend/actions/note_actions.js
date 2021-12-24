import * as NoteApiUtil from '../util/notes_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

const receiveAllNotes = notes => ({
    type: RECEIVE_ALL_NOTES,
    notes
})

const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
})

const removeNote = noteId => ({
    type: REMOVE_NOTE,
    noteId
})

const receiveNoteErrors = errors => ({
    type: RECEIVE_NOTE_ERRORS,
    errors
})

// THUNK ACTIONS

export const fetchNotes = () => dispatch => {
    return NoteApiUtil.fetchNotes().then( notes => dispatch(receiveAllNotes(notes)), errors => dispatch(receiveNoteErrors(errors)))
}

export const fetchNote = noteId => dispatch => {
    return NoteApiUtil.fetchNote(noteId).then( note => dispatch(receiveNote(note)), errors => dispatch(receiveNoteErrors(errors)))
}

export const createNote = note => dispatch => {
    return NoteApiUtil.createNote(note).then( note => dispatch(receiveNote(note)), errors => dispatch(receiveNoteErrors(errors)))
}

export const updateNote = note => dispatch => {
    return NoteApiUtil.updateNote(note).then( note => dispatch(receiveNote(note)), errors => dispatch(receiveNoteErrors(errors)))
}

export const deleteNote = noteId => dispatch => {
    return NoteApiUtil.deleteNote(noteId).then(()=> dispatch(removeNote(noteId)), errors => dispatch(receiveNoteErrors(errors)))
}

