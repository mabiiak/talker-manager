const express = require('express');
const bodyParser = require('body-parser');

const getTalkerById = require('./middlewares/getTalkerById');
const getAllTalkers = require('./middlewares/getAllTalkers');
const { validateMail, validatePassword } = require('./utils/validate');
const newToken = require('./utils/token');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers); // Requisito 1

app.get('/talker/:id', getTalkerById); // Requisito 2

app.post('/login', validateMail, validatePassword, newToken); // Requisito 3

app.listen(PORT, () => {
  console.log('Online');
});
