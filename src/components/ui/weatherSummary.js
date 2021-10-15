import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  weatSumm: {
    backgroundColor: "white",
    marginTop: "0.5em",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
  },
  summMaxTemp: {
    fontWeight: "bold",
    fontSize: "15pt",
  },
  weekDay: {
    fontWeight: "bold",
    fontSize: "10pt",
  },
  summDate: {
    fontSize: "9pt",
  },
}));

export default function WeatherSummary(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  //Test data
  const summTemp = [
    {
      maxTemp: "25",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Mon",
      date: "21 | JAN",
    },
    {
      maxTemp: "26",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Tue",
      date: "22 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Wed",
      date: "23 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Thu",
      date: "24 | JAN",
    },
  ];

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.weatSumm}
    >
      <Grid item contianer alignItems="center">
        <ArrowLeftIcon />
      </Grid>
      {summTemp.map((summ, index) => (
        <Grid item style={{ width: "20%" }} key={index}>
          <Paper variant="outlined">
            <Grid container direction="columnn" className={classes.root}>
              <Grid item container justifyContent="center">
                <Typography className={classes.summMaxTemp}>
                  {summ.maxTemp}
                </Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Divider style={{ width: "80%", color: "black" }} />
              </Grid>
              <Grid item container justifyContent="center">
                <Typography>{summ.minTemp}</Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <CloudIcon />
              </Grid>
              <Grid item container justifyContent="center">
                <Typography className={classes.weekDay}>
                  {summ.weekDay}
                </Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Typography className={classes.summDate}>
                  {summ.date}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
      <Grid item alignItems="center" justifyContent="flex-end">
        <ArrowRightIcon />
      </Grid>
    </Grid>
  );
}
