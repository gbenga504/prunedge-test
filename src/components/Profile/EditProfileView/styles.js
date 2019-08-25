import { commonCss } from "../../../Css";

export const styles = {
  container: {
    ...commonCss.flexColumn,
    padding: 22,
    background: "#fff",
    width: "51%",
    marginLeft: "3%",
    height: "max-content",
    boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.04)"
  },
  title: {
    ...commonCss.title
  },
  marker: {
    ...commonCss.titleMarker
  },
  row: {
    ...commonCss.flex
  },
  submitButton: {
    display: "flex",
    alignSelf: "flex-end",
    marginTop: 70
  }
};
