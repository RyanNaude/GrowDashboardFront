import React, { useEffect } from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "3em",
    border: "1px solid",
  },
  CheckButton: {
    backgroundColor: theme.palette.secondary.main,
    top: "calc(50% - 20px) !important",
    transition: "40ms",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.6 !important",
    },
    height: "25px",
    width: "100%",
  },
  paperStyle: {
    backgroundColor: "#d6ffb5",
    // border: "1px solid",
    marginTop: "0.5em",
  },
  buttonGrid: {
    width: "50%",
  },
}));

function Item(props) {
  console.log(props);
  return (
    <Paper className={props.classes.paperStyle}>
      <Grid container direction="column">
        <Grid item>
          <h2>{props.item.name}</h2>
        </Grid>
        <Grid item>
          <p>{props.item.description}</p>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item className={props.classes.buttonGrid}>
            <Button className={props.classes.CheckButton}>Select</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function CurrentJournals(props) {
  const classes = useStyles();

  const test = [
    {
      name: "Random Name #1",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello, Hello?",
    },
    {
      name: "Random Name #3",
      description: "Hello World!?",
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  });

  useEffect(() => {}, []);

  return (
    <div>
      <Carousel
        next={(next, active) => console.log(``)}
        prev={(prev, active) => console.log(``)}
      >
        {test.map((item, i) => (
          <Item key={i} item={item} classes={classes} />
        ))}
      </Carousel>
    </div>
  );
}
