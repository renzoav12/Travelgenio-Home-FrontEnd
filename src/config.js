const dev = {
    AUTOCOMPLETE: "https://es.travelgenio.com/hotels/api",
    TRANSLATION_API: "https://dev-hotels-translation.travelagency.tech"
};

const prod = {
    AUTOCOMPLETE: "https://" + window.location.hostname + "/hotels/api/",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};