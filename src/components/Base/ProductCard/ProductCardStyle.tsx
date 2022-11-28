import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const ProductCardStyle = makeStyles((theme: Theme) =>
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
      backgroundImage: "linear-gradient(67.71deg, #39B8FD 0%, #AD2DFE 98.37%)",
      borderRadius: "15px",
      marginTop: "20px",
      marginBottom: "17px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
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
