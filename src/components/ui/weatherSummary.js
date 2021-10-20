import React, { useEffect, useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

console.log();

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

  //Local State
  const [weather, setWeather] = useState();
  const [weatherParsed, setWeatherParsed] = useState({
    min: "",
    max: "",
    weekDay: "",
    date: "",
  });

  useEffect(() => {
    getWeather();
    console.log("weather 2");
    var millisecond = weather.dt;
    var date = new Date(millisecond * 1000);
    var stringDate = date.toString();
    var dispDate =
      stringDate.substring(0, 3) +
      " " +
      stringDate.substring(8, 10) +
      " " +
      stringDate.substring(4, 7) +
      " " +
      stringDate.substring(11, 15);
    setWeatherParsed({ date: dispDate });
    // console.log(weatherParsed.date);
  }, []);

  ////////////////////////////////////////////////////////
  const getWeather = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:4000/currentWeather", requestOptions)
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((error) => console.log(error));
  };

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.weatSumm}
    >
      <Grid item container style={{ border: "1px solid" }}></Grid>

      {/* {newSummTemp.map(({ list }, index) => (
        <div key={index}>
          {list.map((listItem, i) => (
            <Grid item style={{ width: "20%" }} key={index}>
              <Paper variant="outlined">
                <Grid container direction="column" className={classes.root}>
                  <Grid item container justifyContent="center">
                    <Typography className={classes.summMaxTemp}>
                      {listItem.main.temp_max}
                    </Typography>
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Divider style={{ width: "80%", color: "black" }} />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Typography>{listItem.main.temp_min}</Typography>
                  </Grid>
                  <Grid item container justifyContent="center">
                    <CloudIcon />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Typography className={classes.weekDay}>
                      {new Date(listItem.dt * 1000)}
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
        </div>
      ))} */}
    </Grid>
  );
}
