import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Custom useStyles
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
