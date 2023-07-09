const router = require('express').Router()
const authController = require('../controllers/users.controllers')


// authentification
router.get("/logout", authController.logout);
router.post('/signin', authController.signIn)

// user CRUD
router.post("/add", authController.signUp);
router.get("/",authController.all );
router.get('/:id', authController.userInfo);
router.put('/:id', authController.update);
router.delete('/:id', authController.remove)
router.put("/changePwd/:id", authController.changePwd)
router.post("/resertPassword", authController.resetPwd)

module.exports = router