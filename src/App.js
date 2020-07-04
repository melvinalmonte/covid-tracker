import React from "react";
import { connect } from "react-redux";
import Fuse from "fuse.js";
import { loadCases } from "./redux/actions/countryCasesActions";
import { loadCountryCodes } from "./redux/actions/countryCodesActions";
import { loadAllCases } from "./redux/actions/allCountryCasesActions";
import Container from "@material-ui/core/Container";
import { SearchBar } from "./components/Search";
import NavBar from "./components/NavBar/NavBar";
import { Cards } from "./components/Cards";
import { Banner } from "./components/Banner";
import Utils from "./common/utils";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  appBase: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  },
  paperBase: {
    background: "rgba(255, 255, 255, 0.8)"
  }
});

function App(props) {
  const classes = useStyles();
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
    <div>
      <NavBar NavTitle={"Simple Covid-19 Tracker"} />
      <Container className={classes.appBase}>
        <Paper className={classes.paperBase}>
          <Banner customVariant={"h4"}>Global Cases</Banner>
          <Cards data={props.countryCases} />
          <Banner customVariant={"h6"}>
            Last Updated: {Utils.lastUpdated(props.countryCases.lastUpdated)}
          </Banner>
          <SearchBar />
        </Paper>
      </Container>
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
