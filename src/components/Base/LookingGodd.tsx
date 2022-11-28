import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import ringIcon from "./../../assets/svg/ring.png";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      height: "479px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    ring: {
      width: "56px",
      height: "56px",
      borderRadius: "100%",
      border: "15px solid #1A1F37",
      marginBottom: "40px",
    },
    descContainer: {
      display: "flex",
      flexDirection: "column",
    },
    descLine: {
      textAlign: "center",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "29px",
      color: "#96A1DB",
    },
  })
);

interface Props {
  className?: any;
}

export default function LookingGood({ className }: Props) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      {/* <img src={ ringIcon}/> */}
      <div className={classes.ring}></div>
      <div className={classes.descContainer}>
        <div className={classes.descLine}>
          Looking good! Start adding items to your new collection.
        </div>
        <div className={classes.descLine}>
          You will not be able to add or remove items after publishing your
          collection.
        </div>
      </div>
    </div>
  );
}
