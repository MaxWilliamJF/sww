import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div id="menu" className="width-limit">
            	<nav>
            		<ul>
            			<li><Link to='/'>Home</Link></li>
            			<li><Link to='/films'>Films</Link></li>
            			<li><Link to='/people'>People</Link></li>
            			<li><Link to='/vehicles'>Vehicles</Link></li>
            		</ul>
            	</nav>
            </div>
        );
    }
}

export default Menu;
