import {
  createStyles,
  withStyles,
  MenuItem,
  Popover,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const CollectibleFilterStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      borderRadius: "15px",
      marginBottom: "32px",
      padding: "26px 40px",
    },
    selectPart: {
      alignItems: "flex-start",
      flex: "1 1 auto",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
    },
    collectionSelectContainer: {
      // flex: "1 0 auto",
      width: "45%",
    },
    title: {
      fontStyle: "normal",
      fontWeight: 400,
      color: "#96A1DB",
      fontSize: "14px",
      lineHeight: "17px",
      opacity: 0.5,
      marginBottom: "12px !important",
    },
    //select round
    listDropdown: {
      marginTop: "5px",
      width: "100%",
      height: "32px",
      cursor: "pointer",
      position: "relative",
      border: "1px solid #373F66",
      borderRadius: "100px",
      padding: "1px 20px",
    },
    listRoot: {
      transform: "translateY(2px)",
      textTransform: "none",
      transition: "none",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    mainlistLabel: {
      fontSize: "16px",
      lineHeight: "19px",
      color: "white",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      "&:hover": {
        color: "white",
      },
    },
    rarityPart: {
      flex: "1 1 auto",
      alignItems: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
    },
    rarityPartContainer: {
      flex: "1 0 auto",
    },
    options: {
      display: "flex",
      flexFlow: "wrap",
      marginTop: "13px",
    },
    option: {
      padding: "5px 10px",
      backgroundColor: "#363e63",
      borderRadius: "16px",
      fontWeight: 600,
      cursor: "pointer",
      marginRight: "8px",
      marginBottom: "8px",
    },
    genderRadioContainer: {
      "&.MuiFormGroup-root": {
        flexDirection: "row",
        flexWrap: "nowrap",
      },
    },
    footer: {
      marginTop: "13px",
    },
    clearFilterContainer: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      cursor: "pointer",
    },
    clearFilterContainerNone: {
      display: "none",
    },
    clearFilterLabel: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      background: "linear-gradient(to right, #7F64E2 10%, #41A6EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginRight: "3px",
      marginBottom: "3px",
    },
    closeicon: {
      width: "22px",
      height: "26px",
    },
    activeLabel: {
      color: "white",
    },
  })
);

export const StyledCollectionPopover = withStyles({
  paper: {
    backgroundColor: "#1A1F37",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05 )",
    marginBottom: "70px",
    borderRadius: "15px",
    position: "absolute",
    minWidth: "168px",
    top: "419px",
  },
})(Popover);

export const StyledMenuItem = withStyles({
  root: {
    color: "#96A1DB",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "210px",
    padding: "10px 16px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      color: "white",
    },
  },
})(MenuItem);
