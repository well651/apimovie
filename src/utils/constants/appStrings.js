class AppStrings{
    //Api Strings
    static omdbBaseApiUrl = 'http://www.omdbapi.com/';
    static apiJsonResponseKey = 'Response';
    static apiJsonErroKey = 'Error';
    static apiJsonSearchKey = 'Search';
    static apiSerachParameter = 's';
    static apiIdParameter = 'i';

    //Routes
    static routeMain = '/';
    static routeFetchMovie = '/fetch-movie';
    static routeMovieDetails = '/movie-details';

    //Pages
    static viewsPath= './src/views';
    static pageInitial = 'initial-page';
    static pageFetchMovie = 'fetch-movie';
    static pageMovieDetails = 'movie-details';
    static pageError = 'error';

    //Public
    static publicPath = './src/public';
    static cssFile = 'style.css';


    
}

module.exports= { AppStrings };