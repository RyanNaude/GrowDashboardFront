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

export default function DayPicker() {
  const classes = useStyles();

  const md = new Date();
  const curMonth = md.getMonth() + 1;
  const curYear = md.getFullYear();

  const monthDay = new Date(curYear, curMonth, 0).getDate();
  const monthDayArr = [];
  for (let index = 0; index < monthDay; index++) {
    monthDayArr.push(index + 1);
  }
  console.log(monthDay);
  console.log(monthDayArr);

  const handleChange = () => {
    console.log("Test");
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabelCust id={"demo-simple-select-label"} label={""} />
      <SelectCust
        labelId={"demo-simple-select-label"}
        id={"demo-simple-select"}
        menuArr={monthDayArr}
        label={""}
      />
    </FormControl>
  );
}
