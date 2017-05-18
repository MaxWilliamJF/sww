import React, { Component } from 'react';
import axios from 'axios';
import Topo from './components/shared/Topo';
import Page from './components/shared/Page';
import './components/shared/shared.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo />
        <Page />
      </div>
    );
  }
}

export default App;
