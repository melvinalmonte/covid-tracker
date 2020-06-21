import React from "react";
import combinedActions from "./redux/actions";
import { useDispatch, connect } from "react-redux";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Dropdown } from "./components/dropdown";
import { Cases } from "./components/cases";

function App(props) {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = React.useState("");

  React.useEffect(() => {
    if (selectedCountry !== "global" && selectedCountry !== "") {
      dispatch(
        combinedActions.allCountryCasesActions.loadAllCases(selectedCountry)
      );
      dispatch(combinedActions.countryCasesActions.loadCases(selectedCountry));
      dispatch(combinedActions.countryCodesActions.loadCountryCodes());
    } else {
      dispatch(combinedActions.countryCasesActions.loadCases(selectedCountry));
      dispatch(combinedActions.countryCodesActions.loadCountryCodes());
    }
  }, [selectedCountry]);

  const countryDropdownHandler = (e) => setSelectedCountry(e.target.value);

  return (
    <div className="container">
      <Header />
      <Content>
        <Dropdown
          selectCountry={countryDropdownHandler}
          countries={props.codes}
        >
          <Cases data={props.cases} />
        </Dropdown>
      </Content>
    </div>
  );
}

const mapStateToProps = (state) => ({
  codes: state.getCountryCodes.countries,
  cases: state.getCases,
});

export default connect(mapStateToProps)(App);
