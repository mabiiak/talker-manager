const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Requisito 1

const talkerFile = 'talker.json';

function getAllTalkers() {
  return fs.readFile(talkerFile, 'utf8')
    .then((data) => JSON.parse(data));
}

app.get('/talker', async (req, res) => {
  try {
    const data = await getAllTalkers();
    res.status(200).json(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${talkerFile}`);
    console.log(err);
  }
});

// Requisito 2
app.get('/talker/:id', async (req, res) => {
  const allTalkers = await getAllTalkers();

  const { id } = req.params;

  const peopleTalker = allTalkers.find((oneTalker) => oneTalker.id === parseInt(id, 0));

  if (!peopleTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(peopleTalker);
});

app.listen(PORT, () => {
  console.log('Online');
});
