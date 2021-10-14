import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginTop: "1px",
    marginBottom: "1px",
    marginRight: "2px",
    marginLeft: "2px",
  },
}));

export default function GalleryChipGroup(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center">
      <Grid item style={{ display: "flex" }}>
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="elit"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="vitae"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="aliquet"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="turpis"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="volutpat"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label="nunc"
          className={classes.chip}
        />
      </Grid>
    </Grid>
  );
}
