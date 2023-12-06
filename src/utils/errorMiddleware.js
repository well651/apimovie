const { AppStrings } = require('../utils/constants/appStrings');

function errorMiddleware(err, req, res, next) { // eslint-disable-line
  switch (err.status) {
    case 401:
      res.status(401).render(AppStrings.pageError, { error: `${err.message} ( Not authorized )`, menu: true });
      break;

    case 404:
      res.status(404).render(AppStrings.pageError, { error: `${err.message} ( Movie(s) not found )`, menu: true });
      break;

    case 429:
      res.status(429).render(AppStrings.pageError, { error: `${err.message} ( Too Many Requests )`, menu: true });
      break;

    case 503:
      res.status(503).render(AppStrings.pageError, { error: `${err.message} ( Service unavailable )`, menu: true });
      break;

    case 502:
      res.status(502).render(AppStrings.pageError, { error: `${err.message} ( Bad gateway )`, menu: true });
      break;

    default:
      res.status(500).render(AppStrings.pageError, { error: `${err.message} (Unexpected Error)`, menu: true });
      break;
  }

}
module.exports = { errorMiddleware };