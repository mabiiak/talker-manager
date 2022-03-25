const getAllTalkers = require('./allTalkers');

const talkerFile = 'talker.json';

async function getAllTalker(req, res) {
  try {
    const data = await getAllTalkers();
    res.status(200).json(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${talkerFile}`);
    console.log(err);
  }
}

module.exports = getAllTalker;
