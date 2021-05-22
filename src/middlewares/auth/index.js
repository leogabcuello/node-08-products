const { check } = require('express-validator');
const AppError = require ('../../errors/appError');
const { validationResult } = require('../commons'); 

 
const _emailRequeride = check('email', 'email Requeride').not().isEmpty();
const _emailValid = check('email', 'email is invalid').isEmail();
const _passwordRequeride = check('password', 'password is Requeride').not().isEmpty();

const postLoginReuestValidation = [
    _emailRequeride,
    _emailValid,
    _passwordRequeride,
    validationResult
]

module.exports = {
    postLoginReuestValidation,
}