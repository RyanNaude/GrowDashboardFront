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
import DayPick from "../component/DayPick";

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
            <Grid item style={{width: "100%"}}>
              <InputCust id={"standard-error-helper-text"} label={"Title"} helperText={""}/>
            </Grid>
            <Grid item style={{width: "100%"}}>
              <DatePick /><DayPick/>
            </Grid>
            
            <Grid item>
              <TextField
                id="time"
                // label="Alarm clock"
                type="time"
                defaultValue="04:20"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
            
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
