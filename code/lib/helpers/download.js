import axios from 'axios';

const fs = require('fs')

export const download = async (url, dest) => {

   console.log(`... loading from ${url}`);

   const writer = fs.createWriteStream(dest);

   writer.on('error', function (err) {
      console.log(err);
   });

   const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
   });

   response.data.pipe(writer);

   return new Promise((resolve, reject) => {
      writer.on('finish', resolve.bind(null, dest));
      writer.on('error', reject);
   });
};