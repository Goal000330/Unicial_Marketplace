import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { useState } from "react";
import RoundBackBtn from "./RoundBackBtn";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#1A1F37",
      borderRadius: "9px",
      height: "auto",
      padding: "20px 27px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    descContainer: {
      fontFamily: "Lato",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "29px",
      color: "#96A1DB",
      marginRight: "20px",
    },
    colorLetter: {
      cursor: "pointer",
      background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    Nonedisplay: {
      display: "none",
    },
  })
);

interface Props {
  className?: any;
  onClick?: () => void;
}

export default function CoolNotification({ className, onClick }: Props) {
  const classes = useStyles();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showStatus, setShowStatus] = useState(true);
  const handleClose = () => {
    setShowStatus(false);
  };

  const handleNavigate = () => {
    navigate("/builder/builderItem-editor");
  };

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.Nonedisplay]: showStatus === false,
      })}
    >
      <div className={classes.descContainer}>
        {t("Cool! Now you can start working on your items.")}
        &nbsp;{" "}
        <span className={classes.colorLetter} onClick={handleNavigate}>
          {t("Click here")}
        </span>{" "}
        &nbsp; {t("to open the editor or click the edit button on any item.")}
      </div>
      <RoundBackBtn onBack={handleClose} type="multiply" />
    </div>
  );
}
