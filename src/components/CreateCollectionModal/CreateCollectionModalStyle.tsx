import { Theme, makeStyles } from "@material-ui/core/styles";

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
    padding: "30px 35px 53px",
    position: "fixed",
    width: "620px",
    height: "auto",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(640)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
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
    padding: "0px 50px",
    [theme.breakpoints.down(640)]: {
      padding: "0px 20px",
    },
  },
  descContainer: {
    color: "#96A1DB",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "30px",
  },
  name: {
    color: "#96A1DB",
    opacity: "50%",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.4px",
    textAlign: "left",
    marginBottom: "8px",
  },
  widthFull: {
    width: "100%",
    marginBottom: "11px",
  },
  createbtn: {
    width: "100%",
    marginTop: "23px",
  },
}));
