const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lQJygD4R#YnjkVLbabEO7D8dyDk1udBsWHfpEgD4-5y9D9G-i_Iw'
};
