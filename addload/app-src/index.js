const express = require('express')
const fibonacci = require('fibonacci')
const path = require('path')
const app = express()
const serverPort = "8080";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/ping', (req, res) => {
    res.send("1");
});

app.get('/fibonacci', (req, res) => {
    console.log(req.query);
    var i = Object.values(req.query);
    var bigNumber = fibonacci.iterate(i);
    res.send(bigNumber);
});

var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})