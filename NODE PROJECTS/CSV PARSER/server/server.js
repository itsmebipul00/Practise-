import path from 'path'
import express from 'express'
import cors from 'cors'
// import dotenv from 'dotenv'
// import connectDB from './config/db.js'
import uploadRoute from './routes/uploadRoute.js'

// dotenv.config()

// connectDB()

const app= express()
app.use(express.json())
app.use(cors())

app.use('/api/uploads',uploadRoute)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.listen(8000)