const axios = require('axios');

module.exports = {
	fetchMovies: function() {
		return axios.get('http://swapi.co/api/films/')
			.then(function (response) {
				return response.data.results;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchMovie: function(id) {
		return axios.get('http://swapi.co/api/films/'+id)
			.then(function (response) {
				return (response.data);
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	fetchPeople: function() {
		return axios.get('http://swapi.co/api/people/')
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	fetchPerson: function(id) {
		return axios.get('http://swapi.co/api/people/'+id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchVehicles: function() {
		return axios.get('http://swapi.co/api/vehicles/')
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	fetchVehicle: function(id) {
		return axios.get('http://swapi.co/api/vehicles/'+id)
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	}
}