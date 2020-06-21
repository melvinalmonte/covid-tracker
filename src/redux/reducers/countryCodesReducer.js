import {
  GET_COUNTRY_CODES_LOADING,
  GET_COUNTRY_CODES_SUCCESS,
  GET_COUNTRY_CODES_ERROR,
} from "../constants/actionTypes";

const initialState = {
  countries: [],
  loading: false,
};

const getCountryCodes = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_CODES_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_COUNTRY_CODES_SUCCESS:
      return Object.assign({}, state, {
        countries: action.countries,
        loading: false,
      });
    case GET_COUNTRY_CODES_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default:
      return state;
  }
};

export default getCountryCodes;
