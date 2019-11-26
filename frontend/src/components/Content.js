import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {
  state ={
    display: 'instructions',
    
  }
  
  changeDisplay = (val) => this.setState({display: val})
  
  renderContent = () => {

    if (this.state.display === 'edit') {
      return <NoteEditor 
      note={this.props.note}
      handleEdit={this.props.updateNote}
      changeDisplay={this.changeDisplay}
      />;
    } else if (this.props.note && this.props.note.title === "add Title...") {
      return <NoteEditor 
      note={this.props.note}
      handleEdit={this.props.updateNote}
      changeDisplay={this.changeDisplay}
      />;
    } else if (this.props.note) {
      return <NoteViewer 
      content={this.props.note}
      changeDisplay={this.changeDisplay}
      removeNote={this.props.removeNote}
      />;
    } else  {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
