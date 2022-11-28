import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    color: "white",
  },
  targetRow: {
    backgroundColor: "#282e4e",
    borderLeft: "2px solid #7e64e2",
    "& > td:last-child": {
      borderRadius: "0px 15px 15px 0px",
    },
  },
  tableCell: {
    fontSize: "16px !important",
    fontFamily: "Lato",
    color: "white !important",
    fontWeight: "normal",
    "&.MuiTableCell-root": {
      padding: "10px 10px 10px 20px !important",
    },
    alignItems: "center",
  },
  imageCell: {},
  symbol: {
    fontSize: "20px",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "3px",
  },
  avatarContainer: {
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    borderRadius: "100%",
    marginRight: "12px",
    float: "left",
    marginTop: "3px",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  symbolCell: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19.2px",
    color: "white",
  },
}));
