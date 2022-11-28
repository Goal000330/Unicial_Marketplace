import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  auctionInfo: {
    maxWidth: "1064px",
    margin: "10px auto 40px auto",
    position: "relative",
  },
  auctionBalance: {
    marginBottom: "40px",
  },
  root: {
    minHeight: "calc(100vh - 246px)",
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
  LandMap: {
    // display: "grid",
    margin: "0px auto",
    width: "100%",
  },
  LandMapContent: {
    position: "relative",
    height: "400px",
    [theme.breakpoints.down(768)]: {
      margin: "0px calc( (100% - 420px) / 2)",
    },
    [theme.breakpoints.down(501)]: {
      margin: "0px calc( (100% - 300px) / 2)",
    },
  },
  contractDescription: {
    marginTop: "35px",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(992)]: {
      display: "block",
    },
  },
  leftDescription: {
    flex: "1 1",
    marginRight: "48px",
    [theme.breakpoints.down(992)]: {
      width: "100%",
    },
  },
  rightDescription: {
    minWidth: "320px",
    [theme.breakpoints.down(992)]: {
      width: "100%",
      marginTop: "20px",
    },
  },
  items: {
    marginBottom: "40px",
  },
  tableRoot: {
    // width: "820px ",
    width: "100%",
    "& .MuiTableContainer-root": {
      width: "auto",
    },
  },
  BidsTitle: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "16px",
    color: "#676370",
  },
  countdownItem: {
    width: "70px",
    padding: "10px 0px 15px 0px",
  },
  timeItem: {
    color: "#12232f",
    fontSize: "36px",
    lineHeight: "53px",
    fontWeight: 800,
    position: "relative",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    margin: "20px 0px",
    display: "block",
  },
  actionButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
    [theme.breakpoints.down(769)]: {
      display: "block",
      width: "100%",
      justifyContent: "space-around",
    },
  },
  actionButtons: {
    display: "flex",
    justifyContent: "end",
    
    [theme.breakpoints.down(992)]: {
      display: "block",
    },
    [theme.breakpoints.down(769)]: {
      display: "block",
      width: "100%",
      justifyContent: "space-around",
    },
  },
  normalBtn: {
    margin: "20px 10px",
    [theme.breakpoints.down(769)]: {
      margin: "15px 0px",
    },
  },
  gradientBtn: {
    margin: "20px 10px",
    [theme.breakpoints.down(769)]: {
      margin: "15px 0px",
    },
  },
  backBtnPosition: {
    marginTop: "5px",
  },
  callmadeicon: {
    width: "20px",
    height: "20px",
  },
}));
