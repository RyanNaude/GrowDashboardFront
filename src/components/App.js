import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Calander from "./calander";
import CostManagement from "./costManagement";
import Enviroment from "./enviroment";
import EnviromentSettings from "./envSettings";
import Gallery from "./gallery";
import Home from "./home";
import Header from "./ui/Header";
import theme from "./ui/theme";

function App() {
  const [open, setOpen] = useState(false);
  const [mainPage, setMainPage] = useState("Home");
  

  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          setMainPage={setMainPage}
          setOpen={setOpen}
          open={open}
          mainPage={mainPage}
          style={{border: "3px solid yellow"}}
        />
        <Switch>
          <Route exact path="/" component={() => <Home open={open} />} />
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
            component={() => <EnviromentSettings open={open} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
