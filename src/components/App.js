import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Material UI Theme
import { ThemeProvider } from "@material-ui/core/styles";

//Component Import
import Calander from "./calander";
import CostManagement from "./costManagement";
import Enviroment from "./enviroment";
import EnviromentSettings from "./envSettings";
import Gallery from "./gallery";
import Header from "./ui/Header";
import Home from "./home";
import theme from "./ui/theme";

function App() {
  //Setup Local State
  const [open, setOpen] = useState(false);
  const [mainPage, setMainPage] = useState("Home");
  const [weatherRefresh, setWeatherRefresh] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          setMainPage={setMainPage}
          setOpen={setOpen}
          open={open}
          mainPage={mainPage}
          style={{ border: "3px solid yellow" }}
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
            component={() => <Calander open={open} />}
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
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
