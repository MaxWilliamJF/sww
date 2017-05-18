import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div id="menu" className="width-limit">
            	<nav>
            		<ul>
            			<li>Films</li>
            			<li>People</li>
            			<li>Vehicles</li>
            		</ul>
            	</nav>
            </div>
        );
    }
}

export default Menu;
