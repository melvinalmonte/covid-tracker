import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  confirmedTitle: {
    padding: "2rem"
  },
  recoveredTitle: {
    padding: "2rem"
  },
  deathsTitle: {
    padding: "2rem 3rem 2rem 3rem"
  },
  cardBase: {
    background: "rgba(255, 255, 255, 0.2)"
  },
  cardContainer: {
    paddingTop: "2rem"
  }
});

const Cards = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Grid container={true} spacing={5} justify={"center"}>
        <Grid item>
          <Card className={classes.cardBase}>
            <CardContent>
              <Typography
                className={classes.confirmedTitle}
                variant={"h4"}
                gutterBottom
                align={"center"}
              >
                Confirmed{" "}
              </Typography>
              <Typography variant="h5" component="p" align={"center"}>
                {data.confirmed.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.cardBase}>
            <CardContent>
              <Typography
                className={classes.recoveredTitle}
                variant={"h4"}
                gutterBottom
                align={"center"}
              >
                Recovered
              </Typography>
              <Typography variant="h5" component="p" align={"center"}>
                {data.recovered.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.cardBase}>
            <CardContent>
              <Typography
                className={classes.deathsTitle}
                variant={"h4"}
                gutterBottom
                align={"center"}
              >
                Deaths
              </Typography>
              <Typography variant="h5" component="p" align={"center"}>
                {data.recovered.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
