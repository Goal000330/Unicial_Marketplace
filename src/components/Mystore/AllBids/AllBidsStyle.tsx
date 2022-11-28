import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const AllBidsStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
    },
    receiveBid: {
      minHeight: "150px",
      paddingBottom: "20px",
    },
    receiveTitle: {
      marginLeft: "20px",
      marginBottom: "30px",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0,02em",
      color: "white",
      paddingLeft: "8px",
      fontFamily: "Montserrat",
    },
    sendBid: {
      borderTop: "solid 1px #373f66",
      minHeight: "150px",
      paddingTop: "50px",
    },
    sendTitle: {
      marginLeft: "20px",
      marginBottom: "30px",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0,02em",
      color: "white",
      paddingLeft: "8px",
      fontFamily: "Montserrat",
    },
    emptyDisplay: {
      opacity: "50%",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
