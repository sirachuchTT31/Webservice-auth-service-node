const authService = require('../services/auth.service')
const { IBaseResponse } = require("../base//IBaseResponse");
const authValidation = require("../validation/auth.validate")
exports.signIn = async (req, res) => {
    try {
        const resService = await authService.signInService(req.body);
        if (resService.isSuccess === true) {
            return res.status(200).json(IBaseResponse({
                result: resService.credential,
                isSuccess: true,
                message: "OK"
            }))
        }
        return res.status(200).json(IBaseResponse({
            result: null,
            isSuccess: false,
            error: resService.error,
            message: "Sign in failed"
        }))
    }
    catch (e) {
        console.log(e)
    }
}

exports.signUp = async (req, res) => {
    try {
        const { error, value } = authValidation.userSchema.validate(req.body);
        if (error) {
            return res.status(400).json(
                IBaseResponse({
                    result: null,
                    isSuccess: false,
                    message: "OK",
                    error
                })
            )
        }

        const resService = await authService.signUpService(value);
        if (resService.isSuccess === true) {
            return res.status(200).json(IBaseResponse({
                result: null,
                isSuccess: true,
                message: "OK"
            }))
        }

        return res.status(200).json(IBaseResponse({
            result: null,
            isSuccess: false,
            message: "Sign up failed",
            error: resService.error
        }))
    }
    catch (e) {

    }
}