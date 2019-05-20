const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.OXFORD_APP_KEY)

export function initAxios(axios) {
   axios.defaults.headers.common['app_id'] = process.env.OXFORD_APP_ID;
   axios.defaults.headers.common['app_key'] = process.env.OXFORD_APP_KEY;
}