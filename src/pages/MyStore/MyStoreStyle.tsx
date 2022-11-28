import { Theme, makeStyles } from "@material-ui/core/styles";
export const MyStoreStyle = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 2,
    width: "1064px",
    margin: "10px auto 60px auto",
    position: "relative",
    display: "flex",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "933px",
    },
    [theme.breakpoints.down(992)]: {
      width: "calc(100% - 32px) !important",
    },
    [theme.breakpoints.down(769)]: {
      width: "calc(100% - 32px) !important",
    },
  },
  leftPart: {
    width: "264px",
    marginRight: "20px",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  rightPart: {
    width: "calc(100% - 268px)",
    [theme.breakpoints.down(885)]: {
      paddingRight: "16px",
    },

    [theme.breakpoints.down(769)]: {
      width: "100%",
      paddingRight: "0px",
    },
  },
  statsContainer: {
    marginBottom: "42px",
  },
  title: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "50px",
    letterSpacing: "2%",
    marginTop: "-7px",
    marginBottom: "16px",
  },
  generalStats: {
    marginBottom: "20px",
  },
  staginContainer: {},
  MobileSidebarContainer: {
    display: "none",
    [theme.breakpoints.down(769)]: {
      display: "block",
      marginTop: "22px",
    },
  },
}));
