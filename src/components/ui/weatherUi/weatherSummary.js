import React, { useEffect, useState } from "react";

import Weather from "./weather";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import sunRise from "../../../assets/sunrise.png";
import sunSet from "../../../assets/sunset.png";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  weatSumm: {
    backgroundColor: "#d6ffb5",
    marginTop: "0.5em",
    marginBottom: "0.5em",
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
  dataPlane: {
    backgroundColor: theme.palette.secondary.main,
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
  const [weather, setWeather] = useState(null);
  // const [weatherRefresh, setWeatherRefresh] = useState(false);
  const [ref, setRef] = useState(false);

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
    getWeather();
  }, []);

  var lon = "";
  var lat = "";
  var url = "";
  const getWeather = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
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

        fetch("http://localhost:4000/weather/currentWeather", requestOptions)
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

            var iconCode = response.current.weather[0];

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
            setRef(true);
          })
          .catch((error) => console.log(error));
      });
    } else {
      console.log("Not Available");
    }
  };

  return (
    <Grid container className={classes.weatSumm}>
      <Grid
        item
        container
        xs={4}
        style={{ padding: "0.2em", borderRadius: "5pt" }}
      >
        <Grid
          item
          container
          style={{ padding: "0.2em", borderRadius: "5pt" }}
          className={classes.dataPlane}
        >
          <Grid item xs={12}>
            <Typography>{weatherFields.weatherDateField}</Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid xs={6}>
              <Typography style={{ fontSize: "22px", fontWeight: "normal" }}>
                {weatherFields.weatherTempField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>
              </Typography>
            </Grid>
            <Divider style={{}} />
            <Grid container xs={6} justifyContent="flex-end">
              <Typography style={{ fontSize: "22px", fontWeight: "normal" }}>
                {weatherFields.weatherHumField} %
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container xs={6} alignItems="flex-end">
              <ExpandMoreIcon style={{ border: "0px solid" }} />
              <Typography style={{ fontSize: "14px" }}>Min</Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              xs={6}
            >
              <ExpandLessIcon />
              <Typography style={{ fontSize: "14px" }}>Max</Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ border: "0pt solid" }}>
            <Grid
              item
              xs={6}
              className={classes.dataPlane}
              justifyContent="flex-start"
            >
              <Typography>
                {weatherFields.weatherMinField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>{" "}
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              justifyContent="flex-end"
              className={classes.dataPlane}
            >
              <Typography>
                {weatherFields.weatherMaxField}
                <span style={{ fontSize: "x-small" }}>&#8451;</span>{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={4} alignItems="center" justifyContent="center">
        <Typography style={{ fontWeight: "bold", fontSize: "15pt" }}>
          Weather
        </Typography>
        <Typography style={{ fontWeight: "bold", fontSize: "15pt" }}>
          Summary
        </Typography>
        <img
          src={weatherFields.weatherIcon}
          className={classes.image}
          alt="fireSpot"
        />
      </Grid>
      <Grid
        item
        container
        xs={4}
        style={{ padding: "0.2em", borderRadius: "5pt" }}
      >
        <Grid
          item
          container
          style={{ padding: "0.2em", borderRadius: "5pt" }}
          className={classes.dataPlane}
        >
          <Grid item xs={12}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Wind Speed</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{weatherFields.weatherWindSpeedField} km</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Direction:</span>{" "}
              {weatherFields.weatherWindDegField}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            xs={12}
          >
            <Grid item container xs={6} justifyContent="flex-start">
              <img src={sunRise} className={classes.image} alt="fireSpot" />
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <img src={sunSet} className={classes.image} alt="fireSpot" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            xs={12}
          >
            <Grid item container xs={6} justifyContent="flex-start">
              <Typography>{weatherFields.weatherSunUpField}</Typography>{" "}
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <Typography>{weatherFields.weatherSunDownField} </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {props.pageSource === "ENV" ? (
        <Grid item container justifyContent="space-evenly">
          {ref
            ? weather.daily.map((day, i) => (
                <Grid item key={i} xs={3}>
                  <Weather day={day} convertDate={convertDate} />
                </Grid>
              ))
            : null}
        </Grid>
      ) : null}
    </Grid>
  );
}
