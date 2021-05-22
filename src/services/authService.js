const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findByEmail }= require('../services/userService');
const AppError = require('../errors/appError');
const config = require('../config');

const login = async (email, password) => {
    try{
        const user = await findByEmail(email);
        if (!user){
            throw new AppError('Authenticarion falied email / password does not correct', 400);
        }
        if (!user.enable){
            throw new AppError('Authenticarion falied user Disable', 400);
        }
        const validPassword = await bcrypt.compare(password,user.password);
        if (!validPassword){
            throw new AppError('Authenticarion falied email / password does not correct222', 400);
        }

        const token = _emcrypt(user._id);

        return {
            token,
            user: user.name,
            role: user.role
        }
    } catch(err){
        throw err;
    }
}

_emcrypt = (id) => {
    return jwt.sign({id}, config.auth.secret, { expiresIn: config.auth.ttl  });
}

module.exports = {
    login
}