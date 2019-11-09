import React from 'react';

const NoteItem = ({title, body, noteItem}) => (
  <li onClick={noteItem}>
    <h2>{title}</h2>
    <p>{body}</p>
  </li>
);

export default NoteItem;
