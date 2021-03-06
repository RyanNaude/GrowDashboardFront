import React, { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//Redux imports
import { useDispatch } from "react-redux";
import {
  setSignInState,
  setSignUpState,
  setTokenState,
} from "../../redux/user/user.actions";

var md5 = require("md5");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Journal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  //Setup Local State
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signError, setSignError] = useState(false);
  const [errorReason, setErrorReason] = useState("");

  const updateUser = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const createUser = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: newUser.email,
        password: md5(newUser.password),
      }),
    };
    fetch("http://localhost:4000/user/createUser", requestOptions)
      .then((response) => {
        if (response.ok) {
          setSignError(false);
          setErrorReason("");
          return response.json();
        } else {
          setSignError(true);
          setErrorReason("Email address already registered");
          dispatch(setSignUpState(true));
        }
      })
      .then((response) => {
        if (response) {
          dispatch(setSignUpState(false));
          dispatch(setTokenState(true));
          // const cookies = new Cookies();
          document.cookie =
            "logToken=" + response.logToken + "; SameSite=None; Secure";
        }
      })
      .catch((error) => console.log(error));
  };

  const signInRedirect = () => {
    dispatch(setSignInState(true));
    dispatch(setSignUpState(false));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ marginBottom: "1em" }}>
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={updateUser}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={updateUser}
            />
          </Grid>
          {signError ? (
            <Grid item container justifyContent="center">
              <Alert severity="error">{errorReason}</Alert>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={createUser}
        >
          Sign Up
        </Button>
        <Grid item container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={signInRedirect}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
