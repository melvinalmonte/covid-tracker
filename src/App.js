import React from "react";
import combinedActions from "./redux/actions";
import { useDispatch, connect } from "react-redux";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Dropdown } from "./components/dropdown";
import { Cases } from "./components/cases";
import Fuse from "fuse.js";
import Collapsible from "react-collapsible";

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

  const lastUpdated = lastUpdate => {
    const time = new Date(lastUpdate);
    return time.toUTCString();
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
        <div className="column animate__animated animate__fadeInUp">
          <div className="field has-addons cov-searchbar-container">
            <div className="control">
              <input
                onChange={localCasesHandler}
                onKeyDown={handleKeyPress}
                className="input is-rounded"
                type="text"
                placeholder="Search city and state..."
              />
            </div>
            <div className="control">
              <button className="button is-rounded" onClick={() => onSubmit()}>
                Search
              </button>
            </div>
          </div>
          <div className="column">
            <p className="subtitle">Top Matches: </p>

            {filteredResult.map(data => (
              <div
                key={data.item.uid}
                className="column animate__animated animate__fadeInUp"
              >
                <Collapsible
                    accordionPosition="right-0"
                  trigger={
                    <button className="button is-rounded">
                      {data.item.combinedKey}
                    </button>
                  }
                >
                  <div className="box column is-4 cov-collapsible-content">
                    <p className="has-text-black">
                      Confirmed: {data.item.confirmed.toLocaleString()}
                    </p>
                    <p className="has-text-black">
                      Recovered: {data.item.recovered.toLocaleString()}
                    </p>
                    <p className="has-text-black">
                      Deaths: {data.item.deaths.toLocaleString()}
                    </p>
                    <p className="has-text-black">
                      Last Updated: {lastUpdated(data.item.lastUpdate)}
                    </p>
                  </div>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
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
