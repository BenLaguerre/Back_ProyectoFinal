const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const dbconnect = require("./database/mongo");

const profileRoute = require('./routes/perfil.routes');
const { Profile } = require('./model/perfil');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const server = http.createServer(app);

// API root
app.use('/', profileRoute)

app.get("/", function (req, res) {
  res.send("Estamos en localhost:8000, se prendio mon ua")
})

server.listen(8000, function () {
  console.info(`Server is up and running on port 8000`)
});