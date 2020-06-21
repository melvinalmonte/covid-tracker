import { combineReducers } from "redux";
import getCases from "./countryCasesReducer";
import getCountryCodes from "./countryCodesReducer";
import getAllCases from "./allCountryCasesReducer";

const rootReducer = combineReducers({
  getCases,
  getCountryCodes,
  getAllCases,
});

export default rootReducer;
