import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "5px",
      border: "1px solid #373F66",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "60px",
      height: "40px",
      cursor: "pointer",
    },
    activedColor: {
      backgroundColor: "#41A6EF",
      border: "1px solid #141b31",
      color: "white !important",
    },
  })
);

interface Props {
  letter?: string;
  className?: any;
  onClick?: any;
  actived?: any;
}

export default function QuestionBtn({
  letter,
  className,
  onClick,
  actived,
}: Props) {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, className, {
        [classes.activedColor]: actived,
      })}
      onClick={onClick}
    >
      {letter}
    </div>
  );
}
