import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.show,
			films: props.movies,
			search: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.show !== this.state.isOpen) {
			this.setState({
				isOpen: nextProps.show
			});
		}

		if (nextProps.movies !== this.state.films) {
			this.setState({
				films: nextProps.movies
			})
		}
	}

	closeSearch = () => {
		this.setState({
			isOpen: false
		})
	}

	updateSearch(ev) {
		this.setState({
			search: ev.target.value
		})
	}

    render() {
    	if ( this.state.films ) {
    		var movies = this.state.films.filter(
    			(film) => {
    				return film.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    			}
			)

			var films = movies.map(function(film, i) {
				return <li key={film.episode_id}>
						<Link to={'/films/'+(i+1)}>{film.title}</Link>
					   </li>
			})
		}

        return (
			<div id="search" className={ (this.state.isOpen) ? 'open' : '' }>
    			<button type="button" className="close" onClick={this.closeSearch}>Back</button>
    			<input type="text" name="name" onChange={this.updateSearch.bind(this)} placeholder="Ex: Film name" />
    			<button type="button" className="filter">Filter</button>
    			<div id="results">
    				<ul>{films}</ul>
    			</div>
			</div>
        );
    }
}

export default Search;
