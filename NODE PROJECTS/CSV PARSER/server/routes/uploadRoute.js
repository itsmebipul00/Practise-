import express from 'express'
import { parseCSV } from '../parser.js'
import { checkCSV } from '../parser.js'
import { upload } from '../controller/uploadController.js'
const router = express.Router()



router.post('/', upload.single('csv'),parseCSV,checkCSV)

export default router
