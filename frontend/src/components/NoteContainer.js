import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const beasUrl = 'http://localhost:3000'
const notesUrl = beasUrl + "/api/v1/notes"
const fetchConfig = (url, body=null, method='GET') =>{
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
    filterNotes: [],
    isFiltered: false
  }

  getNotes = () => get(notesUrl).then(notes => this.setState({notes}));

  componentDidMount() { 
    this.getNotes()
   }
  /***************************************************************************************/

  displayContent = (selectedNote) => {
    this.setState({
      content: selectedNote
    })
  }

  updateNote = (editedNote) => {
    console.log(editedNote)
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === editedNote.id) return editedNote
        return note
      }),
      content: editedNote
    })
    fetchConfig(notesUrl + '/' + editedNote.id, editedNote,"PATCH")
  }
  addNewNote = () => {
    const newNote = {
      title: "add Title...", 
      body: "Add description..."
    }
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
            updateNote={this.updateNote}
            removeNote={this.removeNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
