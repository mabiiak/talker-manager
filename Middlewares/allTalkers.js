const fs = require('fs').promises;

const talkerFile = 'talker.json';

function allTalkers() {
  return fs.readFile(talkerFile, 'utf8')
    .then((data) => JSON.parse(data));
}

module.exports = allTalkers;
