import axios from "axios";

export default axios.create({
  baseURL: "https://dev-hotels-shopping-search.travelagency.tech/",
  headers: {
    "OT-Origin-Host": window.location.hostname,
  },
});
