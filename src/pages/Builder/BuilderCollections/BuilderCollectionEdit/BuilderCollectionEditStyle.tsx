import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const BuilderCollectionEditStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 246px)",
      minWidth: "1064px",
      maxWidth: "1064px",
      margin: "46px auto 60px auto",
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
        margin: "45px 16px",
      },
      [theme.breakpoints.down(768)]: {
        minWidth: "calc(100% - 32px) !important",
      },
    },
    topContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down(760)]: {
        display: "block",
      },
    },
    collectionNameContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(760)]: {
        justifyContent: "left",
        marginBottom: "40px",
      },
    },
    backBtn: {
      marginRight: "32px",
    },
    nameLetter: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 600,
      lineHeight: "50px",
      fontSize: "40px",
    },
    btnSetContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down(760)]: {
        justifyContent: "left",
      },
    },
    newItemBtnroot: {
      marginRight: "6px",
    },
    newItemBtnContainer: {
      cursor: "pointer",
      width: "160px",
      height: "42px",
      borderRadius: "100px",
      border: "double 1px transparent",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "19.2px",
    },
    plusIcon: {
      //   fontSize: "14px",
    },
    moreIconContainer: {
      cursor: "pointer",
      width: "60px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "25px",
      border: "double 1px transparent",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
    },
    moreIconroot: {
      marginRight: "15px",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
      },
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
    },
    coolnotificationContainer: {
      marginTop: "29px",
    },
    lookingGoodContainer: {
      marginTop: "26px",
    },
    rowsRoot: {
      marginTop: "26px",
    },
    rowContainer: {
      marginBottom: "20px",
    },
  })
);
