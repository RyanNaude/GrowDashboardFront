import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      style={{ width: props.inputWidth }}
    >
      <KeyboardDatePicker
        margin="normal"
        name="entryDate"
        id="date-picker-dialog"
        label="Select Date"
        format="yyyy/MM/dd"
        onChange={props.onChange}
        value={props.newEntryFields.entryDate}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </FormControl>
  );
}
