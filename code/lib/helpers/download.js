const fs = require('fs')
const path = require('path')
const axios = require('axios/index')

export const download = async (url, dest) => {

   console.log(`... loading from ${url}`);

   const writer = fs.createWriteStream(dest);

   const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
   });

   response.data.pipe(writer)

   return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
   });
};