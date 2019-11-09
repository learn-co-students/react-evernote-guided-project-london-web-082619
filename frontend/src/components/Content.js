import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state ={
    display: 'instructions'
  }
  
  changeDisplay = (val) => this.setState({display: val})

  renderContent = () => {
    if (this.state.display === 'edit') {
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
