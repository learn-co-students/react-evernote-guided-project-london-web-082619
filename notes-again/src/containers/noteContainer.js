import React from 'react';
import NoteList from '../components/NoteList';
import Search from '../components/Search';
import Category from '../components/Category';
import Content from './Content';

const baseUrl = 'http://localhost:3000'
const notesUrl = baseUrl + '/api/v1/notes'

const get = () => fetch(notesUrl).then(res => res.json())
export default class NoteContainer extends React.Component{
    state = {
        notes: [],
        selectedNote: null

    }
    getNotes = () => get().then(notes => this.setState({notes}))
    
    componentDidMount() {
        this.getNotes()
    }
    
    selectedNote = (noteId) =>{
        console.log(noteId)
        this.setState({selectedNote: this.state.notes.find(note =>
            note.id === noteId)})
    }

    getSelectedNote = () =>{
        return this.selectedNote()
    }

    removeNote = (idx) =>{
        
    }
    render() {
        const selectedNote= this.getSelectedNote()
        return (
            <div className="container">
                <Search findNote={this.findNote} />
                <Category type={this.noteType} removeNote={this.removeNote} />
                <NoteList notes={this.state.notes} displayContent={this.selectedNote} />
                <Content note={this.state.selectedNote} editNote={this.editNote} />
            </div>
        )
    }
}