import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//Custom Component Import
import InputCust from "../component/InputCust";
import DatePick from "../component/DatePick";
import InputLabelCust from "../component/InputLabelCust";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "100%",
  },
  appointGrid: {
    width: "100%",
  },
  entryGrid: { marginTop: "0.5em" },
  deleteEntryGrid: { width: "10%" },
  timeEntryGrid: { width: "60%" },
  dateEntryGrid: { width: "30%" },
  titleTyp: { marginRight: "0.5em" },
  dateTyp: { marginRight: "0.5em" },
  paperStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CalanderNewEntry(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center" className={classes.mainGrid}>
      <Grid item className={classes.appointGrid}>
        <Paper variant="outlined" className={classes.paperStyle}>
          <Grid container>
            <Grid item container justifyContent="flex-end">
              <Typography variant="h6" className={classes.titleTyp}>
                New Calander Entry
              </Typography>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <InputCust
                id={"newCalTitle"}
                label={"Entry Title"}
                helperText={""}
                inputWidth={"96%"}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <DatePick inputWidth={"95%"} />
            </Grid>

            <Grid
              item
              container
              direction="row"
              style={{ width: "100%", paddingLeft: "0.5em" }}
            >
              <InputLabelCust label={"Start"} />
              <TextField
                id="time"
                type="time"
                defaultValue="00:00"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                style={{ width: "30%" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
