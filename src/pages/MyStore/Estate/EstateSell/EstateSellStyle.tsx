import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "1064px",
    paddingTop: "50px",
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
      minWidth: "700px",
      padding: "50px 16px",
    },
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
    },
    [theme.breakpoints.down(550)]: {
      minWidth: "calc(100% - 32px) !important",
    },
  },
  container_root: {
    width: "100%",
  },
  backButton: {
    marginBottom: "50px",
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
    textAlign: "left",
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
    height: "265.58px",
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
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      fontSize: "28px",
    },
  },
  subtitle: {
    marginBottom: "24px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#96A1DB",
  },
  form_field: {
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
      fontStyle: "Regular",
      fontSize: "16px",
      lineHeight: "19px",
      align: "Left",
      verticalAlign: "Top",
    },
  },
  subheader_label: {
    color: "#96A1DB",
    fontStyle: "Regular",
    fontSize: "12px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    opacity: "50%",
    marginBottom: "8px",
  },
  manafield: {
    display: "flex",
  },
  datePicker: {
    marginRight: "20px",
    display: "flex",
    height: "44px",
    alignContent: "center",
    padding: "5px",
    border: "1px solid #373F66",
    borderRadius: "100px",

    color: "white",
    "&:before": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      borderBottom: "none",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
    },
    "&.MuiFormControl-marginNormal": {
      marginTop: "0px",
      marginBottom: "8px",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
  symbol: {
    fontWeight: 700,
    fontSize: "21px",
    color: "#ff2d55",
    fontStyle: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    display: "inline-block",
    // marginRight: "4px",
    marginLeft: "5px",
    marginBottom: "6px",
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
}));

export const StyledInput = withStyles((theme) => ({
  root: {
    marginRight: "20px",
    display: "flex",
    height: "44px",
    alignContent: "center",
    padding: "10px",
    border: "1px solid #373F66",
    borderRadius: "100px",
    alignItems: "center",
    color: "white",
    "&:before": {
      border: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
    },
    "& img": {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19px",
      fontStyle: "normal",
      padding: "0em 1em",
      transform: "translateY(-0.06em)",
      display: "inline-block",
      marginTop: "2px",
      background: "linear-gradient(to right, #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      borderRight: "1px solid #373F66",
    },
  },
}))(Input);
