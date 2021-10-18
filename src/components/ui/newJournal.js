import React, { useEffect } from "react";
import { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/chip";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//Redux imports
import { useSelector, useDispatch } from "react-redux";
import { displayNewJournal } from "../../redux/siteNav/siteNav.actions";
import { selectDispNewJournal } from "../../redux/siteNav/siteNav.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
    width: "100%",
    border: "0px solid",
  },
  journalInput: {
    margin: "0",
    marginTop: "3px",
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
  avatar: {},
  journalDescTitle: {
    paddingBottom: "0.5em",
    color: "#000",
    opacity: "0.65",
  },
  journalDesc: {
    width: "95%",
    border: `0px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.light,
    paddingLeft: "3px",
    paddingRight: "3px",
  },
  journalButton: {
    margin: "1em",
  },
  submitGrid: {},
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
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
    backgroundColor: theme.palette.primary.light,
    fontSize: "12pt",
  },
}));

export default function NewJournal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  //Get Global State
  const dispNewJournal = useSelector(selectDispNewJournal);
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  //Setup Local State
  const [expanded, setExpanded] = useState(false);
  const [soilTypeState, setSoilTypeState] = useState([]);
  const [fullJournal, setFullJournal] = useState({
    jName: "",
    jDesc: "",
    roomType: "",
    waterType: "",
    vegLight: "",
    flowLight: "",
    growMedium: "",
    vegWatt: "",
    flowerWatt: "",
    username: currentUser,
  });

  useEffect(() => {
    // getJournals();
  }, []);

  //Updating journals
  const updateJournal = (event) => {
    setFullJournal({ ...fullJournal, [event.target.name]: event.target.value });
  };

  const cancelNewJournal = () => {
    setExpanded(false);

    console.log("togNewJournalDisplay");
    dispatch(displayNewJournal(!dispNewJournal));
  };

  //Journal Data Processing
  //Requesting -  Create new journal on backend
  const createJournal = async () => {
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
        journalGrowMedium: soilTypeState,
        journalVegWatt: fullJournal.vegWatt,
        journalFlowerWatt: fullJournal.flowerWatt,
        journalUsername: fullJournal.username,
      }),
    };
    fetch("http://localhost:4000/createJournal", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const soilType = [
    "Soil",
    "Perlite",
    "Vermiculite",
    "Expanded Clay",
    "Coco Coir",
    "Mineral Wood",
    "Other",
  ];

  const handleChangeMultiple = (event) => {
    // const { options } = event.target;
    // console.log(event.target);
    // const value = [];
    // for (let i = 0, l = options.length; i < l; i += 1) {
    //   if (options[i].selected) {
    //     value.push(options[i].value);
    //   }
    // }
    // setSoilTypeState(value);
    setSoilTypeState(event.target.value);
  };

  return (
    <Card className={classes.root}>
      {/* <Grid container style={{ border: "0px solid" }} alignItems="center">
        <Grid item style={{ width: "80%" }}>
          <CardHeader
            title="New Journal"
            subheader=""
            titleTypographyProps={{
              variant: "h6",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item style={{ width: "20%" }}>
        </Grid>
      </Grid> */}
      {/* <Collapse in={"true"} timeout="auto" unmountOnExit style={{border: "1px solid"}}> */}
      <CardContent style={{ border: "0px solid", padding: "0" }}>
        <Grid container direction="column" style={{ width: "100%" }}>
          <Grid item style={{ width: "100%" }}>
            <TextField
              required
              id="standard-required"
              label="New Journal Name"
              onChange={updateJournal}
              name="jName"
              value={fullJournal.jName}
              fullWidth
              className={classes.journalInput}
              margin="dense"
            />
          </Grid>

          <Grid item style={{ width: "100%", marginTop: "1em" }}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "100%" }}
                name="roomType"
                onChange={updateJournal}
                value={fullJournal.roomType}
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
              <InputLabel id="demo-simple-select-label">
                Watering Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "100%" }}
                name="waterType"
                onChange={updateJournal}
                value={fullJournal.waterType}
              >
                <MenuItem value={"Manual"}>Manual</MenuItem>
                <MenuItem value={"Drip"}>Drip</MenuItem>
                <MenuItem value={"Hydroponic"}>Hydroponic</MenuItem>
                <MenuItem value={"Aeroponic"}>Aeroponic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item container style={{ width: "100%", marginTop: "1em" }}>
            <Grid item style={{ width: "50%" }}>
              <TextField
                required
                type="number"
                id="standard-required"
                label="Wattage"
                onChange={updateJournal}
                name="vegWatt"
                value={fullJournal.vegWatt}
                fullWidth
                className={classes.journalInput}
                margin="dense"
              />
            </Grid>
            <Grid item style={{ width: "50%" }}>
              <FormControl
                className={classes.formControl}
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Veg. Light
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ width: "100%" }}
                  name="vegLight"
                  onChange={updateJournal}
                  value={fullJournal.vegLight}
                >
                  <MenuItem value={"LED"}>LED</MenuItem>
                  <MenuItem value={"HPS"}>HPS</MenuItem>
                  <MenuItem value={"HID"}>HID</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container style={{ width: "100%", marginTop: "1em" }}>
            <Grid item style={{ width: "50%" }}>
              <TextField
                required
                type="number"
                id="standard-required"
                label="Wattage"
                onChange={updateJournal}
                name="flowerWatt"
                value={fullJournal.flowerWatt}
                fullWidth
                className={classes.journalInput}
                margin="dense"
              />
            </Grid>
            <Grid item style={{ width: "50%" }}>
              <FormControl
                className={classes.formControl}
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Flower. Light
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ width: "100%" }}
                  name="flowLight"
                  onChange={updateJournal}
                  value={fullJournal.flowLight}
                >
                  <MenuItem value={"LED"}>LED</MenuItem>
                  <MenuItem value={"HPS"}>HPS</MenuItem>
                  <MenuItem value={"HID"}>HID</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%", marginTop: "1em" }}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="soilTypeLabel">Grow Medium</InputLabel>
              <Select
                labelId="soilTypeLabel"
                id="mutipleChip"
                multiple
                value={soilTypeState}
                onChange={handleChangeMultiple}
                input={<Input id="selectMultipleChip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {soilTypeState.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {soilType.map((soil) => (
                  <MenuItem
                    key={soil}
                    value={soil}
                    // style={getStyles(name, personName, theme)}
                  >
                    {soil}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="demo-simple-select-label">Grow Medium</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "100%" }}
                name="growMedium"
                onChange={updateJournal}
                value={fullJournal.growMedium}
              >
                <MenuItem value={"Soil"}>Soil</MenuItem>
                <MenuItem value={"Perlite"}>Perlite</MenuItem>
                <MenuItem value={"Vermiculite"}>Vermiculite</MenuItem>
                <MenuItem value={"Expanded Clay"}>Expanded Clay</MenuItem>
                <MenuItem value={"Coco Coir"}>Coco Coir</MenuItem>
                <MenuItem value={"Mineral Wood"}>Mineral Wood</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl> */}
          </Grid>
          <br />
          <Grid item style={{ width: "100%" }}>
            <Typography className={classes.journalDescTitle}>
              Journal Description
            </Typography>
            <Grid item container justifyContent="center">
              <TextField
                InputProps={{ disableUnderline: true }}
                value={fullJournal.jDesc}
                className={classes.journalDesc}
                multiline
                fullWidth
                rows={3}
                name="jDesc"
                id="message"
                onChange={updateJournal}
                placeholder="Short description of journal..."
              />
            </Grid>
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
                onClick={createJournal}
              >
                Create
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className={classes.journalButton}
                onClick={cancelNewJournal}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
