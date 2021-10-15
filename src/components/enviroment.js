import React, { useState } from "react";
import clsx from "clsx";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//Component Import
import defaultGreen from "../assets/images.jfif";
import Unsigned from "./ui/unsigned";
import Weather from "./ui/weather";
import TodayWeather from "./ui/todayWeather";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";

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
  const [expanded, setExpanded] = useState(false);
  const [journalName, setJournalName] = useState("");
  const [journalDesc, setJournalDesc] = useState("");
  // const [activeJournals, setActiveJournals] = useState([]);

  //Get Global State
  const userLoggedIn = useSelector(selectCurrentUser);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container direction="column" className={classes.mainPageStyle}>
      <Weather />
      <TodayWeather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      {/* ) : (
        <div>
          <Unsigned />
        </div>
      )} */}
    </Grid>
  );
}
