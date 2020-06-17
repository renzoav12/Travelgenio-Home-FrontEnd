const dev = {
    AUTOCOMPLETE: "https://dev-hotels-autocomplete-suggestion.travelagency.tech/suggestions",
    TRANSLATION_API: "https://dev-hotels-translation.travelagency.tech",
    COBRAND: "https://dev-hotels-translation.travelagency.tech/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const prod = {
    AUTOCOMPLETE: "https://" + window.location.hostname + "/hotels/api/autocomplete",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};