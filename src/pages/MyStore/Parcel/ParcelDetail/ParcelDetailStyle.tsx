import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "1064px",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      minWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      minWidth: "calc(100% - 32px) !important",
    },
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
    },
    [theme.breakpoints.down(560)]: {
      width: "calc(100% - 32px) !important",
    },
  },
  backBtn: {
    marginBottom: "50px",
  },
  root_container: {
    width: "100%",
  },
  bidCard: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    width: "100%",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  leftCard: {
    marginRight: "50px",
    [theme.breakpoints.down(769)]: {
      marginRight: "0px !important",
      marginBottom: "25px !important",
      width: "100%",
      height: "100%",
    },
  },
  rightCard: {
    flex: "1.25 1 auto",
  },
  tokenImg: {
    width: "100%",
    borderRadius: "15px",
  },
  imgContent: {
    width: "329px",
    height: "265.85px",
    borderRadius: "16px",
    overflow: "hidden",
    display: "inline-block",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "auto",
    },
  },
  title: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "35px",
    lineHeight: "50px",
    fontFamily: "Montserrat",
    letterSpacing: "0.02em",
    marginBottom: "16px",
    [theme.breakpoints.down(769)]: {
      fontSize: "28px",
    },
  },
  subtitle: {
    marginBottom: "50px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    fontFamily: "Lato",

    color: "#96A1DB",
  },
  subtitleNumber: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "17px",
    align: "Left",
    verticalAlign: "Top",
    fontFamily: "Lato",
  },
  form_field: {
    maxWidth: "420px",
    marginBottom: "20px",
    [theme.breakpoints.down(769)]: {
      marginBottom: "30px",
    },
  },
  price_container: {
    minWidth: "auto",
    marginBottom: "-5px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      fontFamily: "Lato",
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "15px",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #28242b",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover": {
      "&:before": {
        borderBottom: "2px solid #28242b",
      },
    },
  },
  date_container: {
    minWidth: "auto",
    //
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      fontFamily: "Lato",
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "15px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #28242b",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover": {
      "&:before": {
        borderBottom: "2px solid #28242b",
      },
    },
  },
  subheader_label: {
    color: "#676370",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 400,
    marginBottom: "6px",
    fontFamily: "Lato",
  },
  manafield: {
    display: "flex",
  },
  symbol: {
    fontSize: "normal",
    marginBottom: "-5px",
    transform: "translateY(-0.06em)",
    display: "inline-block",
    marginLeft: "5px",
  },
  buttons: {
    display: "flex",
    [theme.breakpoints.up(769)]: {
      maxWidth: "380px",
    },
    [theme.breakpoints.down(960)]: {
      flexFlow: "column",
      width: "100%",
      display: "grid",
    },
  },
  bidchange: {
    marginRight: "16px",
    marginTop: "16px",
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    [theme.breakpoints.down(960)]: {
      minWidth: "100%",
      marginLeft: "0px",
      order: 1,
    },
  },
  cancelchange: {
    marginTop: "16px",
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    marginRight: "16px",
    color: "#FFFFFF",
    [theme.breakpoints.down(960)]: {
      order: 2,
      minWidth: "100%",
    },
  },
  viewNeedSignIn: {
    display: "block",
  },
  unviewNeedSignIn: {
    display: "none",
  },
  viewBuy: {
    display: "block",
  },
  unviewBuy: {
    display: "none",
  },
  bidDetail: {
    marginTop: "50px",
  },
  bidsTitle: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
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
}));
