import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

export default function NotesIndexItems({notes, users}){
    return(
        <>
            {notes.map(note => {
                return(
                    <NoteIndexItemContainer  key={note.id} note={note} users={users}/>
                )
            })}
        </>
    )
}