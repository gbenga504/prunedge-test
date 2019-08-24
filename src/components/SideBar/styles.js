export const styles = theme => ({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 265,
    paddingBottom: 76,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#FFFFFF",
    boxShadow: "4px 0px 24px #E3E3E3"
  },
  topSectionContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 95
  },
  userDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatarContainer: {
    borderRadius: 20,
    border: "2px solid #7396FD",
    background: "#fff",
    height: 85,
    width: 85,
    boxSizing: "unset",
    "& img": {
      borderRadius: 20,
      height: "calc(100% - 8px)",
      width: "calc(100% - 8px)",
      boxSizing: "unset",
      margin: 4
    }
  },
  userName: {
    fontSize: 14,
    fontFamily: "Lato",
    color: "#5F5C7F",
    fontWeight: 700,
    marginTop: 16
  },
  role: {
    fontSize: 12,
    color: "#999",
    fontWeight: 400,
    fontFamily: "Lato",
    marginTop: 5
  },
  department: {
    fontSize: 12,
    color: "#999",
    fontFamily: "Lato",
    fontWeight: 400,
    opacity: 0.7,
    marginTop: 5
  },
  navItem: {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    paddingLeft: 40,
    cursor: "pointer"
  },
  navItemActive: {
    "&::before": {
      content: "''",
      position: "absolute",
      width: 5,
      height: 48,
      left: 0,
      borderRadius: "0px 3px 3px 0px",
      background: "#0C66FF"
    }
  },
  icon: {
    fontSize: 26,
    color: "#999",
    marginRight: 10
  },
  iconActive: {
    color: "#182C4F"
  },
  navItemText: {
    fontSize: 14,
    fontFamily: "Lato",
    color: "#999",
    textTransform: "capitalize"
  },
  navItemTextActive: {
    color: "#182C4F"
  },
  badge: {
    right: -60,
    padding: "0px 7px",
    backgroundColor: "#0C66FF"
  },
  logoutIcon: {
    width: 26,
    height: 26,
    background: "#999",
    borderRadius: "50%",
    display: "flex",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
