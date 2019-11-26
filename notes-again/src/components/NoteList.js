import React from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends React.Component{
    render() {
        const {notes} = this.props
        return (
            <div>
                {notes.map(note => <NoteItem key={note.id}
                    note={note} 
                    handleClick={()=> this.props.displayContent(note.id)}/>)}
            </div>
        )
    }
}