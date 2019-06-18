const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const estudiantes = [
  {id: 0, nombre: 'Joel Dospuntocero', edad: 23},
  {id: 1, nombre: 'Alix Bilobia', edad: 25},
  {id: 2, nombre: 'Jomel Mcdonald', edad: 25},
];

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/v1/estudiantes', (req, res) => {
  const resp = { estudiantes, count: estudiantes.length };
  res.json(resp);
});

app.get('/api/v1/estudiantes/:id', (req, res) => {
  const { params: { id } } = req;
  res.json(estudiantes[id]);
});

app.get('/estudiantes', (req, res) => {
  res.render('estudiantes/list.pug');
});

app.get('/estudiantes/:id', (req, res) => {
  const { params: { id } } = req;
  res.render('estudiantes/detail.pug', estudiantes[id]);
});
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});