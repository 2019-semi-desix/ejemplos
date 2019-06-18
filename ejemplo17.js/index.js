'use strict'
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { getSquare, getSquareRoot } = require('./utils');
const app = express();
const port = 3000;

// Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Enabling JSON bodyParser
app.use(bodyParser());

// Archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('form.pug');
});

app.post('/', (req, res) => {
  const { number } = req.body;
  res.json({message: `El cuadrado del número es ${getSquare(number)} y la raíz cuadrada es: ${getSquareRoot(number)}`});
});

app.listen(port, () => {
  console.log(`La aplicación esta ejecutando en el puerto:  ${port}!`);
});