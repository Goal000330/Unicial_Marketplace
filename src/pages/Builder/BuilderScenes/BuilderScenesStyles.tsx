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
      marginLeft: "10px",
    },
    createContent: {
      height: "338px",
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
    viewLetter: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      background: "linear-gradient(to right, #7F64E2 20%, #41A6EF 80%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      cursor: "pointer",
    },
    viewArrow: {
      cursor: "pointer",
      background: "linear-gradient(to right, #7F64E2 20%, #41A6EF 80%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      "& i": {
        color: "red",
        marginLeft: "10px",
      },
    },
    sceneContent: {
      display: "flex",
      overflowX: "scroll",
      paddingBottom: "25px",
    },
    sceneCardRoot: {
      width: "285px",
      minWidth: "285px",
      padding: "8.5px",
      height: "307px",
      background: "#282E4E",
      borderRadius: "15px",
      position: "relative",
      marginRight: "50px",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    sceneImgRoot: {
      width: "100%",
      borderRadius: "15px",
      overflow: "hidden",
    },
    sceneImg: {
      width: "100%",
      height: "200px",
    },
    sceneName: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "26px",
      position: "absolute",
      left: "20px",
      bottom: "50px",
    },
    sceneSize: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: "#96A1DB",
      position: "absolute",
      left: "20px",
      bottom: "20px",
    },
    resultStatus1: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontStyle: "Regular",
      fontWeight: 600,
      lineHeight: "26px",
      color: "#ffffff",
    },
    secondPart: {
      marginTop: "25px",
    },
  })
);
