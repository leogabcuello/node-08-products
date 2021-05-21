const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.MODE_DEV = process.env.MODE_DEV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log:{
        level: process.env.LOG_LEVEL
    }, 
    swagger: {
        path: '/documentation'
    },
    databaseURL : process.env.DATABASE_URL
}