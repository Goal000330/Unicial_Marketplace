import { createStyles, Theme, withStyles } from "@material-ui/core";
import { Popover } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
export const HeaderSignInBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    container: {
      flex: "1 1 auto",
      justifyContent: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    notificationicon: {
      fill: "white",
      fontSize: "20px",
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    userMenu: {
      display: "flex",
      position: "relative",
      textAlign: "left",
      outline: "none",
    },
    accountWrapper: {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    mana: {
      color: "#70708F",
      flex: "none",
      display: "flex",
      margin: "0 20px 0 0",
      fontSize: "14px",
      lineHeight: "18px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      textDecoration: "none",
    },
    symbol: {
      fontWeight: 700,
      color: "#ff2d55",
      fontStyle: "normal",
      paddingRight: "0.3em",
      transform: "translateY(-0.06em)",
      display: "flex",
      alignItems: "center",
      marginRight: "4px",
    },
    maticIcon: {
      width: "13px",
      height: "13px",
    },
    avatarContainer: {
      backgroundColor: "#37343d",
      borderRadius: "100%",
      cursor: "pointer",
      width: "42px",
      height: "42px",
      overflow: "hidden",
      [theme.breakpoints.down(769)]: {
        width: "36px",
        height: "36px",
      },
    },
    itemContainer: {
      display: "flex",
      alignItems: "center",
    },
    itemIcon: {
      fontSize: "20px",
    },
    itemLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 500,
      color: "white",
    },
    accountInfo: {
      color: "white",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #24212933",
      padding: "12px 16px",
    },
    imageContainer: {
      marginRight: "10px",
      backgroundColor: "#37343d",
      borderRadius: "100%",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
      width: "32px",
      height: "32px",
    },
    imageLabel: {
      fontSize: "16px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 500,
      color: "white",
    },
    ringButton: {
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    moneyContainer: {
      [theme.breakpoints.up(900)]: {
        display: "none !important",
      },
    },
  })
);

export const StyledRingButton = withStyles({
  root: {
    borderRadius: "5px 0px 0px 5px",
    padding: "7px 11px",
    minWidth: "35px",
    marginRight: "7px",
    cursor: "default",
  },
})(Button);

export const StyledAvatarPopover = withStyles({
  paper: {
    backgroundColor: "#1a1f37",
    marginTop: "13px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "168px",
  },
})(Popover);
