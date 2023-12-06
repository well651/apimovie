const express = require('express');
const router = express.Router();
const { errorMiddleware } = require('../utils/errorMiddleware');
const { getMoviesListByTitle, getMovieDetailsById } = require('../controllers/moviecontroller');
const { AppStrings } = require('../utils/constants/appStrings');
const { AppNumbers } = require('../utils/constants/appNumbers');

router.get(AppStrings.routeMain, (req, res) => {
    res.render(AppStrings.pageInitial, {
        style: AppStrings.cssFile
    });
});

router.post(AppStrings.routeFetchMovie, async (req, res, next) => {
    try {
        const { search } = req.body;
        let movieList = await getMoviesListByTitle(search);
        return res.status(AppNumbers.statusCodeSucess).render(AppStrings.pageFetchMovie, {
            movie: movieList,
            style: AppStrings.cssFile,
            menu: true
        });

    }
    catch (error) {
        next(error);

    }
});

router.get(`${AppStrings.routeMovieDetails}/:movieId`, async (req, res, next) => {
    try {
        const { movieId } = req.params;
        let movieDetails = await getMovieDetailsById(movieId);

        return res.status(AppNumbers.statusCodeSucess).render(AppStrings.pageMovieDetails, {
            movie: movieDetails,
            style: AppStrings.cssFile,
            menu: true
        });
    }
    catch (error) {
        next(error);

    }
});

router.use(errorMiddleware);

module.exports = router;