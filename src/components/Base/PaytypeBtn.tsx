import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      borderRadius: "100px",
      border: "1px solid #282E4E",
      height: "30px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#96A1DB",
      fontFamily: "Lato",
      fontSize: "14px",
    },
    activedBorder: {
      border: "double 1px transparent",
      backgroundImage:
        "linear-gradient(#282E4E, #282E4E), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
    },
    letter: {
      margin: "0px 12px 0px",
    },
  })
);

interface Props {
  letter?: string;
  className?: any;
  actived?: boolean;
  onClick?: () => void;
}

export default function PaytypeBtn({
  letter,
  className,
  actived,
  onClick,
}: Props) {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, className, {
        [classes.activedBorder]: actived,
      })}
      onClick={onClick}
    >
      <span className={classes.letter}> {letter}</span>
    </div>
  );
}
