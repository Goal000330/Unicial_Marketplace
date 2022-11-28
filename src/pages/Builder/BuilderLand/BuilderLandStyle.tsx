import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  landMap: {
    flexGrow: 2,
    overflow: "hidden",
  },
  mapHeader: {
    margin: "0px 50px",
    textAlign: "center",
  },
  mapHeaderContainer: {
    margin: "0 auto",
    padding: "41px 0px 33px 0px",
    maxWidth: "1064px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstPart: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "26px",
    color: "#96A1DB",
  },
  secondPart: {
    display: "flex",
    alignItems: "center",
  },
  lightBlue: {
    marginRight: "11px",
  },
  item: {
    marginLeft: "25px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
  },
}));
