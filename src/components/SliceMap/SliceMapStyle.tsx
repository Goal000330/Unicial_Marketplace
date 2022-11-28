import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  mapRoot: {
    position: "relative",
    [theme.breakpoints.down(768)]: {
      margin: "0px calc( (100% - 420px) / 2)",
    },
    [theme.breakpoints.down(501)]: {
      margin: "0px calc( (100% - 329px) / 2)",
    },
  },
}));
