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
  const [weather, setWeather] = useState([]);
  const [weatherParsed, setWeatherParsed] = useState({
    min: "",
    max: "",
    weekDay: "",
    date: "",
  });

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
      // .then((response) => setActiveJournals(response))
      .catch((error) => console.log(error));
  };
  ////////////////////////////////////////////////////////

  //Test data
  const newSummTemp = [
    {
      message: "accurate",
      cod: "200",
      count: 5,
      list: [
        {
          id: 2643743,
          name: "London",
          coord: {
            lat: 51.5085,
            lon: -0.1257,
          },
          main: {
            temp: 19.14,
            feels_like: 19.15,
            temp_min: 17.83,
            temp_max: 20.14,
            pressure: 1014,
            humidity: 78,
          },
          dt: 1634641755,
          wind: {
            speed: 1.34,
            deg: 266,
          },
          sys: {
            country: "GB",
          },
          rain: null,
          snow: null,
          clouds: {
            all: 75,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.weatSumm}
    >
      <Grid item container alignItems="center">
        <ArrowLeftIcon />
      </Grid>
      {newSummTemp.map(({ list }, index) => (
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
                      {/* {new Date(listItem.dt * 1000)} */}
                    </Typography>
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Typography className={classes.summDate}>
                      {/* {summ.date} */}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </div>
      ))}
      <Grid item container alignItems="center" justifyContent="flex-end">
        <ArrowRightIcon />
      </Grid>
    </Grid>
  );
}
