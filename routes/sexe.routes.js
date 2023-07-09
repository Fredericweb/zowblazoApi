const router = require('express').Router()
const sexeControllers = require('../controllers/sexe.controllers')

router.post("/add" , sexeControllers.add)
router.get("/", sexeControllers.all)
router.put("/:id", sexeControllers.update)
router.delete("/:id", sexeControllers.del)

module.exports = router
