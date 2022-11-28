import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const NameCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      padding: "20px 6px 21px 6px",
      overflow: "hidden",
      minWidth: "200px",
      marginBottom: "20px",
      "&:hover": {
        transform: "translateY(-2px)",
        cursor: "pointer",
      },
    },
    nameRoot:{
      marginLeft: "7.58px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    icon: {
      width: "20px",
      height: "20px",
    },
    infoRoot: {
      position: "relative",
    },
    infoContainer: {
      width: "100%",
      backgroundColor: "#21263F",
      borderRadius: "15px",
      marginTop: "21px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: "150px",
      [theme.breakpoints.down(1200)]: {
        width: "100%",
        height: "170px",
      },
      [theme.breakpoints.down(960)]: {
        width: "100%",
        height: "225px",
      },
    },
    infoNamesContainer: {
      //   display: "flex",
    },
    infoBigname: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "26px",
      textAlign: "center",
      color: "white",
    },
    infoSmallname: {
      marginTop: "3px",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16.8px",
      textAlign: "center",
      color: "#96A1DB",
    },

    image: {
      [theme.breakpoints.up(1200)]: {
        maxWidth: "150px",
        maxHeight: "150px",
      },
      [theme.breakpoints.down(1200)]: {
        width: "100%",
        alignSelf: "self-end",
      },
      [theme.breakpoints.down(960)]: {
        width: "100%",
        alignSelf: "self-end",
      },
    },
    avatarIamgeContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    avatarIamge: {
      borderRadius: "100%",
      width: "68px",
      height: "68px",
      textAlign: "center",
      position: "absolute",
      bottom: "-34px",
      [theme.breakpoints.down(600)]: {
        width: "85px",
        height: "85px",
      },
    },
    productName: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0,02em",
      color: "white",
      marginBottom: "10px",
      paddingLeft: "8px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      marginTop: "51px",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "8px",
    },
    category: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
    },
    priceContainer: {
      display: "flex",
      width: "70px",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: "10px",
    },
    price: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.02em",
      color: "white",
    },
  })
);
