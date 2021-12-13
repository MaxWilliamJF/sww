const axios = require('axios');
const baseURL = 'http://swapi.dev/api';

module.exports = {
	baseURL: baseURL,

	fetchMovies: function () {
		return axios.get(baseURL + '/films/')
			.then(function (response) {
				return response.data.results;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchMovie: function (id) {
		return axios.get(baseURL + '/films/' + id + '/')
			.then(function (response) {
				return (response.data);
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchMultipleFilms: function (moviesId = []) {
		moviesId = moviesId.map(function (x) {
			return x.replace(/http/g, "https")
		})

		var movies = moviesId.map(function (url) {
			return axios.get(url);
		});

		return axios.all(movies)
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchPeople: function () {
		return axios.get(baseURL + '/people/')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchPerson: function (id) {
		return axios.get(baseURL + '/people/' + id + '/')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchMultiplePeople: function (peopleId = []) {
		peopleId = peopleId.map(function (x) {
			return x.replace(/http/g, "https")
		})

		var characters = peopleId.map(function (url) {
			return axios.get(url);
		});

		return axios.all(characters)
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchVehicles: function () {
		return axios.get(baseURL + '/vehicles/')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchVehicle: function (id) {
		return axios.get(baseURL + '/vehicles/' + id + '/')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	fetchMultipleVehicles: function (vehiclesId = []) {
		vehiclesId = vehiclesId.map(function (x) {
			return x.replace(/http/g, "https")
		})

		var characters = vehiclesId.map(function (url) {
			return axios.get(url);
		});

		return axios.all(characters)
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},
}