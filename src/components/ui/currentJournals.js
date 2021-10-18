import React, { useEffect } from "react";
import { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//Redux imports
import { useSelector, useDispatch } from "react-redux";
import { displayNewJournal } from "../../redux/siteNav/siteNav.actions";
import { selectDispNewJournal } from "../../redux/siteNav/siteNav.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "3em",
    border: "1px solid",
  },
  CheckButton: {
    backgroundColor: theme.palette.secondary.main,
    top: "calc(50% - 20px) !important",
    transition: "40ms",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.6 !important",
    },
    height: "25px",
    width: "100%",
  },
  paperStyle: {
    backgroundColor: "#d6ffb5",
    marginTop: "0.5em",
    height: "200px",
  },
  journalTitle: {
    width: "90%",
  },
  journalAddIcon: {
    width: "10%",
  },
  journalIcon: {
    marginRight: "3px",
    marginTop: "3px",
    color: theme.palette.primary.dark,
  },
  journalDesc: {
    paddingLeft: "0.5em",
    height: "100px",
    // border: "1px solid",
  },
}));

export default function CurrentJournals(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  //Get Global State
  const dispNewJournal = useSelector(selectDispNewJournal);

  //Test Data
  const test = [
    {
      name: "Tempus",
      description:
        "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Quam pellentesque nec nam aliquam sem. Nunc pulvinar sapien et ligula ullamcorper.",
    },
    {
      name: "Pellentesque",
      description:
        "Enim tortor at auctor urna nunc. Placerat duis ultricies lacus sed turpis tincidunt id.",
    },
    {
      name: "Pharetra",
      description:
        "Facilisis leo vel fringilla est ullamcorper. Ut consequat semper viverra nam libero justo laoreet. Ut sem nulla pharetra diam sit amet nisl. Semper eget duis at tellus at urna condimentum mattis pellentesque.",
    },
  ];

  //Setup Local State
  // const [expanded, setExpanded] = useState(false);
  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  });

  useEffect(() => {}, []);

  const togNewJournalDisplay = () => {
    console.log("togNewJournalDisplay");
    dispatch(displayNewJournal(!dispNewJournal));
  };

  return (
    <div>
      <Carousel next={(next, active) => {}} prev={(prev, active) => {}}>
        {test.map((item, index) => (
          <Paper className={classes.paperStyle} key={index}>
            <Grid container direction="column">
              <Grid item container alignItems="flex-start">
                <Grid
                  item
                  className={classes.journalTitle}
                  style={{ paddingLeft: "0.5em" }}
                >
                  <h2>{item.name}</h2>
                </Grid>
                <Grid
                  item
                  container
                  className={classes.journalAddIcon}
                  justifyContent="flex-end"
                >
                  <AddCircleOutlineIcon
                    className={classes.journalIcon}
                    style={{ zIndex: 1 }}
                    onClick={() => togNewJournalDisplay()}
                  />
                </Grid>
              </Grid>
              <Grid item className={classes.journalDesc}>
                <p>{item.description}</p>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item className={classes.buttonGrid}>
                  <Button
                    className={classes.CheckButton}
                    onClick={() => console.log("But Clicked")}
                  >
                    Select
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}
