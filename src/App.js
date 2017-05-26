import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Notify from './utils/notify';
import Topo from './components/shared/Topo';
import Main from './components/shared/Main';
import './components/shared/shared.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWelcomeMessage: (localStorage.getItem('messageShown')) ? false : true
    }
  }

  render() {
    if (this.state.showWelcomeMessage) {
      Notify.show('Hey, welcome!', 'May the force be with you!')
      localStorage.setItem('messageShown', true)
    }

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
