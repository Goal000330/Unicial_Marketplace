import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "0px",
      borderBottom: "1px solid #282e4e",
      width: "100%",
      position: "relative",
      backgroundColor: "#21263F",
    },
    container: {
      position: "relative",
      display: "flex",
      flexFlow: "row no wrap",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "100%",
        padding: "0 16px",
        margin: "0 !important",
      },
      [theme.breakpoints.down(769)]: {
        width: "100%",
        padding: "0 16px",
        margin: "0 !important",
      },
    },
    headermenuContainer: {
      margin: "0px",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
      height: "100%",
      [theme.breakpoints.down(600)]: {
        display: "none",
      },
    },
    logoContent: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      marginRight: "110px",
      [theme.breakpoints.down(769)]: {
        marginRight: "40px",
      },
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    logoName: {
      fontFamily: "Montserrat",
      color: "#fff",
      fontSize: "16px",
      fontWeight: 600,
      letterSpacing: "0.02em",
      lineHeight: "20px",
      margin: "0px 10px",
      [theme.breakpoints.down(500)]: {
        display: "none",
      },
    },
    headerLink: {
      textTransform: "none",
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "19.2px",
    },
    accountRoot: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    accountContainer: {
      margin: "0px",
      display: "flex",
    },
    signinbtn: {
      color: "#676370",
      textTransform: "uppercase",
      marginLeft: "24px",
      padding: "0px",
      fontSize: "13px",
      lineHeight: "18px",
      margin: "0 0.35714286em",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },

    headerBtn: {
      color: "#ffffff",
      borderRadius: "6px",
      textTransform: "uppercase",
      fontFamily: "Lato",
      marginRight: "24px",
      padding: "0px",
      minWidth: "33px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    headerClickBtn: {
      fontWeight: "normal",
      color: "#ffffff",
      textTransform: "uppercase",
      fontFamily: "Lato",
      marginRight: "24px",
      padding: "2px 0px 0px 0px!important",
      fontSize: "16px",
      lineHeight: "18px",
      minWidth: "33px",
      height: "100%",
      borderRadius: "0px",
      // borderBottom: "2px solid #7F64E2",
      "&:hover": {
        cursor: "pointer",
      },
      "& .MuiButton-label": {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      "& .active-border": {
        width: "34px",
        height: "2px",
        background: "#7F64E2",
      },
    },
    NoneDisplay: {
      display: 'none'
    },
  })
);
