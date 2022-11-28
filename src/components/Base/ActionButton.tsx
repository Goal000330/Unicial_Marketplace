import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: "pointer",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    borderRadius: "25px",
    gridGap: "8px",
    gap: "8px",
    fontSize: "16px",
    lineHeight: "20px",
    justifyContent: "center",
    color: "white",
    maxHeight: "42px",
  },
  darkColor: {
    border: "double 1px transparent",
    borderRadius: "100px",
    backgroundImage:
      "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
    backgroundClip: "content-box, border-box",
    backgroundOrigin: "border-box",
    color: "white",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#28262c",
    },
  },
  lightColor: {
    background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
  disablestatus: {
    opacity: "60%",
    // background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    border: "double 1px transparent",
    borderRadius: "100px",
    backgroundClip: "content-box, border-box",
    backgroundOrigin: "border-box",
    color: "white",
    cursor: "default",
    "&:hover": {
      transform: "translateY(0px)",
    },
  },
  text: {
    margin: "10px 20px",
    display: "flex",
    alignItems: "center",
    "& svg": {
      margin: "0px 5px",
    },
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    align: "Left",
    verticalAlign: "Top",
    textAlign: "center",
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  className?: any;
  onClick?: () => void;
}

const ActionButton = ({
  children,
  color,
  disabled,
  className,
  onClick,
}: ButtonProps) => {
  const classes = useStyles();

  const onEmpty = () => {};

  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.darkColor]: color === "dark",
          [classes.lightColor]: color === "light",
          [classes.disablestatus]: disabled,
        })}
        onClick={!disabled ? onClick : onEmpty}
      >
        <span className={classes.text}>{children}</span>
      </div>
    </>
  );
};

export default ActionButton;
