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

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  weatSumm: {
    backgroundColor: "white",
    marginTop: "0.5em",
    marginBottom: "0.5em"
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
  // console.log("props.weatherRefresh");
  // console.log(props.weatherRefresh);

  //Local State
  const [weather, setWeather] = useState("");
  const [weatherRefresh, setWeatherRefresh] = useState(false);

  const [weatherFields, setWeatherFields] = useState({
    weatherMinField: "",
    weatherMaxField: "",
    weatherDateField: "",
    weatherTempField: "",
    weatherHumField: "",
    weatherSunUpField: "",
    weatherSunDownField: "",
    weatherWindSpeedField: "",
    weatherWindDegField: "",
    weatherIcon: "",
    weatherAPI: "",
  });

  useEffect(() => {
    console.log("---------- USE EFFECT ----------------");
    getWeather();
  }, [props.weatherRefresh]);

  ////////////////////////////////////////////////////////
  var lon = "";
  var lat = "";
  var url = "";
  const getWeather = async () => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Still Available");
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        url =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&exclude=hourly,minutely&appid=";

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            weatherAPI: url,
          }),
        };
        console.log("requestOptions.body");
        console.log(requestOptions.body);
        fetch("http://localhost:4000/currentWeather", requestOptions)
          .then((response) => response.json())
          .then((response) => {
            setWeather(response);

            var stringDate = convertDate(response.current.dt);
            var dispDate =
              stringDate.substring(0, 3) +
              " " +
              stringDate.substring(8, 10) +
              " " +
              stringDate.substring(4, 7) +
              " " +
              stringDate.substring(11, 15);

            stringDate = convertDate(response.current.sunrise);
            var sunUp = stringDate.substring(16, 21);
            stringDate = convertDate(response.current.sunset);
            var sunDown = stringDate.substring(16, 21);

            const todayWeather = response.daily[0];

            var minTemp = Math.round(Number(todayWeather.temp.min));
            var maxTemp = Math.round(Number(todayWeather.temp.max));

            var temp = Math.round(Number(response.current.temp));
            var windSpeed = response.current.wind_speed;
            var d2d = require("degrees-to-direction");
            var windDeg = d2d(response.current.wind_deg);
            var humidity = response.current.humidity;

            console.log("icon URL");
            var iconCode = response.current.weather[0];
            console.log(iconCode.icon);

            var iconUrl =
              "https://openweathermap.org/img/wn/" + iconCode.icon + "@2x.png";

            setWeatherFields({
              ...weatherFields,
              weatherDateField: dispDate,
              weatherSunUpField: sunUp,
              weatherSunDownField: sunDown,
              weatherMinField: minTemp,
              weatherMaxField: maxTemp,
              weatherTempField: temp,
              weatherHumField: humidity,
              weatherWindSpeedField: windSpeed,
              weatherWindDegField: windDeg,
              weatherIcon: iconUrl,
            });
          })
          .catch((error) => console.log(error));
      });
    } else {
      console.log("Not Available");
    }
  };

  return (
    <Grid
      container
      className={classes.weatSumm}
      style={{ border: "1px solid" }}
    >
      <Grid item container>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>
            <Typography>{weatherFields.weatherDateField}</Typography>
          </Grid>
          <Grid item container style={{ marginTop: "1em" }}>
            <Grid style={{ width: "50%" }}>
              <Typography>
                {weatherFields.weatherTempField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>
              </Typography>
            </Grid>
            <Divider style={{}} />
            <Grid container style={{ width: "50%" }} justifyContent="flex-end">
              <Typography>{weatherFields.weatherHumField} %</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container style={{ width: "50%" }} alignItems="flex-end">
              <ExpandMoreIcon style={{ border: "0px solid" }} />
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              style={{ width: "50%" }}
            >
              <ExpandLessIcon />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item style={{ width: "50%" }}>
              <Typography>
                {weatherFields.weatherMinField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>{" "}
              </Typography>
            </Grid>
            <Grid
              item
              container
              style={{ width: "50%" }}
              justifyContent="flex-end"
            >
              <Typography>
                {weatherFields.weatherMaxField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>{" "}
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item container ><h3>t</h3></Grid> */}
        </Grid>
        <Grid item container style={{ width: "33%" }} alignItems="center">
          <img
            src={weatherFields.weatherIcon}
            style={{ width: "100%", height: "85%" }}
            // className={classes.image}
            alt="fireSpot"
          />
        </Grid>
        <Grid item container direction="column" style={{ width: "33%" }}>
          <Grid item>
            <Typography>Wind</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Speed : {weatherFields.weatherWindSpeedField}
            </Typography>
          </Grid>

          <Grid item>
            <Typography>
              Direction: {weatherFields.weatherWindDegField}
            </Typography>
          </Grid>

          <Grid item container justifyContent="space-between">
            <Grid
              item
              container
              style={{ width: "45%" }}
              justifyContent="center"
              alignItems="flex-end"
            >
              <img src={sunRise} className={classes.image} alt="fireSpot" />
            </Grid>
            <Grid
              item
              container
              style={{ width: "45%" }}
              justifyContent="center"
              alignItems="flex-end"
            >
              <img src={sunSet} className={classes.image} alt="fireSpot" />
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography>{weatherFields.weatherSunUpField}</Typography>{" "}
            </Grid>
            <Grid item>
              <Typography>{weatherFields.weatherSunDownField} </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      {/* <Grid item container>
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
      </Grid> */}
    </Grid>
  );
}
