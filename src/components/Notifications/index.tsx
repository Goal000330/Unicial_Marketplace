import React, { useEffect } from "react";
import check from "../../assets/svg/notification_check.svg";
import error from "../../assets/svg/notification_error.svg";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useTranslation } from "react-i18next";

import { alertMessage, alertSeverity } from "../../store/alert/selectors";
import { showAlert } from "../../store/alert";

const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  notificationRoot: {
    zIndex: 99998,
    position: "fixed",
    top: "30px",
    right: "50px",
    flexDirection: "column",
  },
  notificationContainer: {
    marginTop: "10px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8px 20px 8px 20px",
    zIndex: 99999,
  },
  notificationPicture: {
    width: "44px",
    height: "44px",
    left: "1206px",
    top: "175px",
    background: "linear-gradient(57.2deg, #29C98F 20.25%, #66D8AF 82.22%)",
    transform: "rotate(-180deg)",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationPicture_error: {
    minWidth: "44px",
    minHeight: "44px",
    left: "1206px",
    top: "175px",
    background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    transform: "rotate(-180deg)",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pictureCenter: {
    border: "1px solid #21263F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    color: "#000000",
    transform: "rotate(-180deg)",
  },
  notificationText: {
    margin: "10px 12px",
  },
  notificationTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#29C98F",
  },
  notificationTitle_error: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#FF7C4C",
  },
  notificationDescription: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    opacity: 0.5,
    color: "#96A1DB",
  },
  closeIcon: {
    color: "#96A1DB",
    width: "18px",
    height: "18px",
    cursor: "pointer",
    "& .MuiIconButton-root:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Notifications() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const msg = useAppSelector(alertMessage);
  const severity = useAppSelector(alertSeverity);

  const [openAlert, setOpenAlert] = React.useState(false);

  React.useEffect(() => {
    if (msg.length !== 0) {
      setOpenAlert(true);
    }
  }, [msg, severity]);

  const handleCloseClick = () => {
    dispatch(showAlert({ message: "", severity: severity }));
    setOpenAlert(false);
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      dispatch(showAlert({ message: "", severity: severity }));
      setOpenAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [msg]);

  return (
    <>
      <div
        className={
          openAlert === true ? classes.notificationRoot : classes.displayNone
        }
      >
        {severity === "success" ? (
          <div className={classes.notificationContainer}>
            <div className={classes.notificationPicture}>
              <img src={check} className={classes.checkIcon} />
            </div>
            <div className={classes.notificationText}>
              <div className={classes.notificationTitle}>{t("Success")}</div>
              <div className={classes.notificationDescription}>{msg}</div>
            </div>
            <IconButton onClick={handleCloseClick} size="small">
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </div>
        ) : (
          <div className={classes.notificationContainer}>
            <div className={classes.notificationPicture_error}>
              <img src={error} className={classes.checkIcon} />
            </div>
            <div className={classes.notificationText}>
              <div className={classes.notificationTitle_error}>
                {t("Error")}
              </div>
              <div className={classes.notificationDescription}>{msg}</div>
            </div>
            <IconButton onClick={handleCloseClick} size="small">
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </div>
        )}
      </div>
    </>
  );
}
