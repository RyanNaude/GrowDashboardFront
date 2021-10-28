import { createTheme } from "@material-ui/core/styles";

const primeGreen = "#0bb965";
const secGreen = "#b0fa73";

export default createTheme({
  palette: {
    common: {
      greena: "#1E5C35",
      greenb: "#035C23",
      greenc: "#05A841",
      greend: "#07DB55",
      greene: "#4AE182",
      greenf: "#CEEAD8"
    },
    primary: {
      main: primeGreen,
    },
    secondary: {
      main: secGreen,
    },
  },
  typography: {
    h4: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
