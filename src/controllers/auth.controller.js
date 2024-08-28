const { DatabaseSDK } = require('database-sdk')
exports.user = async (req, res) => {
    try {
        const results = await DatabaseSDK.user.findMany({});

        return res.json({
            statusCode: 200,
            message: "OK",
            results: results
        })
    }
    catch (e) {
        console.log(e)
    }
}