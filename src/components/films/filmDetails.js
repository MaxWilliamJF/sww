import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class filmDetails extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			film: null,
			peopleInTheMovie: [],
			vehiclesInTheMovie: []
		}
	}

	componentWillMount() {
		Api.fetchMovie( this.props.match.params.filmId ).then(film => {
			this.setState({
				isLoading: false,
				film: film
			})
		});
	}

	componentDidUpdate() {
		if ( this.state.film && !this.state.peopleInTheMovie.length ) {
			Api.fetchMultiplePeople( this.state.film.characters ).then(peopleInTheMovie => {
				this.setState({
					peopleInTheMovie: peopleInTheMovie
				})
			});
		}

		if ( this.state.film && !this.state.vehiclesInTheMovie.length ) {
			Api.fetchMultipleVehicles( this.state.film.vehicles ).then(vehiclesInTheMovie => {
				this.setState({
					vehiclesInTheMovie: vehiclesInTheMovie
				})
			});
		}
	}

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( this.state.peopleInTheMovie.length ) {
	    	var characters = this.state.peopleInTheMovie.map(function(person, i) {
    			return <li key={i}>
    					<Link to={'/people/'+(i+1)}>
	    					{person.data.name}
    					</Link>
					   </li>
     		})
    	}

    	if ( this.state.vehiclesInTheMovie.length ) {
    		var vehicles = this.state.vehiclesInTheMovie.map(function(vehicle, i) {
    			var id = vehicle.data.url.replace('http://swapi.co/api/vehicles/', '')
    			return <li key={i}>
    					<Link to={'/vehicles/'+id}>
	    					{vehicle.data.name}
    					</Link>
					   </li>
    		})
    	}

    	if ( this.state.film ) {
	        return (
	        	<div>
		            <h1>{this.state.film.title}</h1>
		            <h2>Techinal info</h2>
		            <div>
		            	<strong>Episode: </strong>{this.state.film.episode_id}
		            </div>
		            <div>
		            	<strong>Director: </strong>{this.state.film.director}
		            </div>
		            <div>
		            	<strong>Producer(s): </strong>{this.state.film.producer}
		            </div>
		            <h2>People</h2>
		            <ul>{characters}</ul>
		            <h2>Vehicles</h2>
		            <ul>{vehicles}</ul>
	        	</div>

	        );
		}

    }
}

export default filmDetails;
