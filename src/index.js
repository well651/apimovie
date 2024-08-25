require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT_LOCAL;
const handlebars = require('express-handlebars');
const routes = require('./routes/mainRoutes');
const { AppStrings } = require('./utils/constants/appStrings');

app.use('/node_modules', express.static('node_modules'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(AppStrings.publicPath));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', AppStrings.viewsPath);

app.use(AppStrings.routeMain, routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
