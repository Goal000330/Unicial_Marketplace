import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#282E4E, #282E4E), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      color: "#ffffff",
      textAlign: "center",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "34px",
      "& i": {
        marginTop: "1px",
        width: "16px",
        height: "16px",
        color: "#ffffff",
      },
    },
  })
);

interface Props {
  className?: any;
  onClick?: () => void;
  type?: string;
}

export default function OvalBtn({ className, onClick, type }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={onClick}>
      {type === "toparrow" ? (
        <i className="far fa-arrow-from-bottom"></i>
      ) : (
        <i className="far fa-plus"></i>
      )}
    </div>
  );
}
