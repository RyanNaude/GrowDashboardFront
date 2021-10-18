import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  arrowBack: { marginRight: "10px" },
  arrowForward: { marginLeft: "10px" },
  yearDisplay: { fontWeight: "medium" },
  root: {},
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  calanderDay: {
    width: "13%",
    margin: "2px",
    border: "0px solid",
  },
  monthGrid: {
    marginTop: "0.5em",
  },
  calanderGrid: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: "0.5em",
    paddingRight: "0.5em",
    paddingLeft: "0.5em",
    borderRadius: "5px",
  },
  dayPaper: {
    backgroundColor: theme.palette.secondary.Light,
  },
}));

//Test Data
const month = "January";
const year = "2021";

export default function CalanderMonth(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  //Test Data
  const testMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <Grid container justifyContent="center" className={classes.calanderGrid}>
      <Grid item container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <ArrowBackIosIcon className={classes.arrowBack} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          style={{ width: "50%" }}
        >
          <Grid item>
            <Typography variant="h5">{month}</Typography>{" "}
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: "5px", marginRight: "5px" }}>
              |
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.yearDisplay}>{year}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon className={classes.arrowForward} />
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item container position="flex" className={classes.monthGrid}>
          {testMonth.map((data, index) => (
            <Grid item className={classes.calanderDay} key={index}>
              <Paper variant="outlined" className={classes.dayPaper}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {data}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
