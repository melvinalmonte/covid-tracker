const axios = require("axios");
export const API = "https://covid19.mathdro.id/api";

export default class Api {
  static fetchCases(country) {
    if (country === "global" || country === "") {
      return axios.get(`${API}`);
    } else {
      return axios.get(`${API}/countries/${country}`);
    }
  }
  static fetchAllCountryCases(country) {
    return axios.get(`${API}/countries/${country}/confirmed`);
  }

  static fetchCountryCodes() {
    return axios.get(`${API}/countries`);
  }
}
