import React, { Component } from 'react';
import Menu from './Menu';
import './menu.css';

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
