import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
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


  return (
    <FormControl className={classes.formControl} style={{ width: "95%" }}>
      <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select
        labelId={props.labelId}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        style={{ width: props.inputWidth }}
        name={props.name}
      >
        {props.menuArr.map((item, i) => {
          return (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
