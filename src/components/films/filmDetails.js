import React, { Component } from 'react';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class filmDetails extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			film: null
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

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( this.state.film ) {
	        return (
	            <h1>{this.state.film.title}</h1>
	        );
		}

    }
}

export default filmDetails;
