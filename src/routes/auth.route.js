const authController = require('../controllers/auth.controller');

var router = require('express').Router();

router.post("/sign-in", [
    authController.signIn
]);

router.post("/sign-up", [
    authController.signUp
]);


module.exports = router;

