import { Theme, makeStyles } from "@material-ui/core/styles";
export const CollectiblesStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    minWidth: "1064px",
    maxWidth: "1064px",
    margin: "10px auto 60px auto",
    position: "relative",
    display: "flex",
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
      margin: "10px 16px",
    },
    [theme.breakpoints.down(768)]: {
      minWidth: "calc(100% - 32px) !important",
    },
  },
  leftPart: {
    width: "264px",
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  CollectibleFilterContainer: {
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  rightPart: {
    width: "calc(100% - 264px)",
    paddingLeft: "20px",
    [theme.breakpoints.down(768)]: {
      width: "100%",
      paddingLeft: "0px",
    },
  },
  products: {
    display: "flex",
    justifyContent: "space-between",
  },
  product: {
    width: "32%",
  },
  showmoreContent: {
    marginTop: "15px",
    justifyContent: "center",
    width: "100%",
    flexFlow: "row nowrap",
    display: "flex",
  },
}));
