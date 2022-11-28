import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

export const AdminTopTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: "1px solid #67637033",
      backgroundColor: "#18141a",
      marginBottom: "0px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "65px",
      color: "#fff",
      [theme.breakpoints.down(769)]: {
        marginTop: "22px",
        marginBottom: "22px",
        display: "contents",
      },
    },
    container: {
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      display: "block",
      maxWidth: "100% !important",
      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        marginLeft: "0px !important",
        marginRight: "0px !important",
        marginTop: "22px !important",
        marginBottom: "22px !important",
      },
    },
    tabsLeft: {
      fontSize: "14px",
      [theme.breakpoints.down(769)]: {
        display: "inline-grid",
      },
    },
  })
);

export const StyledTopTabBtn = withStyles((theme) => ({
  root: {
    color: "white",
    position: "relative",
    display: "inline-block",
    padding: "16px 0px",
    marginRight: "32px",
    fontSize: "17px",
    fontFamily: "Lato",
    lineHeight: "26px",
    letterSpacing: "-0.2px",
    cursor: "pointer",
    textTransform: "none",
    borderBottom: "3px solid #18141a",
    marginBottom: "-2px",
    minWidth: "35px",
    [theme.breakpoints.down(769)]: {
      padding: "0px",
      marginBottom: "6px",
    },
    "&.Mui-disabled": {
      borderBottom: "3px solid #ff2d55",
      borderRadius: "0px",
      color: "white",
      [theme.breakpoints.down(769)]: {
        borderBottom: "none",
        borderLeft: "2px solid #ff2d55",
      },
    },
    "& .MuiButton-label": {
      textAlign: "left",
      [theme.breakpoints.down(769)]: {
        fontWeight: 600,
        fontSize: "15px",
        marginRight: "32px",
        marginBottom: "0px",
        paddingLeft: "16px",
      },
    },
  },
}))(Button);
