import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const SignInStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    container: {
      position: "relative",
      alignItems: "center",
      maxWidth: "100% !important",
      height: "auto",
      fontFamily: "Lato",
      display: "flex",
      flexFlow: "column",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      justifyContent: "space-between",
      [theme.breakpoints.down(1204)]: {
        height: "auto",
        marginBottom: "48px",
      },
      [theme.breakpoints.down(1201)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(1200)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        margin: "48px 16px 0px 16px !important",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down(768)]: {
        width: "auto !important",
      },
    },
    headerText: {
      marginTop: "20px",
      marginBottom: "6px",
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "50px",
      letterSpacing: "2%",
      textAlign: "center",
    },
    starWalletIcon: {
      width: "180px",
      height: "180px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    descriptionContainer: {
      padding: "0px 38px",
      marginBottom: "40px",
      textAlign: "center",
      color: "#96A1DB",
      fontFamily: "Lato",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0%",
    },
    browserLink: {
      color: "#FF7C4C",
      textDecoration: "none",
    },
    connectBtn: {
      minWidth: "64px",
    },
    signinellipse1: {
      position: "absolute",
      top: "30%",
      left: "0px",
    },
    signinellipse2: {
      position: "absolute",
      right: "0px",
    },
  })
);
