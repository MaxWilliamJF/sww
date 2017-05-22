import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import filmsList from './filmsList';
import filmDetails from './filmDetails';

class Films extends Component {
    render() {
        return (
		  <Switch>
		    <Route path='/films/:filmId' component={filmDetails}/>
		    <Route exact path='/films' component={filmsList}/>
		  </Switch>
        );
    }
}

export default Films;
