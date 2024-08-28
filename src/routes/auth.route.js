const authController = require('../controllers/auth.controller');

var router = require('express').Router();

router.get("/user" , [
    authController.user
]);


module.exports = router;

