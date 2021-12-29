import React, { useEffect } from "react";
import { useState } from "react";
import Config from "../../json/select.json";

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

//Custom component import
import ButtonCust from "../component/ButtonCust";
import InputCust from "../component/InputCust";
import InputMultiCust from "../component/InputMultiCust";
import SelectCust from "../component/SelectCust";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";

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
    borderRadius: 5,
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
    // width: "100%",
  },
}));

export default function NewJournal(props) {
  const classes = useStyles();

  //Get Global State
  const currentUser = useSelector(selectCurrentUser);

  //Setup Local State
  const [expanded, setExpanded] = useState(false);
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
    // getJournals();
  }, []);

  //Updating journals
  const updateJournal = (event) => {
    console.log("UPDATE JOURNAL");
    // setFullJournal({ ...fullJournal, [event.target.name]: event.target.value });
  };

  const cancelNewJournal = () => {
    setExpanded(false);
    props.setDispNewJournal(!props.dispNewJournal);
    // dispatch(displayNewJournal(!dispNewJournal));
  };

  //Journal Data Processing
  //Requesting -  Create new journal on backend
  const createJournal = async () => {
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
        journalGrowMedium: soilTypeState,
        journalVegWatt: fullJournal.vegWatt,
        journalFlowerWatt: fullJournal.flowerWatt,
        journalUsername: fullJournal.username,
      }),
    };
    fetch("http://localhost:4000/journal/createJournal", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
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
  };

  const updateState = (event) => {
    setFullJournal({
      ...fullJournal,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ border: "0px solid", padding: "0" }}>
        <Grid container direction="row" style={{ width: "100%" }}>
          <Grid item xs={12}>
            <InputCust
              id={"newJournalTitle"}
              label={"New Journal Name"}
              name={"jName"}
              helperText={""}
              inputWidth={"96%"}
              value={fullJournal.jName}
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
              value={fullJournal.roomType}
              onChange={updateState}
            />
          </Grid>
          <Grid item className={classes.gridItemStyle}  xs={6}>
            <SelectCust
              name="waterType"
              label="Watering Type"
              labelId="watering_type"
              inputWidth="100%"
              menuArr={Config.waterType}
              curState={fullJournal}
              setCurState={setFullJournal}
              value={fullJournal.waterType}
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
                value={fullJournal.vegWatt}
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
                value={fullJournal.vegLight}
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
                value={fullJournal.flowerWatt}
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
                value={fullJournal.flowLight}
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
                value={soilTypeState}
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
              name="jDesc"
              inputWidth="100%"
              id={"entryNote"}
              label={"Journal Description"}
              helperText={""}
              curState={fullJournal}
              setCurState={setFullJournal}
              value={fullJournal.jDesc}
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
                butName="Create"
                buttonWidth="75%"
                variant="contained"
                color="primary"
                onClick={createJournal}
                disabled={
                  fullJournal.jName === "" ||
                  fullJournal.jDesc === "" ||
                  fullJournal.roomType === "" ||
                  fullJournal.waterType === "" ||
                  fullJournal.vegLight === "" ||
                  fullJournal.flowLight === "" ||
                  soilTypeState === "" ||
                  fullJournal.vegWatt === "" ||
                  fullJournal.flowerWatt === "" ||
                  fullJournal.username === ""
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
