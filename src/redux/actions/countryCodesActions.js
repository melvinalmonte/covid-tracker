import {
  GET_COUNTRY_CODES_LOADING,
  GET_COUNTRY_CODES_SUCCESS,
  GET_COUNTRY_CODES_ERROR
} from "../constants/actionTypes";
import Api from "../client/api";

export const loadCountryCodes = () => dispatch => {
  dispatch({ type: GET_COUNTRY_CODES_LOADING });
  Api.fetchCountryCodes()
    .then(response => {
      dispatch({
        type: GET_COUNTRY_CODES_SUCCESS,
        countries: response.data.countries
      });
    })
    .catch(error => {
      dispatch({
        type: GET_COUNTRY_CODES_ERROR,
        error: error.response ? error.response.data : error.message
      });
    });
};
