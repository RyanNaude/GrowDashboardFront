import React from "react";
import InputLabel from "@material-ui/core/InputLabel";

export default function InputLabelCust(props) {

  return (
    <InputLabel id={props.id} style={{fontSize: "15pt", marginTop: "0.3em"}}>{props.label}</InputLabel>
  );
}
