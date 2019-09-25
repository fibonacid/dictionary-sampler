import axios from "axios"

// Add API keys to default axios headers
axios.defaults.headers.common['app_id'] = process.env.OXFORD_APP_ID;
axios.defaults.headers.common['app_key'] = process.env.OXFORD_APP_KEY;

const API_ENDPOINT = "https://od-api.oxforddictionaries.com/api/v2";
const FILTERS = {
    definitions: "definitions",
    regions: "regions",
    synonyms: "synonyms",
    lexicalCategory: "lexicalCategory",
    grammaticalFeature: "grammaticalFeature",
    examples: "examples",
    pronunciations: "pronunciations",
    domains: "domains",
    registers: "registers",
    translations: "translations",
    antonyms: "antonyms"
};
const LANGUAGES = {
    EN_GB: "en-gb",
    EN_US: "en-us",
    ES: "es",
    DE: "de"
};

export const OxfordApi = {
    searchWord: function(word) {
        const url = `${API_ENDPOINT}/entries/en-us/${word}`;
        return axios.get(url)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            })
    }
};

/*const _OxfordAPI = {
    baseUrl: "https://od-api.oxforddictionaries.com/v2",
    filters: {
        definitions: "definitions",
        regions: "regions",
        synonyms: "synonyms",
        lexicalCategory: "lexicalCategory",
        grammaticalFeature: "grammaticalFeature",
        examples: "examples",
        pronunciations: "pronunciations",
        domains: "domains",
        registers: "registers",
        translations: "translations",
        antonyms: "antonyms"
    },
    languages: {
        EN_GB: "en-gb",
        EN_US: "en-us",
        ES: "es",
        DE: "de"
    },
    searchWord: word => {
        const url = `${this.baseUrl}/entries/en-us/${word}`;
        return axios.get(url)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            })
    }
};

export const OxfordAPI = _OxfordAPI;*/