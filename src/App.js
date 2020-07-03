import React from "react";
import { connect } from "react-redux";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Dropdown } from "./components/dropdown";
import { Cases } from "./components/cases";
import Fuse from "fuse.js";
import LocalCases from "./components/localCases/LocalCases";
import { loadCases } from "./redux/actions/countryCasesActions";
import { loadCountryCodes } from "./redux/actions/countryCodesActions";
import { loadAllCases } from "./redux/actions/allCountryCasesActions";

function App(props) {
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [localCases, setLocalCases] = React.useState("");
  const [filteredResult, setFilteredResult] = React.useState([]);

  React.useEffect(() => {
    props.loadCountryCodes();
    if (selectedCountry !== "global" && selectedCountry !== "") {
      props.loadAllCases(selectedCountry);
      props.loadCases(selectedCountry);
    } else {
      props.loadCases(selectedCountry);
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

const mapDispatchToProps = {
  loadCases,
  loadCountryCodes,
  loadAllCases
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
