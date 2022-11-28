import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
  tokenAddress: {
    cursor: "pointer",
  },
  tokenId: {
    cursor: "pointer",
  },
  priceCell: {
    // display: "flex",
    alignItems: "center",
  },
  normalshape: {
    marginRight: "5px",
    float: "left",
  },
  actionBtn: {
    minWidth: "0px",
    "& span": {
      margin: "2px 11px",
      display: "flex",
      fontSize: "12px",
      alignItems: "center",
      fontFamily: "Lato",
      fontWeight: 500,
      lineHeight: "20px",
      verticalAlign: "Top",
    },
  },
  tags: {
    textAlign: "center",
    maxHeight: "42px",
    fontSize: "12px",
    alignItems: "center",
    fontFamily: "Lato",
    fontWeight: 500,
    verticalAlign: "Top",
    margin: "0px",
    cursor: "unset",
  },
  copyIcon: {
    cursor: "pointer",
  },
}));
