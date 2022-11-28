import { Theme, makeStyles } from "@material-ui/core/styles";
import bothIcon from "./../../../src/assets/svg/both.png";
import maleIcon from "./../../../src/assets/svg/male.png";
import femaleIcon from "./../../../src/assets/svg/female.png";
import { genderData } from "../../config/constant";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "100px",
    border: "1px solid #373F66",
    padding: "11px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "#70708F",
  },
  activedColor: {
    backgroundColor: "#41A6EF",
    border: "1px solid #141b31",
    color: "white !important",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    marginLeft: "11px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
  },
}));

interface ButtonProps {
  children?: React.ReactNode;
  letter: string;
  className?: any;
  onClick?: () => void;
  actived?: boolean;
}

const ActionButton = ({
  children,
  letter,
  className,
  onClick,
  actived,
}: ButtonProps) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.activedColor]: actived,
      })}
      onClick={onClick}
    >
      <div className={classes.container}>
        {letter === genderData.both ? (
          <img src={bothIcon} />
        ) : letter === genderData.male ? (
          <img src={maleIcon} />
        ) : (
          <img src={femaleIcon} />
        )}
        <span className={classes.letter}>{letter}</span>
      </div>
    </div>
  );
};

export default ActionButton;
