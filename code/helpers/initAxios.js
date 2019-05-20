const dotenv = require("dotenv");
dotenv.config();

export function initAxios(axios) {
   axios.defaults.headers.common['app_id'] = process.env.OXFORD_APP_ID;
   axios.defaults.headers.common['app_key'] = process.env.OXFORD_APP_KEY;
}