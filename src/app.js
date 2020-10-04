const express = require('express');
const app = express();

//importar a nossa rota aqui dentro de app.js
//só é possível pq tem o exports em tarefa-routes
const tarefas = require('./routes/tarefas-routes')

app.use('/', tarefas);

app.use(express.json());

module.exports = app;
