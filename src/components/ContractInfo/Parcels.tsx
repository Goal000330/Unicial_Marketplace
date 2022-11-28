import { Theme, makeStyles } from "@material-ui/core/styles";
import LocationBtn from "../Base/LocationBtn";
import { ShowMoreLessBtn } from "../ShowMoreLessBtn/ShowMoreLessBtn";
import { useTranslation } from "react-i18next";
import { getCoords } from "../../common/utils";
import { useEffect, useRef, useState } from "react";
import { useElementSize } from "usehooks-ts";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "35px",
    marginBottom: "47px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    marginBottom: "8px",
    color: "white",
  },
  parcels: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttonGroup: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(auto-fill, 83px)",
    marginTop: "13px",
    overflow: "hidden",
  },
  pin: {
    width: "17px !important",
    height: "16px !important",
    backgroundSize: "19px",
    backgroundPosition: "-2px -1px",
  },
  parcelbtn: {
    margin: "6px",
    borderRadius: "20px",
    width: "79px",
    padding: "5.5px 11px",
    backgroundColor: "#282E4E",
  },
  showmoreContent: {
    marginTop: "15px",
    justifyContent: "center",
    width: "100%",
    flexFlow: "row nowrap",
    display: "flex",
  },
  showmoreBtn: {
    fontSize: "15px",
    color: "#ff2d55",
    cursor: "pointer",
  },
  displayNone: {
    display: "none",
  },
}));

interface ParcelsProps {
  parcels: any;
}

const Parcels = ({ parcels }: ParcelsProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  //width size logic start
  const [squareRef, { width }] = useElementSize();
  //width size logic
  let onelineCount = Math.floor(width / 90);
  const [count, setCount] = useState(onelineCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (parcels?.length !== undefined && parcels?.length <= onelineCount) {
      setCount(parcels?.length);
      setShown(false);
    } else if (parcels?.length !== undefined) {
      setShown(true);
      if (showMoreBtn) {
        setCount(onelineCount);
      } else if (showLessBtn) {
        setCount(parcels?.length);
      } else {
        setCount(parcels?.length);
      }
    }
  }, [parcels?.length, window.innerWidth, onelineCount]);

  const handleShowMoreBtn = () => {
    setShowMoreBtn(false);
    setShowLessBtn(true);
    setCount(parcels?.length);
  };

  const handleShowLessBtn = () => {
    setCount(onelineCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };

  return (
    <div className={classes.root} ref={squareRef}>
      <div className={classes.title}>{t("Parcels")}</div>
      <div className={classes.parcels}>
        <div className={classes.buttonGroup}>
          {parcels?.slice(0, count).map((item: any, key: any) => {
            return (
              <LocationBtn key={key} position={getCoords(item.x, item.y)} />
            );
          })}
        </div>
        {shown && (
          <>
            <div
              className={
                showMoreBtn === true
                  ? classes.showmoreContent
                  : classes.displayNone
              }
            >
              <ShowMoreLessBtn
                letter={t("Show More")}
                onClick={handleShowMoreBtn}
              />
            </div>
            <div
              className={
                showLessBtn === true
                  ? classes.showmoreContent
                  : classes.displayNone
              }
            >
              <ShowMoreLessBtn
                letter={t("Show Less")}
                onClick={handleShowLessBtn}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Parcels;
