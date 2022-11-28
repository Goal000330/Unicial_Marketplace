import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { MenuItem, Popover } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 246px)",
      minWidth: "1064px",
      maxWidth: "1064px",
      margin: "40px auto 60px auto",
      position: "relative",
      "& canvas, .react-tile-map ": {
        borderRadius: "15px",
      },
      [theme.breakpoints.up(1366)]: {
        maxWidth: "1064px",
      },
      [theme.breakpoints.down(1200)]: {
        minWidth: "933px",
        maxWidth: "933px",
      },
      [theme.breakpoints.down(960)]: {
        minWidth: "calc(100% - 32px) !important",
        margin: "10px 16px",
      },
      [theme.breakpoints.down(768)]: {
        minWidth: "calc(100% - 32px) !important",
      },
    },
    createBtns: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    resultStatus: {
      fontFamily: "Lato",
      fontSize: "18px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "26px",
      color: "#96A1DB",
    },
    functionBtn: {
      display: "flex",
      alignItems: "center",
    },
    functionIcon: {
      marginLeft: "4px",
    },
    openEditorRoot: {
      marginLeft: "10px",
    },
    openEditorContainer: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(67.71deg, #FF7C4C 0%, #FFB03A 98.37%)",
      width: "128px",
      height: "34px",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20.4px",
      borderRadius: "100px",
    },

    //noitems realte start
    noItemsRoot: {
      marginTop: "20px",
    },
    noItemsContainer: {
      borderRadius: "10px",
      padding: "0px 0px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    noItemsInfoContainer: {},
    noItemsTitle: {
      color: "white",
      fontSize: "24px",
      fontWeight: 600,
      textAlign: "center",
      fontFamily: "Montserrat",
      lineHeight: "50px",
    },
    noItemsDesc: {
      color: "#96A1DB",
      fontSize: "18px",
      lineHeight: "29px",
      fontWeight: 400,
      textAlign: "center",
      width: "500px",
      margin: "8px auto 58px",
    },
    CardsContainer: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down(700)]: {
        display: "block",
      },
    },
    CardContainer: {
      width: "285px",
      height: "285px",
      [theme.breakpoints.down(700)]: {
        marginBottom: "50px",
      },
    },
    MarginRight: {
      marginRight: "67px",
      [theme.breakpoints.down(700)]: {
        marginRight: "0px",
      },
    },
    //noitems realte end

    //plus dropdown relate start
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      "&:hover": {
        color: "red !important",
      },
    },
    activeLabel: {
      color: "white",
    },
    showmoreContent: {
      marginTop: "15px",
      justifyContent: "center",
      width: "100%",
      flexFlow: "row nowrap",
      display: "flex",
    },
    displayNone: {
      display: "none",
    },
    //plus dropdown relate end
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
      },
    },
  })
);

export const StyledCollectionPopover = withStyles({
  paper: {
    backgroundColor: "#1A1F37",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05 )",
    marginBottom: "70px",
    borderRadius: "5px",
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
  },
})(MenuItem);
