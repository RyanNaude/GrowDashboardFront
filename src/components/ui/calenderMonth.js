import React, { useEffect } from "react";
// import { useState } from "react";
// import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  arrowBack: { marginRight: "10px" },
  arrowForward: { marginLeft: "10px" },
  yearDisplay: { fontWeight: "medium" },
  root: {
    //   border: "3px solid",
    // width: "33%",
    // height: "33%",
  },
  title: {
    fontSize: 14,
  },
}));

const month = "January";
const year = "2021";

export default function CalanderMonth(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {}, []);

  const testMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 20,
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <ArrowBackIosIcon className={classes.arrowBack} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          style={{ width: "50%" }}
        >
          <Grid item>
            <Typography variant="h5">{month}</Typography>{" "}
          </Grid>

          <Grid item>
            <Typography style={{ marginLeft: "5px", marginRight: "5px" }}>
              |
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.yearDisplay}>{year}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon className={classes.arrowForward} />
        </Grid>
      </Grid>
      <Grid item container>
        {testMonth.map((data) => (
          <Grid item style={{width: "15%", margin: "3px"}}>
            <Card className={classes.root} style={{ border: "1px solid" }}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {data}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
