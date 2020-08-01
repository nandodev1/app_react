import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component {

  render(){
    console.log('App component render invoder.');
    return (
      <div className="App">
          <Main/>
      </div>
    );
  }
}

export default App;
