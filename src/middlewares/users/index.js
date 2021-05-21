const {check, validationResult } = require('express-validator');
const AppError = require ('../../errors/appError');
const { findByEmail } = require('../../')
 
const _nameRequeride = check('name', 'Name Requeride').not().isEmpty();
const _lastNameRequeride = check('lastName', 'LastName Requeride').not().isEmpty();
const _emailRequeride = check('email', 'email Requeride').not().isEmpty();
const _emailValid = check('email', 'email is invalid').isEmail();
const _emailExist = check('email').custom(
    async (email = '') => {
        
    }
)

const _validationResult =  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new AppError(`Validations Errors:`, 400 , errors.errors);
    }
    next();
}
const postReuestValidation = [
    _nameRequeride,
    _lastNameRequeride,
    _emailRequeride,
    _emailValid,
    _validationResult
]


module.exports = {
    postReuestValidation
}