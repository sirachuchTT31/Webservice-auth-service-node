const IBaseResponse = ({ isSuccess = false, statusCode = 200, message, result = null, error = null }) => {
    return {
        isSuccess,
        statusCode,
        message,
        result,
        error
    }
}

module.exports = {
    IBaseResponse
}