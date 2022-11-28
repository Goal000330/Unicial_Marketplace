import {
  createStyles,
  withStyles,
  MenuItem,
  Popover,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const BorderListDropdownStyle = makeStyles((theme: Theme) =>
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
      justifyContent: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
    },
    collectionSelectContainer: {
      flex: "1 0 auto",
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
      // width: "100%",
      height: "32px",
      position: "relative",
      border: "1px solid #373F66",
      borderRadius: "100px",
      padding: "1px 20px",
      [theme.breakpoints.down(1025)]: {
        marginBottom: "18px",
      },
    },
    listRoot: {
      transform: "translateY(2px)",
      textTransform: "none",
      transition: "none",
      marginTop: "1px",
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
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
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
    },
    activeLabel: {
      color: "white",
    },
    moreIcon: {
      color: "#96A1DB !important",
      marginLeft: "3px !important",
      padding: "0px !important",
      "& .MuiSvgIcon-root": {
        fontSize: "20px",
      },
    },
    cancelIcon: {
      color: "#96A1DB !important",
      marginLeft: "3px !important",
      padding: "0px !important",
      "& .MuiSvgIcon-root": {
        fontSize: "15px",
      },
    },
    displayNone: {
      display: "none",
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
    marginTop: "7px",
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
