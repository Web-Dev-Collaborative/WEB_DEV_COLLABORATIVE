import React from 'react';

export default function NoNotesSplash({createNote}) {
    return(
        <div className="no-note-splash">
            <i className="fas fa-edit"></i>
            <h1>It all begins with notes</h1>
            <p>Click the <a onClick={createNote}>+ New Note</a> button in the sidebar to create a note.</p>
        </div>
    )
}