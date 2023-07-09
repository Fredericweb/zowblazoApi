const router = require('express').Router()
const roleController = require('../controllers/role.controllers')

router.get("/", roleController.all)
router.post("/add", roleController.add)
router.put("/:id", roleController.update)
router.delete("/:id", roleController.del)

module.exports = router