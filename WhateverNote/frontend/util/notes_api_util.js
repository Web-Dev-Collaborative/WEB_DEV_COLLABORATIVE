export const fetchNotes = () => {
    return $.ajax({
        url: `/api/notes`
    })
}

export const fetchNote = noteId => {
    return $.ajax({
        url: `/api/notes/${noteId}`
    })
}

export const createNote = note => {
    return $.ajax({
        url: `/api/notes`,
        method: "POST",
        data: {note}
    })
}

export const updateNote = note => {
    return $.ajax({
        url: `/api/notes/${note.id}`,
        method: "PATCH",
        data: {note}
    })
}

export const deleteNote = noteId => {
    return $.ajax({
        url: `/api/notes/${noteId}`,
        method: "DELETE",
    })
}