import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const LandParcelsStyle = makeStyles((theme: Theme) =>
  createStyles({
    showmoreContent: {
      marginTop: "15px",
      justifyContent: "center",
      width: "100%",
      flexFlow: "row nowrap",
      display: "flex",
    },
    displayNone: {
      display: "none",
    }
  })
);
