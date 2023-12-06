const axios = require('axios');
const { Movie } = require('../models/movie');
const { APIError } = require('../utils/apiError');
const { apiUrlFactory } = require('../utils/apiUrlFactory');
const apiKey = process.env.OMDB_API_KEY;
const { AppStrings } = require('../utils/constants/appStrings');
const { AppNumbers } = require('../utils/constants/appNumbers');

const omdbApiKeyFactory = apiUrlFactory(AppStrings.omdbBaseApiUrl, apiKey);

async function fetchApiData(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        const hasNoData = response.data[AppStrings.apiJsonResponseKey] === 'False';

        if (hasNoData) {
            let apiErrorMessage = response.data[AppStrings.apiJsonErroKey];
            
            throw new APIError(AppNumbers.statusCodeDataNotFound, apiErrorMessage);
        }

        return response.data;

    } catch (error) {
        if (error.response) {
            throw new APIError(error.response.status, error.message);
        } else {
            throw error;
        }
    }
}

async function getMoviesListByTitle(movieName) {
    const apiUrl = omdbApiKeyFactory({ [AppStrings.apiSerachParameter]: movieName });
    const response = await fetchApiData(apiUrl);
    let movieList = response[AppStrings.apiJsonSearchKey].map(movieDetails => Movie.instanceMovieFromApiResponse(movieDetails));

    return movieList;
}

async function getMovieDetailsById(movieId) {
    const apiUrl = omdbApiKeyFactory({ [AppStrings.apiIdParameter]: movieId });
    const response = await fetchApiData(apiUrl);

    return Movie.instanceMovieFromApiResponse(response);
}

module.exports = { getMoviesListByTitle, getMovieDetailsById };
