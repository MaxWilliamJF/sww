import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Topo from './components/shared/Topo';
import Main from './components/shared/Main';
import './components/shared/shared.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(reg){
      console.debug("Service worker is running fine :)");
    }).catch(function(err) {
      console.error("Service worker error: ", err)
    });
}

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
