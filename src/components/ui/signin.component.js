import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  setSignInState,
  setSignUpState,
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "0px solid",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookies] = useCookies();
  // const [returnUser, setReturnUser] = useState(null);

  const updateUser = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const loginUser = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmailField: newUser.email,
        userPasswordField: md5(newUser.password),
      }),
    };
    fetch("http://localhost:4000/loginUser", requestOptions)
      .then((response) => response.json())
      .then((data) => dispatch(setCurrentUser(data.users)))
      .then(() => dispatch(setSignInState(false)))
      .catch((error) => console.log(error));
  };

  const signUpRedirect = () => {
    dispatch(setSignInState(false));
    dispatch(setSignUpState(true));
  };

  return (
    <Grid container justifyContent="center" style={{border: "solid 0px"}}>
      <Grid item>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={updateUser}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={updateUser}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginUser}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={signUpRedirect}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
