import { fontWeight, fonts, fontsize, commonCss, color } from "../../../Css";

export const styles = {
  container: {
    ...commonCss.flexColumn,
    padding: 22,
    background: "#fff",
    width: "46%",
    height: "max-content",
    boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.04)"
  },
  title: {
    ...commonCss.title
  },
  marker: {
    ...commonCss.titleMarker
  },
  personalDetailsContainer: {
    ...commonCss.flexColumn,
    alignItems: "center",
    marginTop: 41
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
  separator: {
    height: 1,
    marginTop: 11,
    marginBottom: 23,
    background: color.separator,
    width: "100%"
  },
  organizationContainer: {
    ...commonCss.flex,
    justifyContent: "space-between",
    "& .profile__organization-single-unit": {
      ...commonCss.flexColumn,
      alignItems: "center"
    }
  },
  iconContainer: {
    ...commonCss.flex,
    justifyContent: "center",
    borderRadius: "50%",
    height: 35,
    width: 35,
    border: `3px solid ${color.lightBlueGrey}`,
    background: color.blueGrey,
    "& svg": {
      color: "#fff",
      fontSize: 15
    }
  },
  lightGreyText: {
    marginTop: 5,
    fontWeight: fontWeight.regular,
    color: color.lightGrey,
    fontFamily: fonts.main,
    fontSize: fontsize.small
  },
  darkText: {
    marginTop: 12,
    fontWeight: fontWeight.bold,
    color: color.dark,
    fontFamily: fonts.main,
    fontSize: fontsize.base
  },
  uploadContainer: {
    ...commonCss.flex,
    background: "#fff",
    position: "absolute",
    width: 32,
    height: 32,
    marginTop: -20,
    borderRadius: "50%",
    marginLeft: 60,
    justifyContent: "center",
    boxShadow: `0px 0px 15px 0px ${color.lightBlueGrey}`,
    "& svg": {
      fontSize: 15,
      color: color.dark
    },
    "& input": {
      width: 20,
      height: 20,
      position: "absolute",
      opacity: 0
    }
  }
};
