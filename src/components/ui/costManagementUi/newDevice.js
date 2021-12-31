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
import { Typography } from "@material-ui/core";

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
    width: "100%",
  },
  typogGrid:{
    backgroundColor: theme.palette.primary.main,
    }
}));

export default function NewDevice(props) {
  const classes = useStyles();

  //Get Global State
  const currentUser = useSelector(selectCurrentUser);

  // Setup Local State
  const [expanded, setExpanded] = useState(false);
  const [fullDevice, setFullDevice] = useState({
    deviceName: "",
    deviceAmps: "",
    deviceVolts: "",
    deviceWatts: "",
    deviceHours: "",
    deviceRate: "",
  });

  useEffect(() => {
    // getJournals();
  }, []);

  //Updating journals
  const updateJournal = (event) => {
    // console.log("UPDATE JOURNAL");
    // setFullDevice({ ...fullDevice, [event.target.name]: event.target.value });
  };

  const cancelNewJournal = () => {
    props.setDispNewDevice(!props.dispNewDevice);
    props.setDispCurDevice(!props.dispCurDevice);
  };

  //Journal Data Processing
  //Requesting -  Create new journal on backend
  const createJournal = async () => {
    console.log("Submit new device to backend");
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     journalNameField: fullDevice.jName,
    //     journalDescField: fullDevice.jDesc,
    //     journalRoomType: fullDevice.roomType,
    //     journalWaterType: fullDevice.waterType,
    //     journalVegLight: fullDevice.vegLight,
    //     journalFlowLight: fullDevice.flowLight,
    //     journalGrowMedium: soilTypeState,
    //     journalVegWatt: fullDevice.vegWatt,
    //     journalFlowerWatt: fullDevice.flowerWatt,
    //     journalUsername: fullDevice.username,
    //   }),
    // };
    // fetch("http://localhost:4000/journal/createJournal", requestOptions)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
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

  const updateState = (event) => {
    setFullDevice({
      ...fullDevice,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ border: "0px solid", padding: "0" }}>
        <Grid container direction="column" style={{ width: "100%" }}>
          <Grid item className={classes.typogGrid}>
            <Typography variant="h6" style={{fontWeight: "normal", paddingLeft: "0.5em"}}>Add New Device</Typography>
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <InputCust
              id={"newDeviceName"}
              label={"Device Name"}
              name={"deviceName"}
              helperText={""}
              inputWidth={"96%"}
              value={fullDevice.deviceName}
              curState={fullDevice}
              setCurState={setFullDevice}
              onChange={updateState}
              type={"string"}
            />
          </Grid>
          <Grid item container style={{ width: "100%" }}>
            <Grid item xs={6}>
              <InputCust
                id={"newDeviceAmps"}
                label={"Device Amperage"}
                name={"deviceAmps"}
                helperText={""}
                inputWidth={"96%"}
                value={fullDevice.deviceAmps}
                curState={fullDevice}
                setCurState={setFullDevice}
                onChange={updateState}
                type={"number"}
              />
            </Grid>

            <Grid item xs={6}>
              <InputCust
                id={"newDeviceVolt"}
                label={"Device Voltage"}
                name={"deviceVolts"}
                helperText={""}
                inputWidth={"96%"}
                value={fullDevice.deviceVolts}
                curState={fullDevice}
                setCurState={setFullDevice}
                onChange={updateState}
                type={"number"}
              />
            </Grid>

            <Grid item xs={6}>
              <InputCust
                id={"newDeviceWatts"}
                label={"Device Wattage"}
                name={"deviceWatts"}
                helperText={""}
                inputWidth={"96%"}
                value={fullDevice.deviceWatts}
                curState={fullDevice}
                setCurState={setFullDevice}
                onChange={updateState}
                type={"number"}
              />
            </Grid>

            <Grid item xs={6}>
              <InputCust
                id={"newDeviceHours"}
                label={"Device Hours On"}
                name={"deviceHours"}
                helperText={""}
                inputWidth={"96%"}
                value={fullDevice.deviceHours}
                curState={fullDevice}
                setCurState={setFullDevice}
                onChange={updateState}
                type={"number"}
              />
            </Grid>
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <InputCust
              id={"newDeviceRate"}
              label={"Rand Per Kwh"}
              name={"deviceRate"}
              helperText={""}
              inputWidth={"96%"}
              value={fullDevice.deviceRate}
              curState={fullDevice}
              setCurState={setFullDevice}
              onChange={updateState}
              type={"number"}
              min="1"
              max="24"
              // step="any"
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
                  fullDevice.deviceName === "" ||
                  fullDevice.deviceAmps === "" ||
                  fullDevice.deviceVolts === "" ||
                  fullDevice.deviceWatts === "" ||
                  fullDevice.deviceHours === "" ||
                  fullDevice.flowdeviceRateLight === ""
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
