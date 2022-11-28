import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderMobileMenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      fontSize: "1rem",
      color: "#96a1db",
      position: "relative",
      "& .MuiTypography-root": {
        fontFamily: "Lato",
        fontWeight: 700,
        cursor: "pointer",
      },
    },
    active: {
      padding: "15px 70px",
      color: "white",
    },
    unactive: {
      padding: "15px 70px",
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    firstItem: {
      flex: "none",
      marginLeft: "10px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "& .MuiTypography-root": {
        fontSize: "16px",
        fontFamily: "Montserrat",
        margin: "0px 10px",
        fontWeight: 600,
        letterSpacing: 0.02,
        color: "white",
      },
      "& svg": {
        color: "#96a1db",
      },
    },
    headerMobilemenu: {
      zIndex: 9999,
      [theme.breakpoints.up(600)]: {
        display: "none",
      },
    },
    collapse: {
      width: "100vw",
      backgroundColor: "#1a1f37",
      position: "absolute",
      left: "-16px",
    },
    headerlistItem: {
      padding: "0px",
    },
  })
);
