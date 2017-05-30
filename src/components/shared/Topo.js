import React, { Component } from 'react';
import Menu from './Menu';
import './menu.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(reg){
      console.debug("Service worker is running fine :)");
    }).catch(function(err) {
      console.error("Service worker error: ", err)
    });
}

class Topo extends Component {
    render() {
        return (
            <div id="topo">
            	<Menu />
            	<div id="titulo-topo" className="width-limit">
            		<h1>Star Wars</h1>
            	</div>
            </div>
        );
    }
}

export default Topo;
