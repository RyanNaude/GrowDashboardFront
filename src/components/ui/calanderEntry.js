import React, { useEffect } from "react";
// import { useState } from "react";
// import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  appointGrid: {
    width: "100%",
  },
  entryGrid: { marginTop: "0.5em" },
  deleteEntryGrid: { width: "10%" },
  timeEntryGrid: { width: "60%" },
  dateEntryGrid: { width: "30%" },
  titleTyp: { marginRight: "0.5em" },
  dateTyp: { marginRight: "0.5em" },
  paperStyle: {
    backgroundColor: theme.palette.secondary.main,
    marginBottom: "0.5em",
  },
}));

const time = "17:00 | 18:00";
const date = "1 JAN | 2021";

export default function CalanderEntry(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center">
      <Grid item className={classes.appointGrid}>
        <Paper variant="outlined" className={classes.paperStyle}>
          <Grid container>
            <Grid item container justifyContent="flex-end">
              <Typography variant="h6" className={classes.titleTyp}>
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{props.body}</Typography>
            </Grid>
            <Grid item container className={classes.entryGrid}>
              <Grid
                item
                container
                className={classes.deleteEntryGrid}
                justifyContent="center"
              >
                <DeleteIcon />
              </Grid>
              <Grid
                item
                container
                className={classes.timeEntryGrid}
                justifyContent="flex-end"
              >
                <Typography variant="body2">{props.time}</Typography>
              </Grid>
              <Grid
                item
                container
                className={classes.dateEntryGrid}
                justifyContent="flex-end"
              >
                <Typography variant="body2" className={classes.dateTyp}>
                  {props.date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
