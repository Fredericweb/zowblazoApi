const router = require('express').Router()
const {all, update, del, add} = require('../controllers/Personnel.controllers')

router.get('/',all)
router.delete('/:id',del)
router.post('/add', add)
router.put('/:id', update)

module.exports = router