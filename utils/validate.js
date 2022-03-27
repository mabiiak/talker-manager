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

module.exports = {
  validateMail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
};
