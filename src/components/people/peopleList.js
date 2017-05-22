import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api.js';
import Loading from '../shared/Loading';

class peopleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	people: null
        }
    }

    componentWillMount() {
    	Api.fetchPeople().then(people => {
    		this.setState({
    			isLoading: false,
    			people: people
    		})
    	})
    }

    render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var people = this.state.people.results.map(function(person, i) {
				return <li key={i}>
						<Link to={'/people/'+(i+1)}>
	    					{person.name}
						</Link>
					   </li>
	 		})

	        return (
	        	<div>
	        		<h1>People</h1>
	        		<ul>{people}</ul>
	        	</div>
        	)
        }

    }
}

export default peopleList;
