const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
//const mongoose = require('mongoose');
// const dbConfig = require('./config/database.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const server = http.createServer(app);

app.get("/", function (req, res) {
  res.send("Estamos en localhost:8000, se prendio mon ua")
})

server.listen(8000, function () {
  console.info(`Server is up and running on port 8000`)
});