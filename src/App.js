import React from "react";
import combinedActions from "./redux/actions";
import { useDispatch, connect } from "react-redux";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Dropdown } from "./components/dropdown";
import { Cases } from "./components/cases";
import Fuse from "fuse.js";
import LocalCases from "./components/localCases/LocalCases";

function App(props) {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [localCases, setLocalCases] = React.useState("");
  const [filteredResult, setFilteredResult] = React.useState([]);

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

  const countryDropdownHandler = e => setSelectedCountry(e.target.value);
  const localCasesHandler = e => setLocalCases(e.target.value);

  const fuse = new Fuse(props.localCases, {
    keys: ["combinedKey"]
  });

  const onSubmit = () => {
    if (localCases.length > 0) {
      setFilteredResult([...fuse.search(localCases)]);
    }
  };
  const handleKeyPress = e => {
    if (e.keyCode === 13 && localCases.length > 0) {
      onSubmit();
    }
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <Header />
      <Content>
        <Dropdown
          selectCountry={countryDropdownHandler}
          countries={props.codes}
        >
          <Cases data={props.countryCases} />
        </Dropdown>
      </Content>
      {selectedCountry === "US" ? (
        <LocalCases
          localData={filteredResult}
          localCasesHandler={localCasesHandler}
          handleKeyPress={handleKeyPress}
          onSubmit={() => onSubmit()}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = state => ({
  codes: state.getCountryCodes.countries,
  countryCases: state.getCases,
  localCases: state.getAllCases.data
});

export default connect(mapStateToProps)(App);
