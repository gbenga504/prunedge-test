import { commonCss, fontsize } from "../../../Css";

export const styles = {
  container: {
    ...commonCss.flexColumn,
    padding: 22,
    background: "#fff",
    width: "52.5%",
    borderRadius: 4,
    marginLeft: "1.5%",
    height: "max-content",
    boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.04)",
    marginBottom: 20,
    paddingBottom: 40
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
    marginTop: 36,
    width: 100,
    textTransform: "capitalize"
  },
  menuItemRoot: {
    fontSize: fontsize.base
  }
};
