import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { SelectSpaceStyle } from "./SelectSpaceStyle";
import { Grid } from "@material-ui/core";
import SelectSpaceMap from "../../../../../components/MapData/SelectSpaceMap/SelectSpaceMap";
import ParcelCard from "../../../../../components/ParcelCard/ParcelCard";

import TopTab from "../../../../../components/TopTab/TopTab";
import ActionButton from "../../../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../../../components/BackButton/BackButton";

import { selectestates } from "../../../../../store/selectedestates/selectors";
import { getestates } from "../../../../../store/selectedestates";
import { showAlert } from "../../../../../store/alert";

import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../../store/hooks";
import { getCoords } from "../../../../../common/utils";
export default function EstatesSelect() {
  const classes = SelectSpaceStyle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { contractaddress, estateid } = useParams();
  const estates = useAppSelector(selectestates);
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  const handleContinue = () => {
    let status = false;
    for (let i = 0; i < estates.length; i++) {
      var x: number = +estates[i].substring(0, estates[i].indexOf(","));
      var y: number = +estates[i].substring(estates[i].indexOf(",") + 1);

      const leftIndex = estates.indexOf(getCoords(x - 1, y));
      const topIndex = estates.indexOf(getCoords(x, y - 1));
      const rightIndex = estates.indexOf(getCoords(x + 1, y));
      const bottomIndex = estates.indexOf(getCoords(x, y + 1));

      status = true;

      if (leftIndex < 0 && topIndex < 0 && rightIndex < 0 && bottomIndex < 0) {
        status = false;
      }
    }

    if (estates.length === 1) {
      status = true;
    }

    status === true
      ? navigate(
          `/contracts/${contractaddress}/tokens/${estateid}/UpdateLandData`
        )
      : dispatch(
          showAlert({
            message: "You have to select neighborhood parcels exactly!",
            severity: "error",
          })
        );
  };

  const handleClear = () => {
    dispatch(getestates([]));
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TopTab />

      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <SelectSpaceMap
              height={400}
              width={width}
              initialX={1}
              initialY={1}
            />
          </div>
        </div>
        <div className={classes.btnPart}>
          <BackButton className={classes.backButton} />
          <ActionButton
            color="light"
            className={classes.clearBtn}
            onClick={handleClear}
          >
            {t("Clear")}
            <CallMadeIcon fontSize="small" />
          </ActionButton>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t("Select the parcels on the map to update land data.")}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              {estates.map((items: any, key: any) => {
                return (
                  <Grid key={key} item xs={6} sm={4} md={2}>
                    <ParcelCard
                      cardlabel="Parcel"
                      carddescription="Acquired at August 2nd, 2018"
                      location={items}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div className={classes.btns}>
              <div className={classes.buttons}>
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={handleContinue}
                >
                  {t("CONTINUE")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate("/account?section=estates")}
                >
                  {t("CANCEL")}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
