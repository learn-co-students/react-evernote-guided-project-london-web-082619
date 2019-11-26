import React from 'react';

const NoteItem = (props) =>{
    const {title, body, category} = props.note
    return(
        <div onClick={props.handleClick}>
            <h5>{category}</h5>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
export default NoteItem