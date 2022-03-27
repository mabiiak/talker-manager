function validateMail(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 5) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
}

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) res.status(401).json({ message: 'Token não encontrado' });
  if (token.length < 15) res.status(401).json({ message: 'Token inválido' });

  next();
}

function validateName(req, res, next) {
  const { name } = req.body;

  if (!name) res.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
}

function validateAge(req, res, next) {
  const { age } = req.body;
  
  if (!age)res.status(400).json({ message: 'O campo "age" é obrigatório' });
  
  if (Number(age) <= 18) {
  return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  
  next();
}

function validateDate(req, res) {
  const { talk } = req.body;
  const { watchedAt } = talk;
  
  const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
  // referencia do regex ----> https://stackoverflow.com/questions/15196451/regular-expression-to-validate-datetime-format-mm-dd-yyyy
  
  if (!watchedAt) {
  return res.status(400)
  .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  if (!watchedAt.match(regexDate)) {
  return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  }
  
  function validateRate(req, res) {
  const { talk } = req.body;
  const { rate } = talk;
  
  if (!rate) {
  return res.status(400)
  .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  if (Number(rate) < 1 || Number(rate) > 5) {
  return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  }
  
  function validateTalk(req, res, next) {
  const { talk } = req.body;
  
  if (!talk || talk === '') {
  return res.status(400)
  .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  validateRate(req, res);
  validateDate(req, res);
  
  next();
  }

module.exports = {
  validateMail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
};
