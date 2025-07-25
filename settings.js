const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined
        ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=QFoDwYYK#x_C-w8YR0b7ckFn0hUMH0OnYMpEdl9Q3_O2UTySo3hk'
        : process.env.SESSION_ID,

    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,

    SESSION_NAME: process.env.SESSION_NAME === undefined ? "asitha" : process.env.SESSION_NAME,

    POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined
        ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzh'
        : process.env.POSTGRESQL_URL,
};
