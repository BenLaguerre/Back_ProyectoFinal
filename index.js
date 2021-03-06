const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

//swagger
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

var cors = require('cors');

const dbconnect = require("./database/mongo");

const profileRoute = require('./routes/perfil.routes');
const { Profile } = require('./model/perfil');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({
  origin: 'http://localhost:4200',
  //credentials: true, 
  origin: true
}));

const server = http.createServer(app);

// API root
app.use('/', profileRoute)

app.get("/", function (req, res) {
  res.send("Estamos en localhost:3001, se prendio mon ua")
})

//swagger
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

server.listen(3001, function () {
  console.info(`Server is up and running on port 3001`)
});
