const dotenv = require("dotenv");
dotenv.config();

const axios = require('axios');

// Initialize axios headers
axios.defaults.headers.common['app_id'] = process.env.OXFORD_APP_ID;
axios.defaults.headers.common['app_key'] = process.env.OXFORD_APP_KEY;

const BASE_PATH = "https://od-api.oxforddictionaries.com";

const fetchWord = (word, field='pronunciations') => {
   return axios.get(`${BASE_PATH}/api/v2/entries/en-us/${word}?fields=${field}`)
}

module.exports = {
   fetchWord
}