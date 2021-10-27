import React, { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

//Component Import
import Unsigned from "./ui/unsigned";
import Weather from "./ui/weather";
import WeatherSummary from "./ui/weatherSummary";

//Redux imports
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectTokenState,
} from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6.5em",
  },
  mainPageSub: {
    border: "1px solid black",
  },
  root: {
    maxWidth: 345,
    backgroundColor: "#ebffdb",
  },
  media: {
    height: 0,
    paddingTop: "36.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  journalDescTitle: {
    marginTop: "1.5em",
  },
  journalDesc: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {
    marginTop: "1.5em",
  },
}));

export default function Enviroment(props) {
  const classes = useStyles();

  //Setup Local State
  // const [expanded, setExpanded] = useState(false);
  // const [journalName, setJournalName] = useState("");
  // const [journalDesc, setJournalDesc] = useState("");
  // const [activeJournals, setActiveJournals] = useState([]);

  //Get Global State
  const userLoggedIn = useSelector(selectCurrentUser);
  const tokenState = useSelector(selectTokenState);

  return (
    <Grid container direction="column" className={classes.mainPageStyle}>
      {tokenState ? (
        <Grid item>
          {/* <Weather /> */}
          {/* <TodayWeather /> */}
          <WeatherSummary />
          {/* <Weather />
          <Weather />
          <Weather />
          <Weather /> */}
        </Grid>
      ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )}
    </Grid>
  );
}
