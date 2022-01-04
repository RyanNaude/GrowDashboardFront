import React from "react";
import { useState } from "react";
// import Config from "../../../json/select.json";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

//Custom component import
import ButtonCust from "../../component/ButtonCust";
import InputCust from "../../component/InputCust";
import SelectCust from "../../component/SelectCust";
// import CostOFElec from "./costOfElec";

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
    width: "100%",
  },
  typogGrid: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function NewDevice(props) {
  const classes = useStyles();

  // Setup Local State
  const [fullDevice, setFullDevice] = useState({
    deviceName: "",
    deviceAmps: "",
    deviceVolts: "",
    deviceWatts: "",
    deviceHours: "",
    deviceRate: "",
    journalName: "",
  });

  const [deviceConf, setDeviceConf] = useState(false);

  //Cancel Button Action
  const cancelNewJournal = () => {
    props.setDispNewDevice(!props.dispNewDevice);
    props.setDispCurDevice(!props.dispCurDevice);
  };

  //Journal Data Processing
  //Requesting -  Create new device on backend
  const addDevice = async () => {
    console.log("Test");
    console.log(props.idSelected);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        deviceName: fullDevice.deviceName,
        deviceAmps: fullDevice.deviceAmps,
        deviceVolts: fullDevice.deviceVolts,
        deviceWatts: fullDevice.deviceWatts,
        deviceHours: fullDevice.deviceHours,
        deviceRate: fullDevice.deviceRate,
        journalId: props.idSelected,
      }),
    };
    fetch("http://localhost:4000/costmanagement/addDevice", requestOptions)
      .then((response) => response.json())
      .then(() => {
        setFullDevice({
          deviceName: "",
          deviceAmps: "",
          deviceVolts: "",
          deviceWatts: "",
          deviceHours: "",
          deviceRate: "",
          journalName: "",
        });
        setDeviceConf(!deviceConf);
      })
      .catch((error) => console.log(error));
  };

  const updateState = (event) => {
    setFullDevice({
      ...fullDevice,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "journalName") {
      console.log("Change Journal Selection");
      for (let index = 0; index < props.journalOptions.length; index++) {
        const element = props.journalOptions[index];
        if (element === event.target.value) {
          props.setIdSelected(index);
        }
      }
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ border: "0px solid", padding: "0" }}>
        <Grid container direction="column" style={{ width: "100%" }}>
          <Grid item className={classes.typogGrid}>
            <Typography
              variant="h6"
              style={{ fontWeight: "normal", paddingLeft: "0.5em" }}
            >
              Add New Device
            </Typography>
          </Grid>

          {deviceConf ? (
            <Grid item style={{ width: "100%" }}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "normal",
                  paddingLeft: "0.8em",
                  marginTop: "0.5em",
                }}
              >
                Device Added
              </Typography>
            </Grid>
          ) : null}

          <Grid item style={{ width: "100%" }}>
            <SelectCust
              name="journalName"
              label="Select Journal"
              labelId="journalName"
              inputWidth="100%"
              menuArr={props.journalOptions}
              curState={fullDevice}
              setCurState={setFullDevice}
              value={fullDevice.journalName}
              onChange={updateState}
            />
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
                onClick={addDevice}
                disabled={
                  fullDevice.deviceName === "" ||
                  fullDevice.deviceAmps === "" ||
                  fullDevice.deviceVolts === "" ||
                  fullDevice.deviceWatts === "" ||
                  fullDevice.deviceHours === "" ||
                  fullDevice.flowdeviceRateLight === "" ||
                  fullDevice.deviceRate === "" ||
                  fullDevice.journalName === ""
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
