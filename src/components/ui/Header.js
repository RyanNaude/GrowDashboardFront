import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Custom Components
import SignUp from "./signup.component";
import SignIn from "./signin.component";

//Material UI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

//Import Icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SettingsIcon from "@material-ui/icons/Settings";
import { useCookies } from "react-cookie";

//Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUser,
  selectSignInState,
  selectSignUpState,
} from "../../redux/user/user.selector";
import {
  setCurrentUser,
  setSignInState,
  setSignUpState,
} from "../../redux/user/user.actions";

const drawerWidth = 240;

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  listItemStyle: {
    display: "flex",
    justifyContent: "center",
  },
  iconBar: {
    backgroundColor: "#b0fa73",
  },
  listItemIcon: { display: "flex", justifyContent: "center" },
  iconItem: {
    align: "center",
  },
  title: {
    textDecoration: "none",
    color: theme.palette.secondary,
  },
  loginButGrid: {
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  iconStyle: {
    color: "primary",
  },
  signUpBut: {
    fontSize: "8pt",
  },
  signOutBut: {
    fontSize: "8pt",
  },
  loginBut: {
    fontSize: "8pt",
  },
}));

//Appbar elevation scroll, Make heaser look integrated.
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  //Setup Local State
  const [value, setValue] = useState(0);
  const [currentLoggedIn, setCurrentLoggedIn] = useState("default");
  const [cookies, setCookies] = useCookies();

  //Get Global State
  const userLoggedIn = useSelector(selectCurrentUser);
  const signInCur = useSelector(selectSignInState);
  const signUpCur = useSelector(selectSignUpState);

  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  const changeSignUpState = () => {
    dispatch(setSignUpState(!signUpCur));
    dispatch(setSignInState(false));
  };

  const changeSignInState = () => {
    dispatch(setSignInState(!signInCur));
    dispatch(setSignUpState(false));
  };

  const logoutUser = () => {
    dispatch(setCurrentUser(null));
    dispatch(setSignInState(false));
    dispatch(setSignUpState(false));
  };

  const userPageSelect = (index) => {
    setValue(index);
    dispatch(setSignInState(false));
    dispatch(setSignUpState(false));
  };

  const menu = [
    "Home",
    "Env. Breakdown",
    "Calander",
    "Photo Library",
    "Cost Management",
    "Env. Settings",
  ];

  const links = [
    "/",
    "/enviroment",
    "/calander",
    "/gallery",
    "/costmanagement",
    "/enviromentsettings",
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/enviroment" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/calander" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/gallery" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/costmanagement" && value !== 4) {
      setValue(4);
    } else if (
      window.location.pathname === "/enviromentsettings" &&
      value !== 5
    ) {
      setValue(5);
    }
  }, [value]);

  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Grid container direction="row">
              <Grid item style={{ width: "50%" }}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  component={Link}
                  to={"/"}
                >
                  Dashboard Inc.
                </Typography>
              </Grid>
              {userLoggedIn === null ? (
                <Grid
                  item
                  container
                  style={{ width: "50%" }}
                  justifyContent="flex-end"
                >
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={changeSignInState}
                      style={{ marginRight: "0em" }}
                      className={classes.loginBut}
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={changeSignUpState}
                      color="secondary"
                      className={classes.signUpBut}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  item
                  container
                  style={{ width: "50%" }}
                  justifyContent="flex-end"
                >
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={logoutUser}
                      className={classes.signOutBut}
                    >
                      Sign Out
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Toolbar>
          <div>
            <Grid container className={classes.iconBar}>
              {/* <Grid item container direction="row" justifyContent="center"> */}
              {menu.map((text, index) => (
                <Grid item xs={2}>
                  <ListItem
                    button
                    key={text}
                    component={Link}
                    to={links[index]}
                    onClick={userPageSelect}
                    selected={index === value ? true : false}
                    className={classes.listItemStyle}
                  >
                    <ListItemIcon className={classes.listItemIcon}>
                      {index === 0 ? (
                        <HomeIcon color="primary" />
                      ) : index === 1 ? (
                        <BubbleChartIcon color="primary" />
                      ) : index === 2 ? (
                        <CalendarTodayIcon color="primary" />
                      ) : index === 3 ? (
                        <PhotoLibraryIcon color="primary" />
                      ) : index === 4 ? (
                        <AttachMoneyIcon color="primary" />
                      ) : index === 5 ? (
                        <SettingsIcon color="primary" />
                      ) : null}
                    </ListItemIcon>
                    {/* <ListItemText primary={text} /> */}
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            {/* </Grid> */}
          </div>
        </AppBar>
      </ElevationScroll>

      {signUpCur ? <SignUp /> : null}
      {signInCur ? (
        <SignIn
          currentLoggedIn={currentLoggedIn}
          setCurrentLoggedIn={setCurrentLoggedIn}
        />
      ) : null}
    </div>
  );
}
