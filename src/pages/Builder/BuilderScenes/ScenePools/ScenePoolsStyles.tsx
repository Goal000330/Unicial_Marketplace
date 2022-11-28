import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 390px)",
      minWidth: "1064px",
      maxWidth: "1064px",
      margin: "10px auto 60px auto",
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
    topPart: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "35px",
    },
    topFirst: {
      display: "flex",
      alignItems: "center",
    },
    scenePoolTitle: {
      fontFamily: "Montserrat",
      fontSize: "40px",
      lineHeight: "50px",
      color: "#FFFFFF",
      marginLeft: "32px",
    },
    topSecond: {
      display: "flex",
      alignItems: "center",
    },
    backIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      minWidth: "40px",
      width: "40px",
      height: "40px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      background: "#444858",
      "& i": {
        fontSize: "21px",
        fontWeight: 100,
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
    dropDown: {
      marginRight: "35px",
      "& .MuiBox-root": {
        background: "linear-gradient( #7F64E2 0%, #41A6EF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      "& i": {
        background: "linear-gradient( #7F64E2 0%, #41A6EF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  })
);
