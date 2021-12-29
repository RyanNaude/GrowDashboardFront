import React, { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Component Import
import CostOFElec from "./ui/costOfElec";
import Unsigned from "./ui/unsigned";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import NewDevice from "./ui/newDevice";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6.5em",
    width: "100%",
    border: "0px solid",
    borderRadius: "5pt",
    backgroundColor: theme.palette.secondary.main,
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

  //Local State
  const [dispNewDevice, setDispNewDevice] = useState(false);
  const [dispNewDeviceBut, setDispNewDeviceBut] = useState(false);
  const [dispCurDevice, setDispCurDevice] = useState(true);

  //Get Global State
  const tokenState = useSelector(selectTokenState);

  const togNewDeviceDisplay = () => {
    // setDispCurDevice(!dispCurDevice);
    // setDispNewDevice(!dispNewDevice);
    setDispNewDeviceBut(!dispNewDeviceBut);
  };

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
