import {
  createStyles,
  withStyles,
  Theme,
  Popover,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const GeneralListDropdownStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: "#21263f",
      backdropFilter: "blur(20)",
      display: "flex",
      width: "100%",
      height: "auto",
    },
    container: {
      width: "100%",
    },
    nftfillter: {
      position: "relative",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topbar: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      justifyContent: "end",
    },
    textfilter: {
      display: "flex",
      width: "175px",
      // alignItems: "center",
      // [theme.breakpoints.down(768)]: {
      //   display: "none",
      // },
    },
    searchIcon: {
      // height: "14px",
      // marginTop: "8px",
      marginRight: "10px",
    },
    searchinput: {
      fontSize: "14px",
      color: "white",
      backgroundPositionY: "4px",
      lineHeight: "17px",
      background: "none",
      fontWeight: 400,
      border: "none",
      borderRadius: "6px",
      padding: "6px 6px 6px 0px",
      outline: "none",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "8px",
      overflow: "visible",
    },
    topbarFilter: {
      marginLeft: "2px",
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
      "& .MuiSwitch-thumb": {
        width: "12px",
        height: "12px",
        marginTop: "3px",
        marginLeft: "3px",
      },
    },

    openfilter: {
      display: "none",
      [theme.breakpoints.down(768)]: {
        display: "flex",
        position: "relative",
        cursor: "pointer",
      },
    },
    openfilterLabel: {
      background: "linear-gradient(to right, #7F64E2 10%, #41A6EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginRight: "10px",
      fontWeight: 500,
    },
    filterIcon: {
      width: "20px",
      height: "20px",
    },
    listRoot: {
      textTransform: "none",
      display: "inline-block",
      transition: "none",
      cursor: "pointer",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      marginRight: "10px",
    },
    gradientlistLabel: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      background: "linear-gradient( #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    listLabel: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      opacity: "70%",
      "&:hover": {
        opacity: "100%",
        color: "white",
      },
    },
    selectedListLabel: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#ffffff",
    },
    switch: {
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      },
      "& .MuiSwitch-root": {
        padding: "12.5px 12px",
      },
    },
    filterDownArrow: {
      "& i": {
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginTop: "4px",
        marginLeft: "8.34px",
        fontSize: "10px",
      },
    },
    filtericonContainer: {
      "& .MuiSvgIcon-root": {
        width: "18px",
        height: "18px",
        fill: "#41A6EF",
      },
    },
    activeLabel: {
      color: "white",
      opacity: "100%",
    },
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
      },
    },
  })
);

export const StyledFormControlLabel = withStyles({
  label: {
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient(to right, #FF7C4C, #FFB03A)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(FormControlLabel);

export const StyledListPopover = withStyles({
  paper: {
    backgroundColor: "#1A1F37",
    marginBottom: "70px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "168px",
    top: "419px",
    marginTop: "7px",
  },
})(Popover);

export const StyledMenuItem = withStyles({
  root: {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "210px",
    padding: "10px 16px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      backgroundColor: "#24212933",
    },
  },
})(MenuItem);
