import React, { useState, useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

//Component Import
import CostOFElec from "./ui/costManagementUi/costOfElec";
import NewDevice from "./ui/costManagementUi/newDevice";
import Unsigned from "./ui/unsigned";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6.5em",
    width: "100%",
    border: "0px solid",
    borderRadius: "3pt",
    // backgroundColor: theme.palette.secondary.main,
  },
  mainPageSub: {
    width: "100%",
    marginTop: "0.5em",
  },
  titleGrid: {
    width: "100%",
  },
  typogGrid: { width: "86%" },
  deviceAddIcon: { width: "14%" },
  deviceIcon: {},
}));

export default function CostManagement(props) {
  const classes = useStyles();
  const journalId = [];
  const journalName = [];

  // Setup Local State
  const fullJournal = {
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  };

  const fullDevice = {
    devName: "",
    devAmps: "",
    devVolt: "",
    devHrs: "",
    devRate: "",
    journalId: "",
  };
  const [devices, setDevices] = useState([]);
  const [activeJournals, setActiveJournals] = useState([]);
  const [dispNewDevice, setDispNewDevice] = useState(false);
  const [dispNewDeviceBut, setDispNewDeviceBut] = useState(false);
  const [dispCurDevice, setDispCurDevice] = useState(true);
  const [journalOptions, setJournalOptions] = useState([]);
  const [journalOptionsId, setJournalOptionsId] = useState([]);
  const [idSelected, setIdSelected] = useState(null);

  //Get Global State
  const tokenState = useSelector(selectTokenState);

  const togNewDeviceDisplay = () => {
    setDispNewDeviceBut(!dispNewDeviceBut);
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
      .then((response) => {
        setActiveJournals(response);
        for (let index = 0; index < response.length; index++) {
          journalId.push(response[index]._id);
          journalName.push(response[index].description);
        }
        setJournalOptions(journalName);
        setJournalOptionsId(journalId);
      })
      .catch((error) => console.log(error));
  };

  //Requesting - All devices linked to selected journal
  const getDevices = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        devName: fullDevice.devName,
        devAmps: fullDevice.devAmps,
        devVolt: fullDevice.devVolt,
        devHrs: fullDevice.devHrs,
        devRate: fullDevice.devRate,
        journalId: fullDevice.journalId,
      }),
    };

    fetch("http://localhost:4000/costmanagement/getDevice", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setDevices(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getJournals();
    getDevices();
  }, []);

  return (
    <Grid container direction="column" className={classes.mainPageStyle}>
      {tokenState ? (
        <Grid item container>
          <Grid
            item
            container
            className={classes.titleGrid}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className={classes.typogGrid}>
              <Typography variant="h5">Cost Management</Typography>
            </Grid>
            <Grid
              item
              container
              className={classes.deviceAddIcon}
              justifyContent="flex-end"
            >
              <IconButton
                className={classes.deviceIcon}
                style={{ zIndex: 1 }}
                onClick={() => togNewDeviceDisplay()}
              >
                {!dispNewDeviceBut ? (
                  <AddCircleOutlineIcon />
                ) : (
                  <RemoveCircleOutlineIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>

          {dispCurDevice ? (
            <Grid item className={classes.mainPageSub}>
              <CostOFElec
                dispNewDeviceBut={dispNewDeviceBut}
                setDispNewDeviceBut={setDispNewDeviceBut}
                dispNewDevice={dispNewDevice}
                setDispNewDevice={setDispNewDevice}
                dispCurDevice={dispCurDevice}
                setDispCurDevice={setDispCurDevice}
                devices={devices}
                setDevices={setDevices}
                activeJournals={activeJournals}
              />
            </Grid>
          ) : null}

          {dispNewDevice ? (
            <Grid item className={classes.mainPageSub}>
              <NewDevice
                dispNewDevice={dispNewDevice}
                setDispNewDevice={setDispNewDevice}
                dispCurDevice={dispCurDevice}
                setDispCurDevice={setDispCurDevice}
                journalOptionsId={journalOptionsId}
                journalOptions={journalOptions}
                idSelected={idSelected}
                setIdSelected={setIdSelected}
              />
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )}
    </Grid>
  );
}
