import csv from 'csv-parser'
import fs from 'fs'

const results= []
const parseCSV = () => {
    fs.readdirSync('uploads/').map(r => fs.createReadStream(`uploads/${r}`)
    .pipe(csv({}))
    .on('data',(data) => results.push(data))
    .on('end', () => {
        console.log(results)
        
    }))
}

const checkCSV = () => {
    console.log(results)
}

export { parseCSV, checkCSV }



