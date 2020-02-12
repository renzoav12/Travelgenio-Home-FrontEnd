const dev = {
    SUGGESTIONS_API: "https://dev-hotels-autocomplete-suggestion.travelagency.tech"
};

const prod = {
    SUGGESTIONS_API: "https://hotels-autocomplete-suggestion.travelagency.tech"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};