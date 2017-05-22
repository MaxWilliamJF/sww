import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api.js';
import Loading from '../shared/Loading';

class Films extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			films: null
		}
	}

	componentWillMount() {
		Api.fetchMovies().then(films => {
			this.setState({
				isLoading: false,
				films: films
			})
		});
	}

    render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var movies = this.state.films.map(function(film, i) {
    			return <li key={film.episode_id}>
    					<Link to={'/films/'+(i+1)}>
	    					{film.title}
    					</Link>
					   </li>
     		})

	        return (
	            <div>
	            	<h1>Films</h1>
	            	<ul>{movies}</ul>
	            </div>
	        )
     	}

    }
}

export default Films;
