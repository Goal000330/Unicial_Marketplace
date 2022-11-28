import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import moreIcon from "./../../assets/svg/more.png";
import { useState, useEffect } from "react";
import DeleteModal from "./../../../src/components/DeleteModal/DeleteModal";


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
      position: "relative",
    },
    moreIconContainer: {
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    deleteContainer: {
      position: "absolute",
      backgroundColor: "#1A1F37",
      borderRadius: "6px",
      width: "187px",
      height: "51px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "17px",
      right: "-6px",
      zIndex: 1,
    },
    deleteLetter: {
      color: "white",
      fontFamily: "Montserrat",
      fontSize: "15px",
      lineHeight: "15px",
      fontWeight: 600,
    },
    Nonedisplay: {
      display: "none",
    },
  })
  );
  
  interface Props {
    //   letter?: string;
    className?: any;
    onClick?: () => void;
    //   onClick?: any;
  }
  export default function DeletemoreIcon({ className, onClick }: Props) {
    const classes = useStyles();
  const [openDeleteStatus, setOpenDeleteStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const handleMoreIcon = () => {
    setOpenDeleteStatus(!openDeleteStatus);
  };

  const handleblur = () => {
    alert("yes");
  };

  return (
    <>
      <div
        className={clsx(classes.root, className)}
        //   onClick={handleIcon}
      >
        <div className={classes.moreIconContainer} onClick={handleMoreIcon}>
          <img src={moreIcon} />
        </div>

        <div
          className={clsx(classes.deleteContainer, {
            [classes.Nonedisplay]: openDeleteStatus === false,
          })}
          onClick={onClick}
          //   onBlur={() => {
          //     setOpenDeleteStatus(false);
          //   }}
          onBlur={handleblur}
        >
          <span className={classes.deleteLetter}>Delete</span>
        </div>
      </div>
    </>
  );
}
