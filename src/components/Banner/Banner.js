import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bannerBase: {
    paddingTop: "2rem"
  }
});

const Banner = ({ children, customVariant }) => {
  const classes = useStyles();
  return (
    <Typography
      component="h1"
      className={classes.bannerBase}
      variant={customVariant}
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {children}
    </Typography>
  );
};

export default Banner;
