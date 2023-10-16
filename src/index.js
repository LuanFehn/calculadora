const express = require('express');
const {soma,subtacao, divisao, multiplicacao} = require('../src/controladores/calculadora')

const app = express();

app.get('/soma', soma);
app.get('/subtracao', subtacao);
app.get('/divisao', divisao);
app.get('/multiplicacao', multiplicacao);
app.listen(3000);