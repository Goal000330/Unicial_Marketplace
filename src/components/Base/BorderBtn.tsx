import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface Props {
  letter?: string;
  className?: any;
  onClick?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createBtnRoot: {
      width: "160px",
      height: "42px",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    createBtnContainer: {
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "white",
      fontFamily: "Lato",
      fontSize: "17px",
      lineHeight: "20.4px",
      border: "double 2px transparent",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
    },
  })
);

export default function BorderBtn({ letter, className, onClick }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.createBtnRoot, className)} onClick={onClick}>
      <div className={classes.createBtnContainer}>{letter}</div>
    </div>
  );
}
