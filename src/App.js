import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";
import Profile from "./views/Profile";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Profile />
    </MuiThemeProvider>
  );
}

export default App;
