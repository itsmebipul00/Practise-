import path from 'path'

import multer from 'multer'


const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    },
  })
  
  function checkFileType(file, cb) {
    const filetype = /csv/
    const extname = filetype.test(path.extname(file.originalname).toLowerCase())
  //   const mimetype = filetype.test(file.mimetype)
  
    if (extname) {
      return cb(null, true)
    } else {
      cb('CSV only!')
    }
  }
  
 const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })

export { upload }