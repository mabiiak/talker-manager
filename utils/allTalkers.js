const fs = require('fs').promises;

function allTalkers() {
  return fs.readFile('talker.json', 'utf8')
    .then((data) => JSON.parse(data));
}

const writeNewTalker = async (content) => {
  try {
    const arrContent = await allTalkers();

    console.log(content);

    arrContent.push(content);

    await fs.writeFile('talker.json', JSON.stringify(arrContent));
    return arrContent[arrContent.length - 1];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const removeTalker = async (personId) => {
  const arrContent = await allTalkers();

  const findTalker = arrContent.filter((talker) => talker.id !== Number(personId));

  await fs.writeFile('talker.json', JSON.stringify([]));
  await fs.writeFile('talker.json', JSON.stringify(findTalker));
};

module.exports = { allTalkers, writeNewTalker, removeTalker };
