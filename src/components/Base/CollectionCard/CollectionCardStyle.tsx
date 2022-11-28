import {
  createStyles,
  MenuItem,
  Popover,
  Theme,
  withStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const CollectionCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      padding: "9px 9px 21px",
      overflow: "hidden",
      minWidth: "200px",
      marginBottom: "20px",
      "&:hover": {
        transform: "translateY(-2px)",
        cursor: "pointer",
        "& $moreIcon": {
          display: "block",
        },
      },
    },
    yellowTop: {
      width: "100%",
      height: "51px",
      borderTopRightRadius: "14px",
      borderTopLeftRadius: "14px",
      backgroundColor: "#DFB140",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
    },
    imageContainer: {
      width: "100%",
      backgroundColor: "#21263F",
      borderRadius: "15px",
      marginBottom: "12px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
    },
    moreIcon: {
      position: "absolute",
      right: "20px",
      top: "10px",
      display: "none",
      "& i": {
        Color: "#C4C4C4",
      },
    },
    image: {
      [theme.breakpoints.up(1200)]: {
        maxWidth: "150px",
        maxHeight: "150px",
      },
      [theme.breakpoints.down(1200)]: {
        width: "100%",
        alignSelf: "self-end",
      },
      [theme.breakpoints.down(960)]: {
        width: "100%",
        alignSelf: "self-end",
      },
    },
    nameContainer: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      color: "white",
      marginBottom: "10.8px",
      marginLeft: "9px",
      textAlign: "left",
    },
    descContainer: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: "#96A1DB",
      marginLeft: "9px",
      display: "flex",
    },
    divide: {
      width: "1px",
      height: "15px",
      borderRight: "1px solid #96A1DB",
      margin: "1px 5px 0px",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listLabel: {
      fontSize: "15px",
      lineHeight: "15px",
      fontWeight: 600,
      fontStyle: "normal",
      color: "#96A1DB",
      fontFamily: "Montserrat",
    },
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
      },
    },
    editContainerShow: {
      opacity: 100,
    },
  })
);

export const StyledDeletePopover = withStyles({
  paper: {
    backgroundColor: "#1A1F37",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05 )",
    marginBottom: "70px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "187px",
    top: "419px",
    marginTop: "15px",
  },
})(Popover);

export const StyledDeleteItem = withStyles({
  root: {
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "187px",
    padding: "18px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      "& $listLabel": {
        color: "white !important",
      },
    },
  },
})(MenuItem);
