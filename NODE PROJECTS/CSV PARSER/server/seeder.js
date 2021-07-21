import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { results } from './parser.js'
import connectDB from './config/db.js'
import File from './models/sampleModel.js'


dotenv.config()

connectDB()

const importData = async () => {
  try {
    await File.deleteMany()

    await File.insertMany(results)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await File.deleteMany()
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
