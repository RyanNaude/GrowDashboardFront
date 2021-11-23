import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Config from "../../json/select.json";

import InputLabelCust from "./InputLabelCust";
import SelectCust from "./SelectCust";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DatePickers() {
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
    <FormControl className={classes.formControl}>
      <SelectCust
        labelId={"demo-simple-select-label"}
        id={"demo-simple-select"}
        value={currentMonth}
        menuArr={Config.monthSet}
        label={"Start"}
      />
    </FormControl>
  );
}
