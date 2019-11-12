import React from 'react';

const NoteItem = ({title, body, category, noteItem}) => (
  <li onClick={noteItem}>
    <h5>{category}</h5>
    <h2>{title}</h2>
    <p>{body}</p>
  </li>
);

export default NoteItem;
