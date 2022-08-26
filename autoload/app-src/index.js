const express = require('express')
const fibonacci = require('fibonacci')
const app = express()
const serverPort = "8080";


app.get('/', (req, res) => {
    res.send("zDemo");
});

app.get('/fibonacci', (req, res) => {
    console.log(req.query);
    var count = Object.values(req.query);
    var bigNumber = fibonacci.iterate(count);
    res.send(bigNumber);
});

var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})