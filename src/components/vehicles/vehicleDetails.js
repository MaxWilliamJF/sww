import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class vehicleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	vehicle: null,
            filmsItAppears: []
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

    componentDidUpdate() {
        if ( this.state.vehicle && !this.state.filmsItAppears.length ) {
            Api.fetchMultipleFilms( this.state.vehicle.filmsItAppears ).then(filmsItAppears => {
                this.setState({
                    filmsItAppears: filmsItAppears
                })
            });
        }
    }

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

        if ( this.state.filmsItAppears.length ) {
            var films = this.state.filmsItAppears.map(function(film, i) {
                return <li key={i}>
                        <Link to={'/films/'+(i+1)}>
                            {film.data.title}
                        </Link>
                       </li>
            })
        }

    	if ( !this.state.isLoading ) {
	    	return (
                <div>
            		<h1>{this.state.vehicle.name}</h1>
                    <h2>Basic info</h2>
                    <div>
                        <strong>Model: </strong>{this.state.vehicle.model}
                    </div>
                    <div>
                        <strong>Manufacturer: </strong>{this.state.vehicle.manufacturer}
                    </div>
                    <div>
                        <strong>Passengers: </strong>{this.state.vehicle.passengers}
                    </div>
                    <h2>Films it appears</h2>
                    <ul>{films}</ul>
                </div>
			)
		}
    }

}

export default vehicleDetails;
