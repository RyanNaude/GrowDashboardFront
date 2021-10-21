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
import { Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  const [weatherFields, setWeatherFields] = useState({
    weatherMinField: "",
    weatherMaxField: "",
    weatherDateField: "",
    weatherTempField: "",
    weatherSunUpField: "",
    weatherSunDownField: "",
    weatherWindSpeedField: "",
    weatherWindDegField: "",
  });

  useEffect(() => {
    // getWeather();
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
        console.log("---------------------------------------------------");
        console.log(response);

        var stringDate = convertDate(response.dt);
        var dispDate =
          stringDate.substring(0, 3) +
          " " +
          stringDate.substring(8, 10) +
          " " +
          stringDate.substring(4, 7) +
          " " +
          stringDate.substring(11, 15);

        stringDate = convertDate(response.sys.sunrise);
        var sunUp = stringDate.substring(16, 21);
        stringDate = convertDate(response.sys.sunset);
        var sunDown = stringDate.substring(16, 21);
        var minTemp = Math.round(Number(response.main.temp_min));
        var maxTemp = Math.round(Number(response.main.temp_max));
        var temp = Math.round(Number(response.main.temp));
        var windSpeed = response.wind.speed;
        var d2d = require("degrees-to-direction");
        var windDeg = d2d(response.wind.deg);

        console.log("Wind Speed");
        console.log(windSpeed);
        console.log("Wind Deg");
        console.log(windDeg);

        setWeatherFields({
          ...weatherFields,
          weatherDateField: dispDate,
          weatherSunUpField: sunUp,
          weatherSunDownField: sunDown,
          weatherMinField: minTemp,
          weatherMaxField: maxTemp,
          weatherTempField: temp,
          weatherWindSpeedField: windSpeed,
          weatherWindDegField: windDeg,
        });

        console.log("---------------------------------------------------");
        console.log(weather);
        console.log(weatherFields);
        console.log("---------------------------------------------------");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid container className={classes.weatSumm}>
      <Grid item container>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>{weatherFields.weatherDateField}</Grid>
          <Grid item>
            {weatherFields.weatherTempField}
            <span>&#8451;</span>
          </Grid>
          <Grid item container>
            <Grid item>
              <ExpandMoreIcon />
            </Grid>
            <Grid item>
              <ExpandLessIcon />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              {weatherFields.weatherMinField}
              <span>&#8451;</span>{" "}
            </Grid>
            <Grid item>
              {weatherFields.weatherMaxField}
              <span>&#8451;</span>{" "}
            </Grid>
          </Grid>
          {/* <Grid item container ><h3>t</h3></Grid> */}
        </Grid>
        <Grid item container style={{ width: "33%" }}>
          <h3>I</h3>
        </Grid>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>Wind Speed : {weatherFields.weatherWindSpeedField}</Grid>

          <Grid item>Wind Deg: {weatherFields.weatherWindDegField}</Grid>

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
            <Grid item>{weatherFields.weatherSunUpField} </Grid>
            <Grid item>{weatherFields.weatherSunDownField} </Grid>
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
      <Grid item>
        <Button
          onClick={() => {
            getWeather();
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
}
