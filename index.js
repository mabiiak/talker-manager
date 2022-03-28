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

const { newToken, authToken } = require('./utils/token');
const { allTalkers, writeNewTalker, removeTalker } = require('./utils/allTalkers');

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
    res.status(201).json(totalPerson);
  });

app.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    
    const editTalker = { id: +id, name, age, talk };

    await removeTalker(id);
    await writeNewTalker(editTalker);

    res.status(200).json(editTalker);
  });

app.listen(PORT, () => {
  console.log('Online');
});
