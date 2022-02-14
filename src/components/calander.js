import React, { useEffect, useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//Component Import
import Unsigned from "./ui/unsigned";
import CalanderMonth from "./ui/calanderUi/calenderMonth";
import CalanderEntry from "./ui/calanderUi/calanderEntry";
import CalanderNewEntry from "./ui/calanderUi/calanderNewEntry";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6rem",
    width: "100%",
    border: "0px solid",
  },
  mainPageSub: {
    border: "0px solid black",
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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calander(props) {
  const classes = useStyles();
  //Get Global State
  const tokenState = useSelector(selectTokenState);

  const [newCalEntry, setNewCalEntry] = useState(false);
  const [yearState, setYearState] = useState();
  const [monthState, setMonthState] = useState();

  const d = new Date();
  var monthCnt = d.getMonth();
  var month = months[monthCnt];
  var year = d.getFullYear();

  useEffect(() => {
    setYearState(year);
    setMonthState(month);
  },[]);

  return (
    <div>
      <Grid container direction="column" className={classes.mainPageStyle}>
        {tokenState ? (
          <Grid item container>
           

            <Grid item style={{ marginTop: "0.0em", width: "100%" }}>
              {newCalEntry ? (
                <CalanderNewEntry
                  newCalEntry={newCalEntry}
                  setNewCalEntry={setNewCalEntry}
                />
              ) :  <Grid item>
              <CalanderMonth
                setNewCalEntry={setNewCalEntry}
                newCalEntry={newCalEntry}
                yearState={yearState}
                setYearState={setYearState}
                monthState={monthState}
                setMonthState={setMonthState}
                months={months}
              />
            </Grid>}
            </Grid>
            <Grid item style={{ marginTop: "0.0em" }}>
              {timeArray.map((time, index) => (
                <CalanderEntry
                  key={index}
                  time={time}
                  date={dateArray[index]}
                  title={titleArray[index]}
                  body={bodyArray[index]}
                />
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Unsigned />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
