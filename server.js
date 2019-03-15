const express = require('express');
const port = require('./config').port;
const app = new express();
const cors = require('cors');
const logger = require('./config').logger;

// app.use(cors()); by defualt in all calls
//winston could be used for user defined logs

var whitelist = ['https://example1.com', 'https://example2.com']

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }  
// specific site.

//array of whitelist domain origin. 
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.options('*', cors()) // include before other routes

app.get('/user', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
    next();
})

logger.info('loading an array', [1, 2, 3], 'now!');

logger.setLevel('debug');

logger.debug('this will be logged now');

app.listen(port, () => console.log('listening to port ' + port));