import React from "react";

import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCust(props) {
  const classes = useStyles();

  const handleChange = () => {
    console.log("Change... Its happening");
  };

  return (
    <FormControl className={classes.formControl}>
    <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select
        labelId={props.labelId}
        id={props.id}
        value={props.value}
        onChange={handleChange}
      >
        {props.menuArr.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
