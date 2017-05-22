import React, { Component } from 'react';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class vehicleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	vehicle: null
        }
    }

	componentWillMount() {
		Api.fetchVehicle( this.props.match.params.vehicleId ).then(vehicle => {
			this.setState({
				isLoading: false,
				vehicle: vehicle
			})
		});
	}

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	return (
	    		<h1>{this.state.vehicle.name}</h1>
			)
		}
    }

}

export default vehicleDetails;
