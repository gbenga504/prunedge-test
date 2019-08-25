import { commonCss } from "../../Css";

export const styles = theme => ({
  container: {
    ...commonCss.flex,
    alignItems: "flex-start",
    minHeight: "100%",
    height: "auto",
    width: "100%",
    position: "relative",
    backgroundColor: "#F3F5F7"
  },
  mainProfileContainer: {
    marginLeft: 265,
    display: "flex",
    width: "100%",
    marginTop: 95,
    padding: "0px 32px"
  }
});
