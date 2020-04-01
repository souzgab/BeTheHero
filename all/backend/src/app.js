const express = require('express'); 
const app = express(); //recebe modulo Express
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes'); // recebe arquivo de rota

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

//LocalHost que está escutando
// app.listen(3333);