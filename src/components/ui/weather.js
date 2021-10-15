import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
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
  mainPageStyle: {
    marginBottom: "0.5em",
  },
  root: {
    backgroundColor: theme.palette.secondary.light,
  },
  dayGrid: {
    width: "18%",
  },
  dividerStyle: {
    width: "80%",
    color: "black",
  },
}));

export default function Weather(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  //Test data
  const summTemp = [
    {
      maxTemp: "25",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Mon",
      date: "01 | JAN",
    },
    {
      maxTemp: "26",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Tue",
      date: "02 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Wed",
      date: "03 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Thu",
      date: "04 | JAN",
    },
    {
      maxTemp: "26",
      minTemp: "15",
      icon: "Icon",
      weekDay: "Fri",
      date: "05 | JAN",
    },
  ];

  return (
    <Grid
      container
      className={classes.mainPageStyle}
      justifyContent="space-between"
    >
      {summTemp.map((summ, index) => (
        <Grid item container key={index} className={classes.dayGrid}>
          <Paper variant="outlined" key={index} style={{ border: "1px solid" }}>
            <Grid item container direction="column" className={classes.root}>
              <Grid item container justifyContent="center">
                <Typography className={classes.summMaxTemp}>
                  {summ.maxTemp}
                </Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Divider className={classes.dividerStyle} />
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
    </Grid>
  );
}
