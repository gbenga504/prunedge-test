import { createMuiTheme } from "@material-ui/core/styles";
import { color, fontWeight } from "./Css";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.theme,
      white: "#fff"
    },
    secondary: {
      main: color.theme
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Lato", "sans-serif"].join(", "),
    fontWeight: fontWeight.regular
  }
});
