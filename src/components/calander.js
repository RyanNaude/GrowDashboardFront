import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unsigned from "./ui/unsigned";
import CalanderMonth from "./ui/calenderMonth";
import CalanderEntry from "./ui/calanderEntry";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6.5em",
  },
  mainPageSub: {
    border: "1px solid black",
  },
}));

const titleArray = ["Diam", "Arcu", "Purus", "Lectus"];
const timeArray = [
  "17:00 | 18:00",
  "13:00 | 15:00",
  "08:00 | 13:00",
  "11:00 | 17:00",
];
const dateArray = [
  "1 JAN | 2021",
  "4 JAN | 2021",
  "13 JAN | 2021",
  "22 JAN | 2021",
];
const bodyArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Pretium fusce id velit ut tortor pretium. Mauris rhoncus aenean vel elit. Penatibus et magnis dis parturient montes nascetur ridiculus mus.",
  "Quam pellentesque nec nam aliquam sem. Pellentesque elit ullamcorper dignissim cras tincidunt.",
  "Sed risus ultricies tristique nulla aliquet enim tortor at. Etiam tempor orci eu lobortis elementum nibh.",
];

export default function Calander(props) {
  const classes = useStyles();
  const userLoggedIn = useSelector(selectCurrentUser);

  return (
    <Grid container direction="column" className={classes.mainPageStyle}>
      {/* {userLoggedIn ? ( */}
      {/* <Grid item>
        <Typography variant="h5">Calander</Typography>
      </Grid> */}
      <Grid item>
        <CalanderMonth />
      </Grid>
      <Grid item style={{ marginTop: "0.5em" }}>
        {timeArray.map(
          (time, index) => (
            console.log(dateArray[index]),
            (
              <CalanderEntry
                time={time}
                date={dateArray[index]}
                title={titleArray[index]}
                body={bodyArray[index]}
              />
            )
          )
        )}
      </Grid>
      {/* ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )} */}
    </Grid>
  );
}
