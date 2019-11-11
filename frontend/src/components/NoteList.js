import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, selectedNote}) => {
  return (
    <ul>
      {notes.map(note => <NoteItem key={note.id} {...note} noteItem={()=> selectedNote(note, "NoteViewer")}/>)}
      
    </ul>
  );
}

export default NoteList;
