import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const AccountBannerStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      height: "390px",
      position: "relative",
    },
    ownerInfoRoot: {
      margin: "auto",
      textAlign: "center",
      padding: "0px 16px",
    },
    imgRoot: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imgContainer: {
      width: "96px",
      height: "96px",
      overflow: "hidden",
      borderRadius: "100%",
      backgroundColor: "#37343d",
    },
    ownerImg: {
      width: "100%",
      height: "100%",
    },
    ownerName: {
      marginTop: "16px",
      fontSize: "28px",
      lineHeight: "34px",
    },
    ownerAddress: {
      cursor: "pointer",
      marginTop: "12px",
    },
  })
);
