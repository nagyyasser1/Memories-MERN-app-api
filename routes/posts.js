import express from 'express'

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
  commentPost,
} from '../controllers/posts.js'

import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/search', getPostsBySearch)
router.post('/', auth, createPost)
router.get('/:id', getPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)
router.patch('/:id/commentPost', auth, commentPost)

export default router
