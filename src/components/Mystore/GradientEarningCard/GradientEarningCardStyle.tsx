import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const GradientEarningCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      padding: "25px",
      height: "109px",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    maskEffectYel: {
      position: "absolute",
      top: "-143px",
      left: "135px",
    },
    maskEffectPur: {
      position: "absolute",
      top: "-75px",
      left: "112px",
    },
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    iconContainer: {
      width: "56px",
      height: "56px",
      borderRadius: "100%",
      backgroundColor: "#21263F",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    infoContainer: {
      marginLeft: "25px",
    },
    title: {
      fontSize: "12px",
      lineHeight: "14px",
      color: "white",
      marginTop:"8px",
    },
    price: {
      fontFamily: "Montserrat",
      fontStyle: "Semi Bold",
      fontSize: "40px",
      letterSpacing: "2%",
      color: "#21263F",
      fontWeight: 600,
    },
    yellow: {
      backgroundImage: "linear-gradient(#FF7C4C 0%, #FFB03A 100%)",
    },
    purple: {
      backgroundImage: "linear-gradient(#7F64E2 0%, #41A6EF 100%)",
    },
    green: {
      background: "linear-gradient(to right, #29C98F 0%, #66D8AF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })
);
