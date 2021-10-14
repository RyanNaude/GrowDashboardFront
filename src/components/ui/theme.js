import { createTheme } from "@material-ui/core/styles";

const arcGreen = "#0bb965";
const arcOrgange = "#b0fa73";

export default createTheme({
  palette: {
    common: {
      blue: arcGreen,
      orange: arcOrgange,
    },
    primary: {
      main: arcGreen,
    },
    secondary: {
      main: arcOrgange,
    },
  },
  typography: {
    h4: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
