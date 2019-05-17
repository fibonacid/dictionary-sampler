const maxApi = require('max-api');
const {fetchWord} = require('./helpers/fetch')
const searchKey = require('./helpers/searchKey');

// Get app directory path
var path = require('path');
global.appRoot = path.resolve(__dirname);

maxApi.addHandler('fetch_word', (word) => {
    fetchWord(word)
        .then(({data}) => {
           // Retrieve urls of audiofiles
           let audioFileUrls = searchKey('audioFile', data);
           // filter duplicates
           let uniqueUrls = [...new Set(audioFileUrls)];
           // do something with every url
           uniqueUrls.forEach((url) => {
              digestUrl(url);
           })
        })
        .catch((error) => (
           console.log(error)
        ))
})

const tmp = require('tmp');
const download = require('./helpers/download')

function digestUrl(url) {
   const options = {
      prefix: "word",
      postfix: ".mp3",
      dir: `${global.appRoot}/tmp`
   }
   tmp.file(options, (err, path) => {
      if (err) throw err
      maxApi.post(path);

      download(url, path).then((resolve) => {
         // output audiofile path
         maxApi.outlet(path)
      })
   })
}