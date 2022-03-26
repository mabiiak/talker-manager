const getAllTalkers = require('./allTalkers');

async function getTalkerById(req, res) {
  const allTalkers = await getAllTalkers();

  const { id } = req.params;

  const peopleTalker = allTalkers.find((oneTalker) => oneTalker.id === parseInt(id, 0));

  if (!peopleTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(peopleTalker);
}

module.exports = getTalkerById;
