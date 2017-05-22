import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
    render() {
        return (
        	<div className="loading">
        		<img src="/img/Loading.gif" alt="Loading..." />
        	</div>
        );
    }
}

export default Loading;
