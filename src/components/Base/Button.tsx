import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: "pointer",
    fontSize: "13px",
    lineHeight: "18px",
    padding: "7px 12px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    borderRadius: "5px",
  },
  darkColor: {
    background: "#37333d",
    "&:hover": {
      background: "#ff2d55",
    },
  },
  redColor: {
    background: "#ff2d55",
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  className?: any;
}

const Button = ({ children, color, className }: ButtonProps) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.darkColor]: color === "dark",
          [classes.redColor]: color === "red",
        })}
      >
        {children}
      </div>
    </>
  );
};

export default Button;
