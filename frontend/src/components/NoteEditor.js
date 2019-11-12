import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'



class NoteEditor extends Component {
  state = {
    category: '',
    title: '',
    body: '',
    id: null
  }

  handleChange = (e, data) => {
    if (data) {
      this.setState({ [data.name]: data.value})
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  componentDidMount() {
    // because the title, body and id in state are empty  the content will be empty so
    // we rerender the previos value from props.note then we can edit the state by submit 
    this.setState({
      category: this.props.note.category,
      title: this.props.note.title,
      body: this.props.note.body,
      id: this.props.note.id
    })
  }
  componentDidUpdate(prevProps, prevState) {
    
    // this is called whenever props or state changes

    // we need to store the new note in state
    // when props.note is a newly-selected note
    if(this.state.id !== this.props.note.id){

      this.setState({
        category: this.props.note.category,
        title: this.props.note.title,
        body: this.props.note.body,
        id: this.props.note.id
      })
    }
  }
  
  
  handleCancel = () => this.props.changeDisplay('instructions')
  handleSubmit = (e) =>{
    e.preventDefault()
    // send call back function to content with updated state
    this.props.handleEdit({...this.state})
    
    this.handleCancel()
  }
  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        
      <Dropdown
        placeholder='Select Category'
        fluid
        selection
        name="category"
        onChange={this.handleChange}
        value={this.state.category}
        options={[
          {
            text: 'Work',
            value: 'Work'
          },
          {
            text: 'Idea',
            value: 'Idea'
          },
          {
            text: 'Plan',
            value: 'Plan'
          }
        ]}
      />
        <textarea name="body" onChange={this.handleChange} value={this.state.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
