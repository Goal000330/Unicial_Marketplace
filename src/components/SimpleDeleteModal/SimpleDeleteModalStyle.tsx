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
    padding: "30px 35px",
    position: "fixed",
    width: "620px",
    height: "auto",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  title: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "50px",
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: "12px",
  },
  mainContainer: {},
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
    [theme.breakpoints.down(620)]: {
      display: "block",
    },
  },
  cancelBtn: {
    width: "100%",
    marginRight: "20px",
    // height: "54px",
    [theme.breakpoints.down(620)]: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  okBtn: {
    width: "100%",
    // height: "54px",
    [theme.breakpoints.down(620)]: {
      width: "100%",
      marginBottom: "20px",
    },
  },
}));
