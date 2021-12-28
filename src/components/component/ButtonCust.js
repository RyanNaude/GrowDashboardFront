import React from "react";

//Material UI Components
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  butStyle: {
    margin: "1em",
  },
}));

export default function ButtonCust(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.butStyle}
        style={{ width: props.buttonWidth }}
        variant={props.variant}
        color={props.color}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.butName}
      </Button>
    </div>
  );
}
