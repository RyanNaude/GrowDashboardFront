import React, { useEffect, useState } from "react";
import Config from "../../../json/select.json";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Custom Component Import
import ButtonCust from "../../component/ButtonCust";
import InputCust from "../../component/InputCust";
import InputMultiCust from "../../component/InputMultiCust";
import DatePick from "../../component/DatePick";
import InputLabelCust from "../../component/InputLabelCust";
import SelectCust from "../../component/SelectCust";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "100%",
    marginBottom: "0.5em",
    marginTop: "0.5em",
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
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#ebffdb",
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

  // const [acceptDisable, setAcceptDisable] = useState(true);
  const [newEntryFields, setNewEntryFields] = useState({
    entryTitle: "",
    entryDate: "2021/12/29",
    entryStart: "",
    entryEnd: "",
    entryType: "None",
    entryNotes: "",
  });

  const submitCalEntry = () => {
    console.log("This is a test");
    console.log(
      "Submit data to backend here for new calander entry. All field have data but not validated"
    );
  };

  const cancelCalEntry = () => {
    props.setNewCalEntry(!props.newCalEntry);
  };

  const updateState = (event) => {
    setNewEntryFields({
      ...newEntryFields,
      [event.target.name]: event.target.value,
    });
  };

  const updateDateState = (event) => {
    setNewEntryFields({
      ...newEntryFields,
      entryDate: event.toISOString(),
    });
  };

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
                name="entryTitle"
                value={newEntryFields.entryTitle}
                curState={newEntryFields}
                setCurState={setNewEntryFields}
                onChange={updateState}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <DatePick
                name={"entryDate"}
                inputWidth={"95%"}
                newEntryFields={newEntryFields}
                setNewEntryFields={setNewEntryFields}
                onChange={updateDateState}
              />
            </Grid>

            <Grid
              item
              container
              direction="row"
              style={{ width: "100%", paddingLeft: "0.5em" }}
            >
              <InputLabelCust label={"Start"} inputWidth="15%" />
              <InputCust
                id="time"
                type="time"
                name="entryStart"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                style={{ width: "30%" }}
                curState={newEntryFields}
                setCurState={setNewEntryFields}
                onChange={updateState}
              />

              <InputLabelCust label={"End"} inputWidth="15%" />
              <InputCust
                id="time"
                type="time"
                name="entryEnd"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                style={{ width: "30%" }}
                curState={newEntryFields}
                setCurState={setNewEntryFields}
                onChange={updateState}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <SelectCust
                name="entryType"
                label="Entry Type"
                labelId="entryType"
                inputWidth="100%"
                menuArr={Config.calEntryType}
                curState={newEntryFields}
                setCurState={setNewEntryFields}
                value={newEntryFields.entryType}
                onChange={updateState}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <InputMultiCust
                name="entryNotes"
                inputWidth="95%"
                id={"entryNote"}
                label={"Entry Notes"}
                helperText={""}
                newEntryFields={newEntryFields}
                setNewEntryFields={setNewEntryFields}
                value={newEntryFields.entryNotes}
                onChange={updateState}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="space-around"
              style={{ width: "100%" }}
            >
              <ButtonCust
                butName="Accept"
                buttonWidth="75%"
                variant="contained"
                color="primary"
                onClick={submitCalEntry}
                disabled={
                  newEntryFields.entryTitle === "" ||
                  newEntryFields.entryDate === "" ||
                  newEntryFields.entryStart === "" ||
                  newEntryFields.entryEnd === "" ||
                  newEntryFields.entryType === "" ||
                  newEntryFields.entryType === "None" ||
                  newEntryFields.entryNotes === ""
                }
              />
              <ButtonCust
                butName="Cancel"
                buttonWidth="75%"
                variant="contained"
                color="secondary"
                onClick={cancelCalEntry}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
