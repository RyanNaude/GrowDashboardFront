import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Material UI Theme
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

//Component Import
import Calander from "./calander";
import CostManagement from "./costManagement";
import Enviroment from "./enviroment";
import EnviromentSettings from "./envSettings";
import Gallery from "./gallery";
import Header from "./ui/Header";
import Home from "./home";
import theme from "./ui/theme";

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';

function App() {
  //Setup Local State
  const [open, setOpen] = useState(false);
  const [mainPage, setMainPage] = useState("Home");
  const [weatherRefresh, setWeatherRefresh] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Header
            setMainPage={setMainPage}
            setOpen={setOpen}
            open={open}
            mainPage={mainPage}
            weatherRefresh={weatherRefresh}
            setWeatherRefresh={setWeatherRefresh}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  open={open}
                  weatherRefresh={weatherRefresh}
                  setWeatherRefresh={setWeatherRefresh}
                />
              )}
            />
            <Route
              exact
              path="/enviroment"
              component={() => <Enviroment open={open} />}
            />
            <Route
              exact
              path="/calander"
              component={() => (
                <Calander
                  open={open}
                  style={{ width: "100%", border: "0px solid" }}
                />
              )}
            />
            <Route
              exact
              path="/gallery"
              component={() => <Gallery open={open} />}
            />
            <Route
              exact
              path="/costmanagement"
              component={() => <CostManagement open={open} />}
            />
            <Route
              exact
              path="/enviromentsettings"
              component={() => (
                <EnviromentSettings
                  open={open}
                  weatherRefresh={weatherRefresh}
                  setWeatherRefresh={setWeatherRefresh}
                />
              )}
            />
          </Switch>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
