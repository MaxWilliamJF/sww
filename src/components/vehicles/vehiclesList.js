import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api.js';
import Loading from '../shared/Loading';

class vehiclesList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			vehicles: null
		}
	}

	componentWillMount() {
		Api.fetchVehicles().then(vehicles => {
			this.setState({
				isLoading: false,
				vehicles: vehicles
			})
		});
	}

    render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var vehicles = this.state.vehicles.results.map(function(vehicle, i) {
	    		var id = vehicle.url.replace('http://swapi.co/api/vehicles/', '')
    			return <li key={i}>
    					<Link to={'/vehicles/'+id}>
	    					{vehicle.name}
    					</Link>
					   </li>
     		})

	        return (
	            <div>
	            	<h1>Vehicles</h1>
	            	<ul>{vehicles}</ul>
	            </div>
	        )
     	}

    }
}

export default vehiclesList;
