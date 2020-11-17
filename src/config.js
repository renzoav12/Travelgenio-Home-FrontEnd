const dev = {
    OFFERS: "https://" + window.location.hostname + "/hotels/api/offers",
    AUTOCOMPLETE: "https://" + window.location.hostname + "/hotels/api/autocomplete",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech",
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
