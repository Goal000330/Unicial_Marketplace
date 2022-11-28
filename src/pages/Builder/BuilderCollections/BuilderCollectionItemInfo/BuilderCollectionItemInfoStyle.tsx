import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const BuilderCollectionItemInfoStyle = makeStyles((theme: Theme) =>
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
      [theme.breakpoints.down(660)]: {
        display: "block",
      },
    },
    collectionNameContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(660)]: {
        justifyContent: "left",
        marginBottom: "70px",
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
      [theme.breakpoints.down(660)]: {
        justifyContent: "left",
        marginBottom: "10px",
      },
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
        color: "white",
      },
    },
    openEditor: {
      marginRight: "6px",
    },
    //totalInfo
    totalInfoContainer: {
      display: "flex",
      marginTop: "36px",
      [theme.breakpoints.down(560)]: {
        display: "block",
      },
    },
    productContainer: {
      width: "303px",
      height: "303px",
      display: "flex",
      flexDirection: "column",
      marginRight: "57px",

      [theme.breakpoints.down(560)]: {
        width: "100%",
        height: "auto",
        marginBottom: "30px",
      },
    },
    yellowPart: {
      borderTopLeftRadius: "14px",
      borderTopRightRadius: "14px",
      width: "100%",
      height: "20%",
      backgroundColor: "#DFB140",
      [theme.breakpoints.down(560)]: {
        height: "40px",
      },
    },
    imgContainer: {
      width: "100%",
      height: "80%",
      borderBottomLeftRadius: "14px",
      borderBottomRightRadius: "14px",
    },
    img: {
      width: "100%",
      height: "100%",
      borderBottomLeftRadius: "14px",
      borderBottomRightRadius: "14px",
    },
    InfoContainer: {},
    itemContainer: {
      marginBottom: "23px",
    },
    title: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "18px",
      color: "#96A1DB",
      opacity: "50%",
      marginBottom: "9px",
    },
    content: {
      fontFamily: "Lato",
      fontWeight: 600,
      fontSize: "23px",
      lineHeight: "27.6px",
      color: "#white",
      marginBottom: "43px",
    },
    gradientContent: {
      cursor: "pointer",
      fontFamily: "Lato",
      fontWeight: 600,
      fontSize: "23px",
      lineHeight: "27.6px",
      background: "linear-gradient(to right, #FF7C4C 10%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })
);
