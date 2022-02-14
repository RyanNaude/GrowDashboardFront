import React, { useEffect, useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Carousel from "react-material-ui-carousel";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Import Custom Components
import ButtonCust from "../../component/ButtonCust";

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
  journalDesc: {},
  buttonGrid: { marginTop: "0.5em" },
}));

export default function CurrentJournals(props) {
  const classes = useStyles();

  //Get Local State
  const [activeJournals, setActiveJournals] = useState([]);
  const fullJournal = {
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  };

  //Requesting - All journals from backend
  const getJournals = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        journalNameField: fullJournal.jName,
        journalDescField: fullJournal.jDesc,
        journalRoomType: fullJournal.roomType,
        journalWaterType: fullJournal.waterType,
        journalVegLight: fullJournal.vegLight,
        journalFlowLight: fullJournal.flowLight,
        journalGrowMedium: fullJournal.growMedium,
      }),
    };
    fetch("http://localhost:4000/journal/journalGet", requestOptions)
      .then((response) => response.json())
      .then((response) => setActiveJournals(response))
      .catch((error) => console.log(error));
  };

  const togNewJournalDisplay = () => {
    props.setDispNewJournal(!props.dispNewJournal);
    props.setDispCarousel(!props.dispCarousel);
    props.setDispWeather(!props.dispWeather);
  };

  function selectJournal(i) {
    props.setFullSelectedJournal({
      ...props.fullSelectedJournal,
      description: activeJournals[i].description,
      flowLight: activeJournals[i].flowLight,
      flowerWatt: activeJournals[i].flowerWatt,
      growMedium: activeJournals[i].growMedium,
      journalUsername: activeJournals[i].journalUsername,
      name: activeJournals[i].name,
      roomType: activeJournals[i].roomType,
      vegLight: activeJournals[i].vegLight,
      vegWatt: activeJournals[i].vegWatt,
      waterType: activeJournals[i].waterType,
      id: activeJournals[i]._id,
    });
    props.setEditJournal(!props.editJournal);
    props.setDispCarousel(!props.dispCarousel);
    props.setDispWeather(!props.dispWeather);
  }

  useEffect(() => {
    getJournals();
  }, []);

  return (
    <Grid container>
      <Grid item container>
        <Carousel next={(next, active) => {}} prev={(prev, active) => {}}>
          {activeJournals.map((item, index) => (
            <Paper className={classes.paperStyle} key={index}>
              <Grid
                container
                direction="column"
                // xs={12}
                style={{ padding: "0.3em" }}
              >
                <Grid item container alignItems="flex-start" xs={12}>
                  <Grid
                    item
                    container
                    alignItems="center"
                    className={classes.journalTitle}
                    style={{ paddingLeft: "0.5em" }}
                  >
                    <Typography variant="h6">{item.name}</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    className={classes.journalAddIcon}
                    justifyContent="flex-end"
                  >
                    <IconButton
                      className={classes.journalIcon}
                      style={{ zIndex: 1 }}
                      onClick={() => togNewJournalDisplay()}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  className={classes.journalDesc}
                  xs={12}
                >
                  <Grid item xs={12} style={{ marginBottom: "0.5em " }}>
                    <Typography>{item.description}</Typography>
                  </Grid>
                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Room Type
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{item.roomType}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Water Type
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{item.waterType}</Typography>
                    </Grid>
                  </Grid>

                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Veg Watt
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography> {item.vegWatt}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Veg Light
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{item.vegLight}</Typography>
                    </Grid>
                  </Grid>

                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Flower Watt
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{item.flowerWatt}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6}>
                    <Grid item xs={6}>
                      <Typography>
                        <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                          Flower Light
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{item.flowLight}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      <span style={{ fontWeight: "bold", fontSize: "10pt" }}>
                        Grow Medium
                      </span>{" "}
                      {item.growMedium}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  // direction="column"
                  justifyContent="center"
                  xs={12}
                >
                  <ButtonCust
                    butName="Select"
                    variant="contained"
                    color="primary"
                    onClick={() => selectJournal(index)}
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
