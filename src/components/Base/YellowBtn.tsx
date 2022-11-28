import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface Props {
  letter?: string;
  className?: any;
  onClick?: any;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createBtnRoot: {
      width: "160px",
      height: "42px",
      cursor: "pointer",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
      color: "white",
      fontFamily: "Lato",
      fontSize: "17px",
      lineHeight: "20..4px",

      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    disableColor: {
      opacity: "60%",
      cursor: "default",
      "&:hover": {
        transform: "translateY(0px)",
      },
    },
  })
);

export default function YellowBtn({
  letter,
  className,
  onClick,
  disabled,
}: Props) {
  const classes = useStyles();
  const onEmpty = () => {};
  return (
    <div
      className={clsx(classes.createBtnRoot, className, {
        [classes.disableColor]: disabled,
      })}
      onClick={disabled ? onEmpty : onClick}
    >
      {letter}
    </div>
  );
}
