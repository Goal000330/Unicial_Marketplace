import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const GeneralSaleCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      borderRadius: "15px",
      padding: "25px",
      height: "109px",
      display: "flex",
      alignItems: "center",
    },
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    iconContainer: {
      width: "44px",
      height: "44px",
      borderRadius: "100%",
      backgroundColor: "#21263F",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    infoContainer: {
      marginLeft: "25px",
      [theme.breakpoints.down(992)]: {
        marginLeft: "11px",
      },
      [theme.breakpoints.down(960)]: {
        marginLeft: "25px",
      },
    },
    title: {
      fontSize: "12px",
      lineHeight: "14px",
      color: "#96A1DB",
      opacity: "50%",
      marginTop: "18px",
    },
    price: {
      fontFamily: "Montserrat",
      fontStyle: "Semi Bold",
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "70px",
      letterSpacing: "2%",
    },
    yellow: {
      background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    purple: {
      background: "linear-gradient(to right, #7F64E2 0%, #41A6EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    green: {
      background: "linear-gradient(to right, #29C98F 0%, #66D8AF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })
);
