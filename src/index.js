require('app-module-path').addPath(__dirname);

const express = require('express');
const validator = require('express-validator');
const middleware = require('./middleware');
const bodyParser = require('body-parser');

// import file route
const userRoute = require('./routes/users.js');

// intialize express app
let app = express();

// parse body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(validator());
app.use(middleware());

// routing file
app.use(userRoute);

app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      message: 'Resource not found'
    });
});

const port = 9090;
app.listen(port, () => console.info(`Server has started on http://localhost:${port}`));