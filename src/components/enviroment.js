import React, { useState } from "react";
import clsx from "clsx";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//Component Import
import defaultGreen from "../assets/images.jfif";
import Unsigned from "./ui/unsigned";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginLeft: "5em",
    width: "95%",
  },
  mainPageSub: {
    border: "1px solid black",
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
    marginTop: "1.5em",
  },
  journalDesc: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {
    marginTop: "1.5em",
  },
}));

export default function Enviroment(props) {
  const classes = useStyles();

  //Setup Local State
  const [expanded, setExpanded] = useState(false);
  const [journalName, setJournalName] = useState("");
  const [journalDesc, setJournalDesc] = useState("");
  // const [activeJournals, setActiveJournals] = useState([]);

  //Get Global State
  const userLoggedIn = useSelector(selectCurrentUser);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.mainPageStyle}
      style={{
        marginLeft: "0.5em",
        marginRight: "0.5em",
        marginTop: "6em",
      }}
    >
      {/* {userLoggedIn ? ( */}
      <Card className={classes.root}>
        <Grid container>
          <Grid item style={{ width: "80%" }}>
            <CardHeader title="Setup Enviroment" subheader="" />
          </Grid>
          <Grid item style={{ width: "20%" }}>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
        <CardMedia
          className={classes.media}
          image={defaultGreen}
          title="Paella dish"
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container>
              <Grid item style={{ width: "100%" }}>
                <TextField
                  required
                  id="standard-required"
                  label="Enviroment Name"
                  onChange={(event) => setJournalName(event.target.value)}
                  value={journalName}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>
                <Typography className={classes.journalDescTitle}>
                  Enviroment Description
                </Typography>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={journalDesc}
                  className={classes.journalDesc}
                  multiline
                  fullWidth
                  rows={2}
                  id="message"
                  onChange={(event) => setJournalDesc(event.target.value)}
                />
              </Grid>
              <Grid item style={{ width: "100%", marginTop: "1em" }}>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "100%" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Room Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ width: "100%" }}
                    // value={age}
                    // onChange={handleChange}
                  >
                    <MenuItem value={"Indoor"}>Indoor</MenuItem>
                    <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
                    <MenuItem value={"Greenhouse"}>Greenhouse</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item style={{ width: "100%", marginTop: "1em" }}>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "100%" }}
                >
                  <InputLabel id="vegLight">Veg. Light</InputLabel>
                  <Select
                    labelId="vegLight-label"
                    id="vegLight"
                    style={{ width: "100%" }}
                    // value={age}
                    // onChange={handleChange}
                  >
                    <MenuItem value={"LED"}>LED</MenuItem>
                    <MenuItem value={"HPS"}>HPS</MenuItem>
                    <MenuItem value={"HID"}>HID</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                container
                direction="row"
                className={classes.submitGrid}
                justifyContent="center"
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.journalButton}
                    // onClick={createJournal}
                  >
                    Create
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.journalButton}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      {/* ) : (
        <div>
          <Unsigned />
        </div>
      )} */}
    </Grid>
  );
}
