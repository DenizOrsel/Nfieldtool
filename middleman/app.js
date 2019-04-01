const express = require('express');
const app = express();
const morgan = require('morgan');  //logger
const bodyParser = require('body-parser');  //parses incoming requests

const signinRoutes= require('./api/routes/signin');
const surveyRoutes= require('./api/routes/survey');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

// Set CORS
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
}
next();
});

// Routes to handle requests
app.use('/signin', signinRoutes);
app.use('/survey', surveyRoutes);


// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req,res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;