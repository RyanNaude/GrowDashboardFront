import React, { useEffect } from "react";
import { useState } from "react";

//Material UI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";
import { selectDispNewJournal } from "../redux/siteNav/siteNav.selector";

//Component import
import Unsigned from "./ui/unsigned";
import NewJournal from "./ui/newJournal";
import CurrentJournals from "./ui/currentJournals";
import WeatherSummary from "./ui/weatherSummary";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
    width: "100%",
    border: "0px solid",
  },
  mainPageSub: {
    border: "0px solid black",
  },
  root: {
    maxWidth: 345,
    backgroundColor: "#ebffdb",
  },
  media: {
    height: 0,
    paddingTop: "36.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  journalDescTitle: {
    // marginTop: "1.5em",
  },
  journalDesc: {
    border: `0px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {
    marginTop: "1.5em",
  },
  curJournals: { marginTop: "1em", width: "100%" },
  curJournalsSpace: {
    width: "100%",
  },
  curJournalsSpace80: {
    width: "80%",
    marginLeft: "4em",
  },
  curJournalSubheader: {
    fontWeight: "bold",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  //Get Global State
  const tokenState = useSelector(selectTokenState);

  //Setup Local State
  const [expanded, setExpanded] = useState(false);
  const [activeJournals, setActiveJournals] = useState([]);
  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
  });

  //Get navigation state
  //Get Global State
  const dispNewJournal = useSelector(selectDispNewJournal);

  //Requesting - All journals from backend
  const getJournals = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        journalNameField: fullJournal.jName,
        journalDescField: fullJournal.jDesc,
        journalRoomType: fullJournal.roomType,
        journalWaterType: fullJournal.waterType,
        journalVegLight: fullJournal.vegLight,
        journalFlowLight: fullJournal.flowLight,
        journalGrowMedium: fullJournal.growMedium,
      }),
    };
    fetch("http://localhost:4000/journalGet", requestOptions)
      .then((response) => response.json())
      .then((data) => setActiveJournals(data))
      .catch((error) => console.log(error));
  };

  //Displaying journals returned from backend
  // function displayJournals(activeJournals) {
  //   return (
  //     <Grid
  //       item
  //       xs={3}
  //       className={classes.curJournals}
  //       key={activeJournals._id}
  //     >
  //       <Card className={classes.root}>
  //         <Grid item style={{ width: "70%", marginTop: "100em" }}>
  //           <CardHeader title={`${activeJournals.name}`} subheader="" />
  //         </Grid>
  //         <CardContent>
  //           <Grid item container direction="column">
  //             <Grid item container style={{ width: "100%" }}>
  //               <Grid
  //                 item
  //                 container
  //                 style={{ width: "100%" }}
  //                 direction="column"
  //               >
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Description:
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.description}</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid item container style={{ width: "100%" }}>
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Room Type:
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.roomType}</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid item container style={{ width: "100%" }}>
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Water Type:{" "}
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.waterType}</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid item container style={{ width: "100%" }}>
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Veg. Light:{" "}
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.vegLight}</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid item container style={{ width: "100%" }}>
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Flower Light:{" "}
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.flowLight}</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid item container style={{ width: "100%" }}>
  //                 <Grid className={classes.curJournalsSpace}>
  //                   <Typography className={classes.curJournalSubheader}>
  //                     Grow Medium:{" "}
  //                   </Typography>
  //                 </Grid>
  //                 <Grid className={classes.curJournalsSpace80}>
  //                   <Typography>{activeJournals.growMedium}</Typography>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </CardContent>
  //       </Card>
  //     </Grid>
  //   );
  // }

  //useEffect - Getting journals loaded on database
  useEffect(() => {
    getJournals();
  }, []);

  return (
    <Grid container direction="row" className={classes.mainPageStyle}>
      {tokenState ? (
        <Grid item container style={{ border: "0px solid" }}>
          <Grid item style={{ border: "0px solid", width: "100%" }}>
            {dispNewJournal ? null : <CurrentJournals />}
            {dispNewJournal ? <NewJournal /> : null}
            {dispNewJournal ? null : <WeatherSummary />}
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )}
    </Grid>
  );
}
