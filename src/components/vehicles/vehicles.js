import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import vehiclesList from './vehiclesList';
import vehicleDetails from './vehicleDetails';

class Vehicles extends Component {
    render() {
        return (
		  <Switch>
		    <Route path='/vehicles/:vehicleId' component={vehicleDetails}/>
		    <Route exact path='/vehicles' component={vehiclesList}/>
		  </Switch>
        );
    }
}

export default Vehicles;
