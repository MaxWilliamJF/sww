import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Topo from './components/shared/Topo';
import Main from './components/shared/Main';
import './components/shared/shared.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topo />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
