import express from 'express'
const router = express.Router()

import { signin, signup } from '../controllers/user.js'

router.post('/register', signup)
router.post('/login', signin)

export default router
