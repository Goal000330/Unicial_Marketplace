import { Theme, makeStyles } from "@material-ui/core/styles";
export const TypeBoxStyle = makeStyles((theme: Theme) => ({
  typeBoxRoot: {
    display: "flex",
    flexDirection: "column",
    width: "264px",
    height: "auto",
    paddingTop: "26px",
    fontFamily: "Lato",
  },
  headerTitle: {
    marginLeft: "40px",
    marginBottom: "13px",
    color: "#96A1DB",
    fontWeight: 400,
    fontSize: "14px",
    opacity: "50%",
  },
  boxBody: {
    marginBottom: "8px",
  },
  normalItem: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 40px",
    cursor: "pointer",
    marginBottom: "8px",
    borderLeft: "2px solid #282E4E",
  },
  activeItem: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 40px",
    cursor: "pointer",
    marginBottom: "8px",
    borderLeft: "2px solid #7F64E2",

    backgroundColor: "#21263F",
  },
  itemTitle: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "40px",
    color: "white",
    marginTop: "-3px",
    marginBottom: "-6px",
  },
  itemDescription: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#96A1DB",
    marginBottom: "8px",
  },
  divideline: {
    borderBottom: "2px solid #373F66",
    margin: "5px 18px",
  },
}));
