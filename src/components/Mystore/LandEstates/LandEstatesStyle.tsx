import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const LandEstatesStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    createBtnContainer: {
      display: "flex",
      justifyContent: "end",
      marginRight: "20px",
      marginBottom: "50px",
      [theme.breakpoints.down(769)]: {
        justifyContent: "start",
      },
    },
    createBtn: {
      width: "200px",
      marginLeft: "20px",
      // [theme.breakpoints.down(769)]: {
      //   marginLeft: "0px",
      // },
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
  })
);
