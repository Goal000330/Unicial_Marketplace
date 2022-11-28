import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const SelectSpaceStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "1064px",
      margin: "10px auto 60px auto",
      position: "relative",
      "& canvas, .react-tile-map ": {
        borderRadius: "15px",
      },
      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        width: "calc(100% - 32px) !important",
      },
    },
    btnPart: {
      marginTop: "50px",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "space-between",
    },
    backButton: {
      marginLeft: "10px",
      display: "flex",
    },
    clearBtn: {
      marginLeft: "16px",
      minWidth: "160px",
      width: "160px",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      [theme.breakpoints.down(769)]: {
        marginLeft: "0px",
        order: 1,
      },
    },
    createBtnContainer: {
      display: "flex",
      justifyContent: "end",
      marginBottom: "50px",
    },
    createBtn: {
      width: "200px",
    },
    LandMap: {
      width: "100%",
    },
    LandMapContent: {
      position: "relative",
      height: "400px",
      [theme.breakpoints.down(768)]: {
        margin: "0px calc( (100% - 400px) / 2)",
      },
      [theme.breakpoints.down(501)]: {
        margin: "0px calc( (100% - 300px) / 2)",
      },
    },

    cardContainer: {
      marginTop: "20px",
      padding: "10px",
    },
    cardTitle: {
      marginTop: "10px",
      color: "white",
      fontSize: "30px",
      fontFamily: "Montserrat",
    },
    cardSelect: {
      marginTop: "20px",
      fontSize: "20px",
      opacity: "60%",
      fontFamily: "Lato",
    },
    cards: {
      marginTop: "20px",
    },

    buttons: {
      display: "flex",

      [theme.breakpoints.down(769)]: {
        width: "100%",
        display: "grid",
      },
    },
    bidchange: {
      minWidth: "160px",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      [theme.breakpoints.down(769)]: {
        marginLeft: "0px",
        order: 1,
      },
    },
    cancelchange: {
      marginLeft: "16px",
      minWidth: "160px",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      [theme.breakpoints.down(769)]: {
        order: 2,
        marginTop: "15px",
        marginLeft: "0px",
      },
    },
    btns: {
      display: "flex",
      marginTop: "50px",
    },
  })
);
