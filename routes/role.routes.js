const router = require('express').Router()
const {all, del, update, add} = require('../controllers/TypeContrat.controllers')

router.get("/", all)
router.post("/add", add)
router.put("/:id", update)
router.delete("/:id", del)

module.exports = router