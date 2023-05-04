import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
