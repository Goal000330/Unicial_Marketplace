import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import textureImg from "./../../assets/svg/texture.png";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#282E4E",
      border: "1px solid #282E4E",
      cursor: "pointer",
      borderRadius: "15px",
      width: "100%",
      height: "58px",
      padding: "0px 24px",
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      "&:hover": {
        transform: "translateY(-1px)",
        "& $greyEye": {
          display: "block",
        },
      },
    },
    activedroot: {
      border: "1px solid #FFFFFF12 !important",
    },
    imgRoot: {
      width: "34px",
      height: "34px",
      borderRadius: "5px",
    },
    name: {
      color: "white",
      fontFamily: "Lato",
      fontSize: "17px",
      lineHeight: "20.4px",
      marginLeft: "15px",
    },
    greyEye: {
      position: "absolute",
      right: "20px",
      top: "19px",
      width: "21px",
      height: "18px",
      color: "#c2b8b8",
      display: "none",
    },
    whiteEye: {
      position: "absolute",
      right: "20px",
      top: "19px",
      width: "21px",
      height: "18px",
      color: "white",
    },
    yellowPart: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      backgroundColor: "#7F64E2",
      height: "20%",
      width: "100%",
    },
    imgContainer: {
      borderBottomRightRadius: "5px",
      borderBottomLeftRadius: "5px",
      height: "80%",
      width: "100%",
    },
  })
);

interface Props {
  className?: any;
  name?: any;
  onClick?: any;
}

export default function ItemRow({ className, name, onClick }: Props) {
  const classes = useStyles();
  // const [activedStatus, setActivedStatus] = useState(false);
  const [showEyeStatus, setShowEyeStatus] = useState(false);

  const handleEye = (status: boolean) => {
    setShowEyeStatus(status);
  };
  return (
    <div
      className={clsx(
        classes.root,
        className
        // { [classes.activedroot]: activedStatus === true}
      )}
      onClick={onClick}
    >
      {/* <img src={textureImg} className={classes.imgRoot} /> */}
      <div className={classes.imgRoot}>
        <div className={classes.yellowPart}></div>
        <img src={textureImg} className={classes.imgContainer} />
      </div>
      <span className={classes.name}>{name}</span>
      {showEyeStatus === false ? (
        <VisibilityOutlinedIcon
          className={classes.greyEye}
          onClick={() => handleEye(true)}
        />
      ) : (
        <VisibilityOutlinedIcon
          className={classes.whiteEye}
          onClick={() => handleEye(false)}
        />
      )}
    </div>
  );
}
