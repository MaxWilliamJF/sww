import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div id="page" className="width-limit">
            	<h2>Welcome to the Star Wars World!</h2>
            	<p>Here you can find a lot of info about Star Wars, including the films them selves, vehicles and of course, about your favorite characters.</p>
            </div>
        );
    }
}

export default Home;
