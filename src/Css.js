export const color = {
  theme: "#0C66FF",
  background: "#F3F5F7",
  lightGrey: "#9E9E9E",
  grey: "#999",
  dark: "#43536F",
  separator: "#F2F2F2",
  lightPurple: "#D0ABFE",
  purple: "#B073FD",
  blueGrey: "#82B1ED",
  lightBlueGrey: "#B4D0F4"
};

export const fontsize = {
  small: 12,
  base: 14,
  medium: 16,
  large: 18,
  title: 14
};

export const fonts = {
  main: '"Lato", "Helvetica Neue", sans-serif'
};

export const fontWeight = {
  light: 300,
  regular: 400,
  bold: 700
};

export const commonCss = {
  flex: {
    alignItems: "center !important",
    display: "flex !important",
    flexShrink: 0
  },
  flexColumn: {
    display: "flex !important",
    flexDirection: "column"
  },
  flexGrow: {
    display: "flex !important",
    flexGrow: 1
  },
  title: {
    fontSize: fontsize.title,
    color: color.dark,
    fontFamily: fonts.main,
    fontWeight: fontWeight.bold,
    textTransform: "uppercase"
  },
  titleMarker: {
    position: "absolute",
    height: 3,
    marginTop: 4,
    width: 32,
    background: color.theme
  },
  profileAvatar: {
    borderRadius: 20,
    border: `2px solid ${color.theme}`,
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
  profileUserName: {
    fontSize: fontsize.base,
    fontFamily: fonts.main,
    color: color.dark,
    fontWeight: fontWeight.bold,
    marginTop: 16
  },
  profileUserRole: {
    fontSize: fontsize.small,
    color: color.lightGrey,
    fontWeight: fontWeight.regular,
    fontFamily: fonts.main,
    marginTop: 5
  }
};
