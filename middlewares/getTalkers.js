const allTalkers = require('../utils/allTalkers');

const talkerFile = 'talker.json';

async function getAllTalker(req, res) {
  try {
    const data = await allTalkers();
    res.status(200).json(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${talkerFile}`);
    console.log(err);
  }
}

async function getTalkerById(req, res) {
  const data = await allTalkers();

  const { id } = req.params;

  const peopleTalker = data.find((oneTalker) => oneTalker.id === parseInt(id, 0));

  if (!peopleTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(peopleTalker);
}

module.exports = { getAllTalker, getTalkerById };
