const { DatabaseSDK } = require('database-sdk')
const _ = require('lodash');
const bcrypt = require('bcrypt');
const JWT = require("../utils/jwt");


const signInService = async (payload) => {
    let response = { isSuccess: false, credential: "", error: "" }
    try {
        const result = await DatabaseSDK.user.findFirst({
            where: {
                email: payload.email
            }
        });
        if (!result) {
            return response = {
                isSuccess: false,
                credential: null
            }
        }

        const isMatch = await bcrypt.compare(payload.password, result.password);
        if (isMatch) {
            const accessToken = JWT.generateAccessToken(result);
            return response = {
                isSuccess: true,
                credential: {
                    accessToken
                }
            }
        }
        return response = {
            isSuccess: false,
            credential: null
        }
    }
    catch (e) {
        return response = {
            isSuccess: false,
            isSuccess: null,
            error: e.message
        }
    }
}

const signUpService = async (payload) => {
    let response = { isSuccess: false, error: "" }
    try {
        const hash = await bcrypt.hashSync(payload.password, 10);
        payload.password = hash;
        const result = await DatabaseSDK.user.create({
            data: payload,
            select: {
                id: true
            }
        });
        if (result.id) {
            return response = {
                isSuccess: true
            }
        }
    }
    catch (e) {
        console.log(e);
        return response = {
            isSuccess: false,
            error: e.message
        }
    }
}

module.exports = {
    signInService,
    signUpService
}