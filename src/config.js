const dev = {
    AUTOCOMPLETE: "https://dev-hotels-autocomplete-suggestion.travelagency.tech/suggestions",
    TRANSLATION_API: "https://dev-hotels-translation.travelagency.tech",
    COBRAND: "https://dev-hotels-translation.travelagency.tech/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech",
    OFFERS: "https://dev-hotels-shopping-home.travelagency.tech/offers"
};

const prod = {
    OFFERS: "https://" + window.location.hostname + "/hotels/api/offers",
    AUTOCOMPLETE: "https://" + window.location.hostname + "/hotels/api/autocomplete",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech",
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};
