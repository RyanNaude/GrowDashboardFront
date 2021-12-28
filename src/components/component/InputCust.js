import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
}));

export default function ValidationTextFields(props) {
  const classes = useStyles();

  const updateState = (event) => {
    props.setCurState({
      ...props.curState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //   error
          id={props.id}
          label={props.label}
          helperText={props.helperText}
          style={{ width: props.inputWidth }}
          onChange={updateState}
          name={props.name}
          type={props.type}
          InputLabelProps={props.InputLabelProps}
          inputProps={props.inputProps}
          value={props.value}
          defaultValue={props.defaultValue}
          margin="dense"
        />
      </div>
    </form>
  );
}
