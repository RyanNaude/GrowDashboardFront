import React from "react";
import InputLabel from "@material-ui/core/InputLabel";

export default function InputLabelCust(props) {

  return (
    <InputLabel id={props.id}>{props.label}</InputLabel>
  );
}
