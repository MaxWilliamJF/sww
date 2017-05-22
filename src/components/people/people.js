import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import peopleList from './peopleList';
import personDetails from './personDetails';

class People extends Component {
    render() {
        return (
		  <Switch>
		    <Route path='/people/:personId' component={personDetails}/>
		    <Route exact path='/people' component={peopleList}/>
		  </Switch>
        );
    }
}

export default People;
