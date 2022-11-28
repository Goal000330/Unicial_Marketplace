import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import leftArrow from "../../assets/svg/leftarrow_icon.svg";
import multipylIcon from "../../assets/svg/multiply_icon.svg";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      minWidth: "35px",
      width: "35px",
      height: "35px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.1)",
      opacity: 0.9,
      border: "1px solid rgba(255, 255, 255, 0.18)",
      borderRadius: "66px",
      "& i": {
        fontSize: "22px",
        fontWeight: 100,
      },
    },
  })
);

interface Props {
  className?: any;
  onBack?: () => void;
  type?: string;
}

export default function RoundBackBtn({ className, onBack, type }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={onBack}>
      {type === "multiply" ? (
        <img src={multipylIcon} alt='multiplyicon' />
      ) : (
        <img src={leftArrow} alt='leftarrowicon' />
      )}
    </div>
  );
}
