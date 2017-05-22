import React, { Component } from 'react';
import Loading from '../shared/Loading';
import Api from '../../utils/api.js';

class personDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	person: null
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

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	return (
	    		<h1>{this.state.person.name}</h1>
			)
		}
    }

}

export default personDetails;
