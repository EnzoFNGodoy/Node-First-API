'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conectando ao banco
mongoose.connect('mongodb://godoy:godoy1612@localhost:27017/node-store?authSource=admin');

// Carregando os models
const Product = require('./models/product');

// Carregando as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;