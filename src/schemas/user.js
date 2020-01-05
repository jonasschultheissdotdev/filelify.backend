const Joi = require('@hapi/joi');
const regex = require('../commons/regex');

const user = {
  id: Joi.number().min(1),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(12),
  password: Joi.string()
    .min(8)
    .max(50)
    .pattern(regex.password),
  email: Joi.string()
    .min(1)
    .max(50)
    .email()
    .pattern(regex.email),
  profilePicturePath: Joi.string()
    .min(1)
    .pattern(regex.url)
};

const signUp = Joi.object({
  username: user.username.required(),
  password: user.password.required(),
  email: user.email.required()
});

const signIn = Joi.object({
  username: user.username.required(),
  password: user.password.required()
});

module.exports = { signUp, signIn };