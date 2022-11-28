import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

export const InputBorderListDropdownStyle = makeStyles((theme: Theme) =>
  createStyles({
    totalRoot: {
      position: "relative",
    },
    root: {
      height: "44px",
      borderRadius: "100px",
      border: "1px solid #373F66",
      padding: "0px 17px 0px 14px",
      display: "flex",
      alignItems: "center",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    inputContainer: {},
    expandIcon: {
      color: "#70708F",
      cursor: "pointer",
    },
    searchResultRoot: {
      position: "absolute",
      zIndex: 9,
      backgroundColor: "#1A1F37",
      padding: "10px",
      width: "100%",
      overflow: "auto",
      maxHeight: "130px",
      borderRadius: "5px",
    },
    itemContainer: {
      padding: "5px 10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    rareTagContainer: {
      padding: "3px 4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      backgroundColor: "#282E4E",
      borderRadius: "5px",
    },
    Nonedisplay: {
      display: "none",
    },
  })
);
export const StyledInput = withStyles((theme) => ({
  root: {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    color: "white",
    width: "100%",
    "&:before": {
      border: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#FFFFFF",
      fontFamily: "Lato",
      fontStyle: "Regular",
      lineHeight: "19px",
      align: "Left",
      verticalAlign: "Top",
    },
  },
}))(Input);
