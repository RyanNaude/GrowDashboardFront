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
  console.log(props);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          //   error
          id={props.id}
          label={props.label}
          helperText={props.helperText}
          style={{ width: props.inputWidth }}
        />
      </div>
    </form>
  );
}
