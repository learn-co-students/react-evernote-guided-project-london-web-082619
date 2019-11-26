import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteContainer from './containers/noteContainer';





class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header />
        <NoteContainer  /> 
      </div>
    );
  }
}

export default App;

