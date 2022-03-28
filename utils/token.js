const crypto = require('crypto');

function newToken(req, res) {
  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
}

function authToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });

  next();
}

module.exports = { newToken, authToken };
