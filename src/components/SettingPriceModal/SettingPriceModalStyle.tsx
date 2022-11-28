import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
import { Input, Tooltip } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalRoot: {
    maxHeight: "600px",
    overflow: "auto",
    padding: "30px 84px",
    position: "fixed",
    width: "620px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(630)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
      padding: "30px 45px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
    cursor: "pointer",
    backgroundColor: "#4a4f66",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    width: "35px",
    height: "35px",
    "& i": {
      fontWeight: 100,
      maginTop: "3px",
    },
  },
  title: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "50px",
    color: "#FFFFFF",
  },
  mainContainer: {
    margin: "8px 0px 0px",
    height: "auto",
    borderRadius: "12px",
  },
  payTypeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
  },
  titleLetter: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.4px",
    color: "#96A1DB",
    marginBottom: "8px",
    textAlign: "left",
    opacity: "50%",
  },
  formContainer: {
    width: "100%",
    marginBottom: "27px",
    "& .MuiInputBase-root.Mui-disabled": {
      color: "transparent !important",
    },
  },
  infoIcon: {
    cursor: "pointer",
    marginLeft: "3px",
  },
  addressImg: {
    width: "20px",
    height: "20px",
    borderRadius: "3px",
  },
  subBtn: {
    marginTop: "13px",
    width: "100%",
  },
  nonefreeBtn: {
    marginRight: "12px",
  },
  disablecursor: {
    cursor: "not-allowed",
  },
  backIcon: {
    position: "absolute",
    top: "20px",
    right: "30px",
  },
  freePlaceholderLetter: {
    color: "#575f8a",
    fontSize: "16px",
    lineHeight: "19px",
    marginLeft: "20px",
  },
  noneMarginLeft: {
    marginLeft: "0px",
  },
}));
export const StyledInput = withStyles((theme) => ({
  root: {
    display: "flex",
    height: "44px",
    width: "100%",
    alignContent: "center",
    padding: "22px",
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
      paddingLeft: "7.6px",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      marginTop: "3px",
      marginRight: "20px",
    },
    "& .Mui-disabled": {
      color: "transparent !important",
    },
    "& img": {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19px",
      fontStyle: "normal",
      transform: "translateY(-0.06em)",
      display: "inline-block",
      background: "linear-gradient(to right, #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
}))(Input);

export const StyledTooltip = withStyles({
  popper: {
    cursor: "pointer",
    zIndex: 99999,
  },
  tooltip: {
    color: "white",
    fontSize: "12px",
    padding: "10px 10px",
    fontFamily: "Lato",
    backgroundColor: "#21263F",
    textAlign: "left",
  },
  arrow: {
    color: "#21263F !important",
  },
})(Tooltip);
