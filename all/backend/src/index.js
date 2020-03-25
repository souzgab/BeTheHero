const express = require('express'); 
const app = express(); //recebe modulo Express
const cors = require('cors');
const routes = require('./routes'); // recebe arquivo de rota

app.use(cors());
app.use(express.json());
app.use(routes);

//LocalHost que está escutando
app.listen(3333);