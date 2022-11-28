import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95px",
      height: "25px",
      backgroundColor: "#21263F",
      borderRadius: "100px",
      //
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      margin: "5px",
    },
    icon: {
      marginTop: "2px",
    },
    info: {
      fontSize: "15px",
      lineHeight: "17px",
      fontWeight: 600,
      lineHeightStep: "16.8px",
      color: "#96A1DB !important",
      marginRight: "5px",
      fontFamily: "Montserrat",
    },
    darkbackground: {
      backgroundColor: "#21263F !important",
    },
    landspan: {
      fontSize: "15px",
      fontFamily: "Montserrat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      lineHeight: "17px",
    },
  })
);

interface Props {
  count?: number;
  dark?: boolean;
  className?: any;
  onClick?: () => void;
}

export default function LandSize({ count, dark, className, onClick }: Props) {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.darkbackground]: dark,
        })}
      >
        <div className={classes.info}>{count}</div>
        {Number(count) === 1 ? (
          <span className={classes.landspan}>Land</span>
        ) : (
          <span className={classes.landspan}>Lands</span>
        )}
      </div>
    </>
  );
}
