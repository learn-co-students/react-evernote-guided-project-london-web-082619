import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const beasUrl = 'http://localhost:3000'
const notesUrl = beasUrl + "/api/v1/notes"
const fetchConfig = (url, body, method='GET') =>{
  return fetch(url,{
    method: method,
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

const get = (url) => fetch(url).then(res => res.json())

const removeData = (url, dataId) => fetch(`${url}/${dataId}`, {method: "DELETE"}).then(res => res.json())

const post = (url, data) => fetchConfig(url, data, "POST")


class NoteContainer extends Component {
  state = {
    notes: [],
    content: null,
    displayNote: "instructions",
    filterNotes: [],
    isFiltered: false
  }

  getNotes = () => get(notesUrl).then(notes => this.setState({notes}));

  componentDidMount() { 
    this.getNotes()
   }
  /***************************************************************************************/

  displayContent = (selectedNote, changeDisplay) => {
    this.setState({
      content: selectedNote,
      displayNote: changeDisplay
    })
  }

  updateNote = (editedNote) => {
    console.log(editedNote)
    if(this.state.notes.find(note => note.id === editedNote.id)){
      this.setState({
        notes: this.state.notes.map(note => {
          
          if (note.id === editedNote.id) 
            return editedNote
          else
            return note
        }),
        content: editedNote
      })
      fetchConfig(notesUrl + '/' + editedNote.id, editedNote,"PATCH")
    }else {
      this.createNote(editedNote)
    }

  }
  // updateNote = (editedNote) => {
  //   console.log(editedNote)
  //   this.setState({
  //     notes: this.state.notes.map(note => {
  //       // [note, note, editedNote, note] so if the note match edited note change it
  //       if (note.id === editedNote.id) 
  //         return editedNote
  //       else
  //         return note
  //     }),
  //     content: editedNote
  //   })
  //   fetchConfig(notesUrl + '/' + editedNote.id, editedNote,"PATCH")
  // }
  addNewNote = () => {
    const newNote = {
      title: "add Title...", 
      body: "Add description..."
    } 
    this.setState({
      content: newNote
    })
  }
  // addNewNote = () => {
  //   const newNote = {
  //     title: "add Title...", 
  //     body: "Add description..."
  //   }
  //   post(notesUrl, newNote)
  //   .then(notes => this.setState({
  //     notes: [...this.state.notes, notes],
  //     // empty content display Instructions components in Content component based on the condition 
  //     content: ""
  //   }))
  // }
  createNote = (newNote) => {
    post(notesUrl, newNote)
    .then(notes => this.setState({
      notes: [...this.state.notes, notes],
      // empty content display Instructions components in Content component based on the condition 
      content: ""
    }))
  }

  removeNote = (noteId) =>{
    removeData(notesUrl,noteId)
    .then(this.setState({
      notes: this.state.notes.filter(
      note => note.id !== noteId),
      content: ""
    }))
  }
  search = (noteTitle) => {

    this.setState({
      filterNotes: this.state.notes.filter(note => note.title.toLocaleLowerCase().includes(noteTitle)),
      isFiltered: true
    })
    
  }
  render() {
    const listNotes = this.state.isFiltered ? this.state.filterNotes : this.state.notes
    return (
      <Fragment>
        <Search search={this.search}/>
        <div className='container'>
          <Sidebar notes={listNotes} 
            selectedNote={this.displayContent} 
            newNote={this.addNewNote} />
          <Content 
            note={this.state.content} 
            display={this.state.displayNote}
            updateNote={this.updateNote}
            removeNote={this.removeNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
