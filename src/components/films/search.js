import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.show,
			hideFilter: true,
			films: props.movies,
			search: '',
			producerFilter: [],
			directorFilter: [],
			directors: [...new Set(props.movies.map(function(i) { return i.director }))].sort(),
			producers: [...new Set(props.movies.map(function(i) { return i.producer }))].sort()
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

	renderDirectors( dir, i ) {
		return (
			<li key={dir}>
				<input type='checkbox' id={'dir-'+i} name='directors' value={dir} onChange={ (e) => this.updateDirectorFilter(e) } />
				<label htmlFor={'dir-'+i}>{dir}</label>
			</li>
		)
	}

	renderProducers( prod, i ) {
		return (
			<li key={prod}>
				<input type='checkbox' id={'prod-'+i} name='producers' value={prod} onChange={ (e) => this.updateProducerFilter(e) } />
				<label htmlFor={'prod-'+i}>{prod}</label>
			</li>
		)
	}

	renderFilms( film ) {
		var id = film.url.replace('http://swapi.co/api/films/', '')
		return (
			<li key={film.episode_id}>
				<Link to={'/films/'+id}>{film.title}</Link>
			</li>
		)
	}

	updateSearch(ev) {
		this.setState({
			search: ev.target.value
		})
	}

	updateProducerFilter(ev) {
		if ( ev.target.checked ) {
			this.state.producerFilter.push( ev.target.value )
		} else {
			let i = this.state.producerFilter.indexOf( ev.target.value )
			if ( i !== -1 ) {
				this.state.producerFilter.splice(i, 1)
			}
		}
		let newValue = this.state.producerFilter
		this.setState({
			producerFilter: newValue
		})
	}

	updateDirectorFilter(ev) {
		if ( ev.target.checked ) {
			this.state.directorFilter.push( ev.target.value )
		} else {
			let i = this.state.directorFilter.indexOf( ev.target.value )
			if ( i !== -1 ) {
				this.state.directorFilter.splice(i, 1)
			}
		}
		let newValue = this.state.directorFilter
		this.setState({
			directorFilter: newValue
		})
	}

	getMovies() {
		return this.state.films.filter(
			(film) => {
				return film.title.toLowerCase().includes( this.state.search.toLowerCase() )
				&& (this.state.producerFilter.indexOf( film.producer ) !== -1 || !this.state.producerFilter.length)
				&& (this.state.directorFilter.indexOf( film.director ) !== -1 || !this.state.directorFilter.length)
			}
		)
	}

	toggleFilter() {
		const currentState = this.state.hideFilter
		console.debug('Toggle!')
		this.setState({
			hideFilter: !currentState
		})
		console.debug( (document.querySelector('#filters').classList) )

	}

    render() {
        return (
			<div id="search" className={ (this.state.isOpen) ? 'open' : '' }>
    			<button type="button" className="close" onClick={this.closeSearch}>Back</button>
    			<input type="text" name="name" onChange={this.updateSearch.bind(this)} placeholder="Ex: Film name" />
    			<div id="filters-wrapper">
    				<button type="button" className="filter" onClick={ this.toggleFilter.bind(this) }>
    					Filters in use { '('+ (this.state.producerFilter.length + this.state.directorFilter.length) +')'  }
					</button>
    				<div id="filters" className={ (this.state.hideFilter) ? 'open' : '' }>
	    				<h3>Directors</h3>
	    				<ul>{ this.state.directors.map((director, d) => this.renderDirectors( director, d )) }</ul>

						<h3>Producers</h3>
	    				<ul>{ this.state.producers.map((producer, p) => this.renderProducers( producer, p )) }</ul>
    				</div>
    			</div>
    			<div id="results">
    				<ul>{ this.getMovies().map((film) => this.renderFilms( film )) }</ul>
    			</div>
			</div>
        );
    }
}

export default Search;
