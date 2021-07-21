const request = require("request-promise")
const cheerio = require("cheerio")
const fs= require(fs)
const json2csv= require("json2csv").Parser

const movie= //url

(async() => {
    let imdbData= []
    const response= await request({
        uri: movie,
        //from neqheader network tab
        headers:{
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        },
        gzip: true
    })
    let $ = cheerio.load(response)
    let title= //jquery
    let releaseDate=  //jquery
    let rating= //jquery

    imdbData.push({
        title, releaseDate, rating
    })

    const j2csv= new json2csv()
    const csv= j2csv.parse(imdbData)

    fs.writeFileSync('./movie.csv', csv, utf-8)
})()