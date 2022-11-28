import { Button, createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Tooltip } from "@material-ui/core";

export const LandCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: "360px",
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      marginBottom: "10px",
      padding: "20px 8px",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    iconContainer: {
      display: "flex",
      width: "50px",
      justifyContent: "space-between",
    },

    icon: {
      width: "20px",
      height: "20px",
    },
    imageContainer: {
      width: "100%",
      //   backgroundImage: "linear-gradient(67.71deg, #39B8FD 0%, #AD2DFE 98.37%)",
      borderRadius: "15px",
      marginTop: "13px",
      marginBottom: "12px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      // width: "80%",
      // maxWidth: "80%",
      borderRadius: "15px",
      [theme.breakpoints.up(1200)]: {
        width: "230px",
        height: "180px",
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
    productName: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0,02em",
      color: "white",
      paddingLeft: "8px",
      paddingRight: "8px",
      marginBottom: "10px",
      fontFamily: "Montserrat",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px 0 8px",
    },
    category: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
      fontFamily: "Lato",
    },
    priceContainer: {
      display: "flex",
      width: "70px",
      justifyContent: "end",
      alignItems: "center",
    },
    price: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.02em",
      color: "white",
      fontFamily: "Montserrat",
      marginLeft: "5px",
    },
    emptyprice: {
      height: "30px",
    },
  })
);

export const StyledTooltip = withStyles({
  tooltip: {
    color: "white",
    fontSize: "18px",
    padding: "10px 20px",
    fontFamily: "Lato",
    backgroundColor: "#282e4e",
    textAlign: "left",
  },
  arrow: {
    color: "#282e4e !important",
  },
})(Tooltip);
