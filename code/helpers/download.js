const fs = require('fs')
const path = require('path')
const axios = require('axios')

const download = async (url, dest) => {

   const writer = fs.createWriteStream(dest)

   const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
   })

   response.data.pipe(writer)

   return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
   })
}

module.exports = download