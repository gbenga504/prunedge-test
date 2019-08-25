import { commonCss, fontsize, fonts, fontWeight, color } from "../../Css";

export const styles = {
  container: {
    ...commonCss.flexColumn,
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 265,
    paddingBottom: 76,
    justifyContent: "space-between",
    background: "#FFFFFF",
    boxShadow: "4px 0px 24px #E3E3E3"
  },
  topSectionContainer: {
    ...commonCss.flexColumn,
    marginTop: 95
  },
  userDetailsContainer: {
    ...commonCss.flexColumn,
    alignItems: "center"
  },
  avatarContainer: {
    ...commonCss.profileAvatar
  },
  userName: {
    ...commonCss.profileUserName
  },
  role: {
    ...commonCss.profileUserRole
  },
  department: {
    fontSize: fontsize.small,
    color: color.lightGrey,
    fontFamily: fonts.main,
    fontWeight: fontWeight.regular,
    marginTop: 5
  },
  navItem: {
    ...commonCss.flex,
    width: "100%",
    height: 48,
    paddingLeft: 23,
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
      background: color.theme
    }
  },
  icon: {
    fontSize: 20,
    color: color.lightGrey,
    marginRight: 10
  },
  iconActive: {
    color: color.dark
  },
  navItemText: {
    fontSize: fontsize.base,
    fontFamily: fonts.main,
    color: color.lightGrey,
    textTransform: "capitalize"
  },
  navItemTextActive: {
    color: color.dark,
    fontWeight: fontWeight.bold
  },
  badge: {
    right: -65,
    padding: "0px 7px",
    backgroundColor: color.theme
  },
  logoutIcon: {
    ...commonCss.flex,
    width: 26,
    height: 26,
    background: color.lightGrey,
    borderRadius: "50%",
    marginRight: 10,
    justifyContent: "center"
  }
};
