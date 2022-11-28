import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: "165px",
    overflow: "hidden",
  },
  countdownItem: {
    padding: "10px 0px",
  },
  timeItem: {
    color: "#fff",
    fontSize: "50px",
    lineHeight: "70px",
    fontWeight: 700,
    position: "relative",
    textAlign: "center",
    background: "linear-gradient(to right, #FF7C4C 20%, #FFB03A 101.82%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down(769)]: {
      fontSize: "30px",
    },
  },
  semicon: {
    width: "1px",
    height: "24px",
    background: "#282e4e",
    margin: "25px 20px 0px 20px",
    [theme.breakpoints.down(769)]: {
      margin: "25px 10px 0px 10px",
    },
  },
  timeDesc: {
    fontSize: "1rem",
    textAlign: "center",
    color: "#96A1DB",
    opacity: 0.5,
  },
  countTexture1: {
    position: "absolute",
    left: "-150px",
    width: "60%",
    bottom: "0px",
  },
  countTexture2: {
    position: "absolute",
    right: "-150px",
    width: "60%",
    transform: "rotate(180deg)",
    top: "0px",
  },
}));
