const dev = {
    SUGGESTIONS_API: "https://dev-hotels-autocomplete-suggestion.travelagency.tech",
    I18N_API: "https://dev-hotels-translation.travelagency.tech"
};

const prod = {
    SUGGESTIONS_API: "https://" + window.location.hostname + "/hotels/api/",
    I18N_API: "https://" + window.location.hostname + "/hotels/api/"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};