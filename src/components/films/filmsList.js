import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import Api from '../../utils/api.js';
import Loading from '../shared/Loading';
import './filmsList.css';

class Films extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			films: null,
			showSearch: false
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


	handleClick = () => {
		this.setState({
			showSearch: true
		})
	}

	render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var movies = this.state.films.map(function(film, i) {
	    		var id = film.url.replace('http://swapi.co/api/films/', '')
    			return <li key={film.episode_id}>
    					<Link to={'/films/'+id}>
	    					{film.title}
    					</Link>
					   </li>
     		})

	        return (
	            <div>
	            	<Search show={this.state.showSearch} movies={this.state.films} />
	            	<header id="searchHeader">
	            		<h1>Films</h1>
	            		<button className="btn" onClick={this.handleClick}>Search</button>
	            	</header>
	            	<ul>{movies}</ul>
	            </div>
	        )
     	}

    }
}

export default Films;
