import React, { useEffect } from "react";
import { useState } from "react";

//Material UI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";
// import { selectDispNewJournal } from "../redux/siteNav/siteNav.selector";

//Component import
import Unsigned from "./ui/unsigned";
import NewJournal from "./ui/journalUi/newJournal";
import EditJournal from "./ui/journalUi/editJournal";
import CurrentJournals from "./ui/journalUi/currentJournals";
import WeatherSummary from "./ui/weatherUi/weatherSummary";

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
    borderRadius: "3pt",
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

  const [dispNewJournal, setDispNewJournal] = useState(false);
  const [editJournal, setEditJournal] = useState(false);
  const [dispWeather, setDispWeather] = useState(true);
  const [dispCarousel, setDispCarousel] = useState(true);

  const [fullSelectedJournal, setFullSelectedJournal] = useState({
    activeJournal: false,
    description: "",
    flowLight: "",
    flowerWatt: "",
    growMedium: [],
    journalUsername: "",
    name: "",
    roomType: "",
    vegLight: "",
    vegWatt: "",
    waterType: "",
    id: ""
  });

  //useEffect - Getting journals loaded on database
  useEffect(() => {
    // getJournals();
  }, []);

  return (
    <Grid container direction="row" className={classes.mainPageStyle}>
      {tokenState ? (
        <Grid item container style={{ border: "0px solid" }}>
          <Grid
            item
            style={{
              border: "0px solid",
              width: "100%",
            }}
          >
            {/* Display current journals as carousel */}
            {dispCarousel ? (
              <CurrentJournals
                dispNewJournal={dispNewJournal}
                setDispNewJournal={setDispNewJournal}
                fullSelectedJournal={fullSelectedJournal}
                setFullSelectedJournal={setFullSelectedJournal}
                editJournal={editJournal}
                setEditJournal={setEditJournal}
                dispCarousel={dispCarousel}
                setDispCarousel={setDispCarousel}
                dispWeather={dispWeather}
                setDispWeather={setDispWeather}
              />
            ) : null}
            {/* Create new journal */}
            {dispNewJournal ? (
              <NewJournal
                dispNewJournal={dispNewJournal}
                setDispNewJournal={setDispNewJournal}
                dispCarousel={dispCarousel}
                setDispCarousel={setDispCarousel}
                dispWeather={dispWeather}
                setDispWeather={setDispWeather}
              />
            ) : null}
            {/* Edit currently selected journal */}
            {editJournal ? (
              <EditJournal
                fullSelectedJournal={fullSelectedJournal}
                setFullSelectedJournal={setFullSelectedJournal}
                editJournal={editJournal}
                setEditJournal={setEditJournal}
                dispCarousel={dispCarousel}
                setDispCarousel={setDispCarousel}
                dispWeather={dispWeather}
                setDispWeather={setDispWeather}
              />
            ) : null}

            {/* Display weather data */}
            {dispWeather ? (
              <WeatherSummary
                weatherRefresh={props.weatherRefresh}
                setWeatherRefresh={props.setWeatherRefresh}
                pageSource={pageSource}
              />
            ) : null}
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
