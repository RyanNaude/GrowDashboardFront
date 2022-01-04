import React, { useEffect } from "react";
import { useState } from "react";
import Config from "../../../json/select.json";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/chip";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

//Custom component import
import ButtonCust from "../../component/ButtonCust";
import InputCust from "../../component/InputCust";
import InputMultiCust from "../../component/InputMultiCust";
import SelectCust from "../../component/SelectCust";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
    width: "100%",
    border: "0px solid",
  },
  journalInput: {
    margin: "0",
    marginTop: "3px",
  },
  mainPageSub: {
    border: "0px solid black",
  },
  root: {
    maxWidth: 345,
    backgroundColor: "#ebffdb",
    marginTop: "0.5em",
  },
  media: {
    height: 0,
    paddingTop: "36.25%",
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
  avatar: {},
  journalDescTitle: {
    paddingBottom: "0.5em",
    color: "#000",
    opacity: "0.65",
  },
  journalDesc: {
    width: "95%",
    border: `0px solid ${theme.palette.common.blue}`,
    borderRadius: "3pt",
    backgroundColor: theme.palette.secondary.light,
    paddingLeft: "3px",
    paddingRight: "3px",
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {},
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
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
    backgroundColor: theme.palette.primary.light,
    fontSize: "12pt",
  },
  gridItemStyle: {
    marginTop: "0.5em",
  },
  typogGrid: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
  },
}));

