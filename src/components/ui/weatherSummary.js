import React, { useEffect, useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";
import { Icon, Typography } from "@material-ui/core";

import sunRise from "../../assets/sunrise.png";
import sunSet from "../../assets/sunset.png";

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
  image: {
    maxHeight: "90%",
    maxWidth: "90%",
  },
}));

function convertDate(unixDate) {
  console.log("HERE!!");
  var millisecond = unixDate;
  var date = new Date(millisecond * 1000);
  return date.toString();
}

export default function WeatherSummary(props) {
  const classes = useStyles();

  //Local State
  const [weather, setWeather] = useState("");
  const [weatherMin, setWeatherMin] = useState("");
  const [weatherMax, setWeatherMax] = useState("");
  const [weatherDate, setWeatherDate] = useState("");
  const [weatherTempCurrent, setWeatherTempCurrent] = useState("");
  const [weatherSunUp, setWeatherSunUp] = useState("");
  const [weatherSunDown, setWeatherSunDown] = useState("");

  useEffect(() => {
    getWeather();
  }, []);

  ////////////////////////////////////////////////////////
  const getWeather = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:4000/currentWeather", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);

        var stringDate = convertDate(weather.dt);
        var dispDate =
          stringDate.substring(0, 3) +
          " " +
          stringDate.substring(8, 10) +
          " " +
          stringDate.substring(4, 7) +
          " " +
          stringDate.substring(11, 15);
        setWeatherDate(dispDate);

        stringDate = convertDate(weather.sys.sunrise);
        setWeatherSunUp(stringDate.substring(16, 21));
        stringDate = convertDate(weather.sys.sunset);
        setWeatherSunDown(stringDate.substring(16, 21));
        // console.log(stringDate);
        // console.log(dispDate);

        setWeatherMin(Math.round(Number(weather.main.temp_min)));
        setWeatherMax(Math.round(Number(weather.main.temp_max)));
        setWeatherTempCurrent(Math.round(Number(weather.main.temp)));
        console.log(weather);
        console.log(weather.wind.deg);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid
      container
      // justifyContent="space-around"
      // alignItems="center"
      // direction="column"
      className={classes.weatSumm}
    >
      {/* <Grid item container style={{ border: "1px solid" }}>
        <Grid item>Header</Grid>
      </Grid> */}
      <Grid item container>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>{weatherDate}</Grid>
          <Grid item>{weatherTempCurrent}</Grid>
          <Grid item container>
            <Grid item>down </Grid>
            <Grid item>up </Grid>
          </Grid>
          <Grid item container>
            <Grid item>{weatherMin} </Grid>
            <Grid item>{weatherMax} </Grid>
          </Grid>
          {/* <Grid item container ><h3>t</h3></Grid> */}
        </Grid>
        <Grid item container style={{ width: "33%" }}>
          <h3>I</h3>
        </Grid>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>Wind Speed :{weather.wind.speed}</Grid>
          <Grid item>Wind Deg: {weather.wind.deg}</Grid>
          <Grid item container justifyContent="space-between">
            <Grid
              item
              container
              style={{ width: "45%" }}
              justifyContent="center"
            >
              <img src={sunRise} className={classes.image} alt="fireSpot" />
            </Grid>
            <Grid
              item
              container
              style={{ width: "45%" }}
              justifyContent="center"
            >
              <img src={sunSet} className={classes.image} alt="fireSpot" />
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>{weatherSunUp} </Grid>
            <Grid item>{weatherSunDown} </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid item container>
        <Grid item style={{ width: "20%", border: "1px solid" }}>
          icon
        </Grid>
        <Grid item container style={{ width: "80%", border: "1px solid" }}>
          <Grid item container>
            <Grid item>27 C</Grid>
            <Grid item>13 KPH NW</Grid>
            <Grid item>Sunup</Grid>
          </Grid>
          <Grid item container>
            <Grid item>Overcast</Grid>
            <Grid item>Sundown</Grid>
          </Grid>
        </Grid>
        {/* <Grid item container>
          <Grid item container></Grid>
          <Grid item container></Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
