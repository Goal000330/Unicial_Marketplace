import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 390px)",
      minWidth: "1064px",
      maxWidth: "1064px",
      margin: "40px auto 60px auto",
      position: "relative",
      "& canvas, .react-tile-map ": {
        borderRadius: "15px",
      },
      [theme.breakpoints.up(1366)]: {
        maxWidth: "1064px",
      },
      [theme.breakpoints.down(1200)]: {
        minWidth: "933px",
        maxWidth: "933px",
      },
      [theme.breakpoints.down(960)]: {
        minWidth: "calc(100% - 32px) !important",
        margin: "10px 16px",
      },
      [theme.breakpoints.down(768)]: {
        minWidth: "calc(100% - 32px) !important",
      },
    },
    createBtns: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    resultStatus: {
      fontFamily: "Lato",
      fontSize: "18px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "26px",
      color: "#96A1DB",
    },
    functionBtn: {
      display: "flex",
    },
    functionIcon: {
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      color: "#ffffff",
      textAlign: "center",
      marginLeft: "10px",
      cursor: "pointer",
      "& i": {
        margin: "7px 17px",
        width: "16px",
        height: "16px",
        color: "#ffffff",
      },
    },
    createContent: {
      height: "200px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      background: "#282E4E",
    },
    importantLink: {
      textAlign: "center",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "29px",
      color: "#fb895a",
      cursor: "pointer",
    },
    contentLetter: {
      textAlign: "center",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "29px",
      color: "#96A1DB",
    },
    showmoreContent: {
      marginTop: "15px",
      justifyContent: "center",
      width: "100%",
      flexFlow: "row nowrap",
      display: "flex",
    },
    displayNone: {
      display: "none",
    },
  })
);
