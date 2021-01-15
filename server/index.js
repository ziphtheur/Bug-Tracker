const express = require("express");
const http = require('http');
const tickets = require('./router/tickets');
const users = require('./router/users');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

const server = http.createServer(app);

app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connection established')
})

//app.use(router)

server.listen(port, () => console.log(`server has started on port ${port}`))