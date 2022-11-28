import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const ParcelCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "#282E4E",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      cursor: "pointer",
      [theme.breakpoints.down(996)]: {
        padding: "20px 3px",
      },
      [theme.breakpoints.down(960)]: {
        padding: "20px",
      },
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    cardLabel: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      width: "90px",
      margin: "auto",
    },
    cardDescription: {
      fontSize: "15px",
      color: "white",
      opacity: "60%",
      marginTop: "10px",
      fontFamily: "Lato",
    },
    location: {
      marginTop: "30px",
      margin: "auto",
    },
  })
);
