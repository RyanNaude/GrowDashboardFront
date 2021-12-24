import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Config from "../../json/select.json";

import InputLabelCust from "./InputLabelCust";
import SelectCust from "./SelectCust";

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
  // const [age, setAge] = React.useState("");

  const cm = new Date();
  const currentMonth = Config.monthSet[cm.getMonth()];
  console.log(currentMonth);

  const handleChange = (event) => {
    console.log("Change man!!");
  };

  const handleDateChange = () => {
    console.log("More Change!");
  };

  return (
    <FormControl
      className={classes.formControl}
      style={{ width: props.inputWidth }}
    >
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Select Date"
        format="yyyy/MM/dd"
        // value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </FormControl>
  );
}
