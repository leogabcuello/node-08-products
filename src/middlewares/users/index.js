const {check, validationResult } = require('express-validator');
const AppError = require ('../../errors/appError');
const { findByEmail } = require('../../services/userService');
const { ROLE } = require('../../constants'); 
 
const _nameRequeride = check('name', 'Name Requeride').not().isEmpty();
const _lastNameRequeride = check('lastName', 'LastName Requeride').not().isEmpty();
const _emailRequeride = check('email', 'email Requeride').not().isEmpty();
const _emailValid = check('email', 'email is invalid').isEmail();
const _emailExist = check('email').custom(
    async (email = '') => {
        const userFound = await findByEmail(email);
        if (userFound){
            throw new AppError('Emmail already exist in db', 400);
        }
    }
)
const _passwordRequeride = check('password', 'password is Requeride').not().isEmpty();
const _roleValid = check('role').optional().custom(
    async (role = '') => {
        if (!ROLE.include(role)){
            throw new AppError('Role invalid', 400);
        }
    }
)
const _dateValid = check('birthDate').isDate('MM-DD-AAAA');

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
    _emailExist,
    _passwordRequeride,
    _roleValid,
    _dateValid,
    _validationResult
]


module.exports = {
    postReuestValidation
}