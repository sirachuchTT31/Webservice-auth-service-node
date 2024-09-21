const jwt = require('jsonwebtoken');
const Constant = require("../constant/constant")

function generateAccessToken({ userId, firstName, lastName, email, profile, role }) {
    const accessToken = jwt.sign({ userId, firstName, lastName, email, profile, role }, Constant.SECRET_KEY.JWT, { expiresIn: 60 * 60 });
    return accessToken;
}

module.exports = {
    generateAccessToken
}