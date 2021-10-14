import React, { useEffect } from "react";
// import { useState } from "react";
// import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
// import { Card, Divider } from "@material-ui/core";
// import { CardHeader } from "@material-ui/core";
// import { CardContent } from "@material-ui/core";
// import { CardActions } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import { InputLabel } from "@material-ui/core";
// import { Select } from "@material-ui/core";
// import { MenuItem } from "@material-ui/core";
// import FormControl from "@material-ui/core/FormControl";
// import Collapse from "@material-ui/core/Collapse";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Button } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

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
      <Grid item style={{ display:"flex" }}>
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
