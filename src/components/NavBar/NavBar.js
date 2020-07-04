import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navBase: {
    background: "rgba(2, 44, 104, .7)"
  }
});

const NavBar = ({ NavTitle }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBase}>
      <Toolbar>
        <Typography variant="h6">{NavTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
