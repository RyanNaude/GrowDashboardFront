import React, { useEffect } from "react";
import { useState } from "react";

//Material UI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";
import { selectDispNewJournal } from "../redux/siteNav/siteNav.selector";

//Component import
import Unsigned from "./ui/Unsigned";
import NewJournal from "./ui/NewJournal";
import CurrentJournals from "./ui/CurrentJournals";
import WeatherSummary from "./ui/WeatherSummary";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
    width: "100%",
    border: "0px solid",
  },
  mainPageSub: {
    border: "0px solid black",
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
    // marginTop: "1.5em",
  },
  journalDesc: {
    border: `0px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {
    marginTop: "1.5em",
  },
  curJournals: { marginTop: "1em", width: "100%" },
  curJournalsSpace: {
    width: "100%",
  },
  curJournalsSpace80: {
    width: "80%",
    marginLeft: "4em",
  },
  curJournalSubheader: {
    fontWeight: "bold",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  //Get Global State
  const tokenState = useSelector(selectTokenState);

  const pageSource = "HME";

  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  });

  //Get Global State
  const dispNewJournal = useSelector(selectDispNewJournal);

  //useEffect - Getting journals loaded on database
  useEffect(() => {
    // getJournals();
  }, []);

  return (
    <Grid container direction="row" className={classes.mainPageStyle}>
      {tokenState ? (
        <Grid item container style={{ border: "0px solid" }}>
          <Grid item style={{ border: "1px solid", width: "100%" }}>
            {dispNewJournal ? null : <CurrentJournals />}
            {dispNewJournal ? <NewJournal /> : null}
            {dispNewJournal ? null : (
              <WeatherSummary
                weatherRefresh={props.weatherRefresh}
                setWeatherRefresh={props.setWeatherRefresh}
                pageSource={pageSource}
              />
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )}
    </Grid>
  );
}
