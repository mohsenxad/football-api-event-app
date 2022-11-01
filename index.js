const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const auth = require('football-middleware-authentication-app')(
    process.env.ACCESS_TOKEN_SECRET,
    process.env.REFRESH_TOKEN_SECRET
)

const packageJson = require('./package.json');

var app = express();
app.use(bodyParser.json())

app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, deviceid");
        next();
    }
);

const eventServices = require('./src');

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '👌',
                name: packageJson.name,
                version : packageJson.version
            }
            sendResult(res, result);
        }
);

app.get('/event/getAll',
    auth.chechAuth,
    async (req, res) => 
        {
            const eventList = await eventServices.getAllEvent();
            const result = {
                eventList : eventList
            }
            sendResult(res, result);
        }
);

app.get('/event/getAllByUser',
    auth.chechAuth,
    async (req, res) => 
        {
            const eventList = await eventServices.getAllEvent();
            const result = {
                eventList : eventList
            }
            sendResult(res, result);
        }
);



function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.log(error);
        res.status(400).json(
            {
                message: error.message 
            }
        );
    }

app.listen(packageJson.port,function()
    {
        console.log('Init ' + packageJson.name + ' on ' + packageJson.port);
        console.log('Access URL : http://localhost:' + packageJson.port);
    }
);