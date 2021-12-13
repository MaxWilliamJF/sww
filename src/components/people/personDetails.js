import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class personDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	person: null,
            filmsItAppears: []
        }
    }

	componentWillMount() {
		Api.fetchPerson( this.props.match.params.personId ).then(person => {
			this.setState({
				isLoading: false,
				person: person
			})
		});
	}

    componentDidUpdate() {
        if ( this.state.person && !this.state.filmsItAppears.length ) {
            Api.fetchMultipleFilms( this.state.person.films ).then(filmsItAppears => {
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
                var id = film.data.url.replace(Api.baseURL + '/films/', '')
                return <li key={i}>
                        <Link to={'/films/'+id}>
                            {film.data.title}
                        </Link>
                       </li>
            })
        }

    	if ( !this.state.isLoading ) {
	    	return (
                <div>
                    <h1>{this.state.person.name}</h1>
                    <h2>Personal info</h2>
                    <div>
                        <strong>Height: </strong>{this.state.person.height + ' cm'}
                    </div>
                    <div>
                        <strong>Eye color: </strong>{this.state.person.eye_color}
                    </div>
                    <div>
                        <strong>Birth year: </strong>{this.state.person.birth_year}
                    </div>
                    <div>
                        <strong>Gender: </strong>{this.state.person.gender}
                    </div>
                    <h2>Films participated</h2>
                    <ul>{films}</ul>
                </div>
			)
		}
    }

}

export default personDetails;
