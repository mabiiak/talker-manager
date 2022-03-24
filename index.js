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

const talker = 'talker.json';

app.get('/talker', async (req, res) => {
  try {
    const data = await fs.readFile(talker, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${talker}`);
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