export default function EditJournal(props) {
  const classes = useStyles();

  //Get Global State
  const currentUser = useSelector(selectCurrentUser);

  //Setup Local State
  // const [expanded, setExpanded] = useState(false);
  const [soilTypeState, setSoilTypeState] = useState([]);
  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
    vegWatt: "",
    flowerWatt: "",
    username: currentUser,
  });

  useEffect(() => {
    setSoilTypeState(props.fullSelectedJournal.growMedium);
  }, []);

  //Updating journals
  // const updateJournal = (event) => {
  //   console.log("UPDATE JOURNAL");
  //   // setFullJournal({ ...fullJournal, [event.target.name]: event.target.value });
  // };

  const cancelNewJournal = () => {
    // setExpanded(false);
    props.setEditJournal(!props.editJournal);
    props.setDispCarousel(!props.dispCarousel);
    props.setDispWeather(!props.dispWeather);
  };

  //Journal Data Processing
  //Requesting -  Create new journal on backend
  const updateJournal = async () => {
    console.log("Update Journal");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        journalNameField: props.fullSelectedJournal.name,
        journalDescField: props.fullSelectedJournal.description,
        journalRoomType: props.fullSelectedJournal.roomType,
        journalWaterType: props.fullSelectedJournal.waterType,
        journalVegLight: props.fullSelectedJournal.vegLight,
        journalFlowLight: props.fullSelectedJournal.flowLight,
        journalGrowMedium: props.fullSelectedJournal.growMedium,
        journalVegWatt: props.fullSelectedJournal.vegWatt,
        journalFlowerWatt: props.fullSelectedJournal.flowerWatt,
        journalId: props.fullSelectedJournal.id,
      }),
    };
    fetch("http://localhost:4000/journal/updateJournal", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.journalUpdate === "Success") {
          props.setEditJournal(!props.editJournal);
          props.setDispCarousel(!props.dispCarousel);
          props.setDispWeather(!props.dispWeather);
        } else {
          console.log(response.journalUpdate);
        }
      })
      .catch((error) => console.log(error));
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChangeMultiple = (event) => {
    setSoilTypeState(event.target.value);
    props.setFullSelectedJournal({
      ...props.fullSelectedJournal,
      growMedium: event.target.value,
    });
  };

  const updateState = (event) => {
    props.setFullSelectedJournal({
      ...props.fullSelectedJournal,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ border: "0px solid", padding: "0" }}>
        <Grid container direction="row" style={{ width: "100%" }}>
          <Grid item className={classes.typogGrid}>
            <Typography
              variant="h6"
              style={{ fontWeight: "normal", paddingLeft: "0.5em" }}
            >
              Update Journal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputCust
              id={"newJournalTitle"}
              label={"Journal Name"}
              name={"name"}
              helperText={""}
              inputWidth={"96%"}
              value={props.fullSelectedJournal.name}
              curState={fullJournal}
              setCurState={setFullJournal}
              onChange={updateState}
            />
          </Grid>

          <Grid item className={classes.gridItemStyle} xs={6}>
            <SelectCust
              name="roomType"
              label="Room Type"
              labelId="watering_type"
              inputWidth="100%"
              menuArr={Config.roomType}
              curState={fullJournal}
              setCurState={setFullJournal}
              value={props.fullSelectedJournal.roomType}
              onChange={updateState}
            />
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={6}>
            <SelectCust
              name="waterType"
              label="Watering Type"
              labelId="watering_type"
              inputWidth="100%"
              menuArr={Config.waterType}
              curState={fullJournal}
              setCurState={setFullJournal}
              value={props.fullSelectedJournal.waterType}
              onChange={updateState}
            />
          </Grid>
          <Grid item container className={classes.gridItemStyle}>
            <Grid item xs={6}>
              <InputCust
                id={"newJournalTitle"}
                label={"Veg Wattage"}
                name={"vegWatt"}
                helperText={""}
                inputWidth={"96%"}
                value={props.fullSelectedJournal.vegWatt}
                curState={fullJournal}
                setCurState={setFullJournal}
                type="number"
                onChange={updateState}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectCust
                name="vegLight"
                label="Veg Light Type"
                inputWidth="100%"
                menuArr={Config.lightType}
                curState={fullJournal}
                setCurState={setFullJournal}
                value={props.fullSelectedJournal.vegLight}
                onChange={updateState}
              />
            </Grid>
          </Grid>
          <Grid item container className={classes.gridItemStyle}>
            <Grid item xs={6}>
              <InputCust
                id={"newJournalTitle"}
                label={"Flower Wattage"}
                name={"flowerWatt"}
                helperText={""}
                inputWidth={"96%"}
                value={props.fullSelectedJournal.flowerWatt}
                curState={fullJournal}
                setCurState={setFullJournal}
                type="number"
                onChange={updateState}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectCust
                name="flowLight"
                label="Flower Light Type"
                inputWidth="100%"
                menuArr={Config.lightType}
                curState={fullJournal}
                setCurState={setFullJournal}
                value={props.fullSelectedJournal.flowLight}
                onChange={updateState}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="soilTypeLabel">Grow Medium</InputLabel>
              <Select
                labelId="soilTypeLabel"
                id="mutipleChip"
                multiple
                value={props.fullSelectedJournal.growMedium}
                onChange={handleChangeMultiple}
                input={<Input id="selectMultipleChip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {soilTypeState.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {Config.soilType.map((soil) => (
                  <MenuItem key={soil} value={soil}>
                    {soil}
                  </MenuItem>
                ))}
                Config.lightType
              </Select>
            </FormControl>
          </Grid>
          <Grid item container className={classes.gridItemStyle} xs={12}>
            <InputMultiCust
              name="description"
              id={"entryNote"}
              label={"Journal Description"}
              helperText={""}
              curState={fullJournal}
              setCurState={setFullJournal}
              value={props.fullSelectedJournal.description}
              placeholder="Short description of journal..."
              inputWidth={"95%"}
              onChange={updateState}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            className={classes.submitGrid}
            justifyContent="center"
          >
            <Grid item>
              <ButtonCust
                butName="Update"
                buttonWidth="75%"
                variant="contained"
                color="primary"
                onClick={updateJournal}
                disabled={
                  props.fullSelectedJournal.name === "" ||
                  props.fullSelectedJournal.description === "" ||
                  props.fullSelectedJournal.roomType === "" ||
                  props.fullSelectedJournal.waterType === "" ||
                  props.fullSelectedJournal.vegLight === "" ||
                  props.fullSelectedJournal.flowLight === "" ||
                  props.fullSelectedJournal.growMedium === "" ||
                  props.fullSelectedJournal.vegWatt === "" ||
                  props.fullSelectedJournal.flowerWatt === ""
                }
              />
            </Grid>
            <Grid item>
              <ButtonCust
                butName="Cancel"
                buttonWidth="75%"
                variant="contained"
                color="secondary"
                onClick={cancelNewJournal}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
