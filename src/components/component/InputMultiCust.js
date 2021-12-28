import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function ValidationTextMultiFields(props) {
  const classes = useStyles();

  const updateState = (event) => {
    props.setCurState({
      ...props.curState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{ width: props.inputWidth}}>
      <div>
        <TextField
          //   error
          id={props.id}
          label={props.label}
          helperText={props.helperText}
          multiline
          rows={3}
          onChange={updateState}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          
        />
      </div>
    </form>
  );
}
