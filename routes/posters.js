const { Router } = require('express')
const { getAllPost, getAddPost, postAddPost, getEditPost, getOnePost, postEditPost, postDelete } = require('../controllers/posters')
const router = Router()

router.get('/', getAllPost)
router.get('/add', getAddPost)
router.post('/add', postAddPost)
router.get('/:id', getOnePost)
// Edit
router.get('/:id/edit', getEditPost)
router.post('/:id/edit', postEditPost)
//Delete
router.get('/:id/delete', postDelete)

module.exports = router