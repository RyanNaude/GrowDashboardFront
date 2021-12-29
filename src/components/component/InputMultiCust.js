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

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ width: props.inputWidth }}
    >
      <div>
        <TextField
          //   error
          id={props.id}
          label={props.label}
          helperText={props.helperText}
          multiline
          rows={3}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </form>
  );
}
