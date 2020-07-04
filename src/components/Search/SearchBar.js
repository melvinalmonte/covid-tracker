import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Search } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchBase: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  }
});

const SearchBar = ({ searchHandler, keyPressHandler }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.searchBase} container justify={"center"}>
      <Grid item>
        <FormControl variant="outlined">
          <InputLabel htmlFor="search-by-country">Search by Country</InputLabel>
          <OutlinedInput
            onChange={searchHandler}
            onKeyDown={keyPressHandler}
            id="search-by-country"
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search-by-country" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={130}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
