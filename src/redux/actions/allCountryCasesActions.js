import {
  GET_ALL_COUNTRY_CASES_LOADING,
  GET_ALL_COUNTRY_CASES_SUCCESS,
  GET_ALL_COUNTRY_CASES_ERROR,
} from "../constants/actionTypes";
import Api from "../client/api";

const loadAllCases = (country) => (dispatch) => {
  dispatch({ type: GET_ALL_COUNTRY_CASES_LOADING });
  Api.fetchAllCountryCases(country)
    .then((response) => {
      dispatch({ type: GET_ALL_COUNTRY_CASES_SUCCESS, data: response.data });
    })
    .catch((error) =>
      dispatch({
        type: GET_ALL_COUNTRY_CASES_ERROR,
        error: error.response ? error.response.data : error.message,
      })
    );
};

export default { loadAllCases };
