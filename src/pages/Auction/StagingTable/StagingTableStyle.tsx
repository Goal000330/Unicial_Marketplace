import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  center: {
    // textAlign: "center",
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
  },
}));
