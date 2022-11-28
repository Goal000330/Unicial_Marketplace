import { createStyles, Popover, Theme } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const FooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "relative",
      display: "flex",
      overflow: "hidden",
      borderTop: "1px solid #67637033",
    },
    footerTexture: {
      position: "absolute",
      left: "50%",
      width: "50%",
      height: "100%",
      [theme.breakpoints.down(768)]: {
        width: "80%",
        left: "0px",
      },
      [theme.breakpoints.down(500)]: {
        width: "100%",
        left: "0px",
        top: "20%",
      },
    },
    root: {
      padding: "40px 0px 35px 0px",
      width: "100%",
      backgroundColor: "#21263F",
    },
    container: {
      flexFlow: "row nowrap",
      alignItems: "center",
      maxWidth: "100% !important",
      fontFamily: "Lato",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      justifyContent: "space-between",
      [theme.breakpoints.down(1201)]: {
        flexFlow: "column nowrap",
      },
      [theme.breakpoints.down(1200)]: {
        flexFlow: "column nowrap",
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(768)]: {
        width: "auto !important",
      },
    },
    mainfooter: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      marginBottom: "5px",
      [theme.breakpoints.down(769)]: {
        display: "block",
        marginBottom: "12px",
      },
    },
    links: {
      fontFamily: "Lato",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      marginTop: "2px",
      position: "relative",
      zIndex: 99,
      [theme.breakpoints.down(769)]: {
        marginLeft: "8px",
      },
    },
    link: {
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "16.8px",
      color: "white",
      marginRight: "16px",
      marginBottom: "8px",
      textDecoration: "none",
      textAlign: "center",
    },
    secondaryFooter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down(769)]: {
        flexFlow: "column",
      },
    },
    socialLinks: {
      marginTop: "2px",
      position: "relative",
      zIndex: 99,
      [theme.breakpoints.down(769)]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    socialIcon: {
      width: "21px",
      height: "21px",
      display: "inline-block",
      color: "#96A1DB",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundClip: "content-box",
      cursor: "pointer",
      marginLeft: "23px",
    },
    copyright: {
      color: "#96A1DB",
      fontSize: "14px",
      fontFamily: "Lato",
      lineHeight: "1.7em",
      [theme.breakpoints.down(769)]: {
        marginBottom: "15px",
      },
    },
    languageDropdown: {
      width: "100px",
      height: "30px",
      transform: "translateY(-4px)",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      outline: 0,
      textAlign: "center",
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
    },
    flagLanRoot: {
      transform: "translateY(2px)",
      textTransform: "none",
      display: "inline-block",
      transition: "none",
    },
    flagLanContainer: {
      display: "flex",
      alignItems: "center",
    },
    flagIcon: {
      width: "16px",
      height: "16px",
    },
    languageLabel: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      marginTop: "1px",
      "&:hover": {
        color: "white",
      },
    },
    languagesettingContainer: {
      marginTop: "8px",
    },
    activeitem: {
      backgroundColor: "#282E4E",
    },
    activeLabel: {
      color: "white",
    },
    NoneDisplay: {
      display: "none",
    },
  })
);

export const StyledLanguagePopover = withStyles({
  paper: {
    backgroundColor: "#1A1F37",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05 )",
    borderRadius: "15px",
    position: "absolute",
    minWidth: "168px",
    marginTop: "-5px",
  },
})(Popover);

export const StyledMenuItem = withStyles({
  root: {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "168px",
    padding: "10px 16px",
    cursor: "pointer",
    position: "relative",
  },
})(MenuItem);
