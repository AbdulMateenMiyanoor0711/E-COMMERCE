const jwt = require('jsonwebtoken');    
const generateaccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}
const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}
const getrefreshToken = () => {
    return new Date(Date.now()+ parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN)).getTime();  
}

module.exports = {
    generateaccessToken,
    generateRefreshToken,
    getrefreshToken
}