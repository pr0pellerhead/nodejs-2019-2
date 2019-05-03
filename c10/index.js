var fetch = require("node-fetch");
var express = require('express');
var github = require('octonode');

const WEATHER_KEY = '';
const GITHUB_KEY = '';

var todo = null;
var weather = null;

function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        return response.json();
    }).then(json => {
        var time = new Date();
        todo = {
            data: json,
            last_refresh: time.getTime()
        };
    }).catch(err => {
        console.log(err);
    });
}

function getWeather(key) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Skopje&APPID=${key}`;
    fetch(url)
    .then(response => {
        return response.json();
    }).then(json => {
        var time = new Date();
        weather = {
            data: json,
            last_refresh: time.getTime()
        };
    }).catch(err => {
        console.log(err);
    });
}

getData();
getWeather(WEATHER_KEY);
setInterval(getData, 60000);
setInterval(() => {getWeather(WEATHER_KEY)}, 30000);

var client = github.client(GITHUB_KEY);

// client.get('/user', {}, function (err, status, body, headers) {
//     console.log(body);
// });

client.get('/users/baivanco/repos', {}, function (err, status, body, headers) {
    console.log(body);
});

var api = express();
api.get('/todo', (req, res) => {
    res.status(200).send(todo);
});
api.get('/weather', (req, res) => {
    res.status(200).send(weather);
});
api.listen(8080, err => {
    if(err){
        console.log(err);
    } else {
        console.log('server started');
    }
});