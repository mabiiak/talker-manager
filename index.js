const express = require('express');
const bodyParser = require('body-parser');

const { getTalkerById, getAllTalker } = require('./middlewares/getTalkers');
const {
  validateMail,
  validatePassword,
  validateToken, 
  validateName,
  validateAge,
} = require('./utils/validate');

const newToken = require('./utils/token');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalker); // Requisito 1

app.get('/talker/:id', getTalkerById); // Requisito 2

app.post('/login', validateMail, validatePassword, newToken); // Requisito 3

// requisito 4
app.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  (req, res) => {
    const { id, name, age, talk: { watchedAt, rate } } = req.body;

    res.status(201).json(
      {
        id,
        name,
        age,
        talk: {
          watchedAt,
          rate,
        },
      },
    );
  },
);

app.listen(PORT, () => {
  console.log('Online');
});
