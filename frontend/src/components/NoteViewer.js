import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {title, body, id, category} = props.content
  console.log(props.content.title)
  return (
    <Fragment>
      <h5>{category}</h5>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={()=> props.changeDisplay('edit')}>Edit</button>
      <button onClick={()=> props.removeNote(id)}>Delete</button>
    </Fragment>
  );
}

export default NoteViewer;
