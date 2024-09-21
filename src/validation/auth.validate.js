const Joi = require('joi');

const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    telephone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required()
});

module.exports = {
    signInSchema,
    userSchema
};