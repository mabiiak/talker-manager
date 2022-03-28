const express = require('express');
const bodyParser = require('body-parser');

const { getTalkerById, getAllTalker } = require('./middlewares/getTalkers');
const {
  validateMail,
  validatePassword,
  validateToken, 
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
} = require('./utils/validate');

const newToken = require('./utils/token');
const { writeNewTalker } = require('./utils/allTalkers');
const { allTalkers } = require('./utils/allTalkers');

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

app.post('/talker', // requisito 4
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
  async (req, res) => {
    const { name, age, talk } = req.body;

    const talker = await allTalkers();

    const newTalker = {
      name,
      age,
      id: +talker.length + 1,
      talk,
    };

    const totalPerson = await writeNewTalker(newTalker);
    console.log(totalPerson);
    res.status(201).json(totalPerson);
  });

app.listen(PORT, () => {
  console.log('Online');
});
