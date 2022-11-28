import { useEffect, useState } from "react";
import clsx from "clsx";
import { Theme, makeStyles } from "@material-ui/core/styles";
import plaza_svg from "../../assets/svg/plaza.svg";
import road_svg from "../../assets/svg/road.svg";
import distirct_svg from "../../assets/svg/district.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { totalSpace } from "../../store/parcels/selectors";
import { getCoords } from "../../common/utils";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "45px",
  },
  title: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.4px",
    textTransform: "uppercase",
    marginBottom: "21px",
    color: "#96A1DB",
    opacity: "50%",
  },
  cards: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  card: {
    display: "flex",
    marginBottom: "20px",
    marginRight: "30px",
    alignItems: "center",
  },
  addressImg: {
    marginRight: "8px",
    borderRadius: "8px",
    width: "48px",
  },
  rightPart: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
  },
  name: {
    fontSize: "16px",
    lineHeight: "19.2px",
    fontWeight: 400,
    marginBottom: "7px",
  },
  description: {
    fontSize: "14px",
    lineHeight: "16.8px",
    fontWeight: 400,
    color: "#96A1DB",
  },
  unviewPlaza: {
    display: "none",
  },
  unviewRoad: {
    display: "none",
  },
  unviewDistrict: {
    display: "none",
  },
  imgContainer: {
    width: "44px",
    height: "44px",
    backgroundColor: "#282E4E",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  displayNone: {
    display: "none",
  },
  divideLine: {
    border: "1px solid #282E4E",
    marginBottom: "37px",
    marginTop: "40px",
  },
}));

interface HighlightProps {
  space?: any;
}

const Highlight = ({ space }: HighlightProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const allSpace: any = useSelector(totalSpace);
  const [roadDistance, setRoadDistance] = useState(0);
  const [plazaDistance, setPlazaDistance] = useState(0);

  const getMinValue = (item: any) => {
    let distanceRoadArray: any = [];
    let distancePlazaArray: any = [];
    for (let i = item?.x - 10; i <= item?.x + 10; i++) {
      for (let j = item?.y - 10; j <= item?.y + 10; j++) {
        if (allSpace[getCoords(i, j)]?.type === "road") {
          distanceRoadArray.push(
            Math.abs(i - item?.x) > Math.abs(j - item?.y)
              ? Math.abs(i - item?.x)
              : Math.abs(j - item?.y)
          );
        }
        if (allSpace[getCoords(i, j)]?.type === "plaza") {
          distancePlazaArray.push(
            Math.abs(i - item?.x) > Math.abs(j - item?.y)
              ? Math.abs(i - item?.x)
              : Math.abs(j - item?.y)
          );
        }
      }
    }
    const res = {
      road: Math.min(...distanceRoadArray),
      plaza: Math.min(...distancePlazaArray),
    };
    return res;
  };

  useEffect(() => {
    let insideSpace: any = [];
    space?.forEach((item1: any) => {
      const x1 = item1.x;
      const y1 = item1.y;
      const rightCondition = space?.some((item2: any) => {
        const x2 = item2.x;
        const y2 = item2.y;
        return x2 - x1 === 1 && y2 === y1;
      });
      const topCondition = space?.some((item2: any) => {
        const x2 = item2.x;
        const y2 = item2.y;
        return x2 === x1 && y2 - y1 === 1;
      });

      const bottomCondition = space?.some((item2: any) => {
        const x2 = item2.x;
        const y2 = item2.y;
        return x2 === x1 && y2 - y1 === -1;
      });

      const leftCondition = space?.some((item2: any) => {
        const x2 = item2.x;
        const y2 = item2.y;
        return x2 - x1 === -1 && y2 === y1;
      });

      if (rightCondition && topCondition && bottomCondition && leftCondition) {
        insideSpace.push(item1);
      }
    });
    let borderSpace: any = space?.filter(
      (item: any) => insideSpace.indexOf(item) < 0
    );
    let resDisRoad: any = [];
    let resDisPlaza: any = [];
    borderSpace?.map((val: any) => {
      resDisRoad.push(getMinValue(val).road);
      resDisPlaza.push(getMinValue(val).plaza);
    });
    setRoadDistance(Math.min(...resDisRoad));
    setPlazaDistance(Math.min(...resDisPlaza));
  }, [space]);

  return (
    <>
      <div
        className={
          (plazaDistance === 0 || plazaDistance === Infinity) &&
          (roadDistance === 0 || roadDistance === Infinity)
            ? classes.displayNone
            : classes.root
        }>
        <div className={classes.title}>{t("Highlight")}</div>
        <div className={classes.cards}>
          <div
            className={
              plazaDistance === 0 || plazaDistance === Infinity
                ? clsx(classes.card, classes.unviewPlaza)
                : classes.card
            }>
            <div className={classes.imgContainer}>
              <img src={plaza_svg} alt='A' />
            </div>
            <div className={classes.rightPart}>
              <div className={classes.name}>{t("Plaza")}</div>
              <div className={classes.description}>
                {plazaDistance} {t("parcel away")}
              </div>
            </div>
          </div>
          <div
            className={
              roadDistance === 0 || roadDistance === Infinity
                ? clsx(classes.card, classes.unviewRoad)
                : classes.card
            }>
            <div className={classes.imgContainer}>
              <img src={road_svg} alt='A' />
            </div>

            <div className={classes.rightPart}>
              <div className={classes.name}>{t("Road")}</div>
              <div className={classes.description}>
                {roadDistance} {t("parcel away")}
              </div>
            </div>
          </div>
          <div
            className={
              false ? classes.card : clsx(classes.card, classes.unviewDistrict)
            }>
            <div className={classes.imgContainer}>
              <img src={distirct_svg} alt='A' />
            </div>

            <div className={classes.rightPart}>
              <div className={classes.name}>{t("District")}</div>
              <div className={classes.description}>
                {0} {t("parcel away")}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divideLine}></div>
      </div>
    </>
  );
};

export default Highlight;
