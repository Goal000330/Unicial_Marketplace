import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useStyles } from "./EstateAddStyles";
import { Grid } from "@material-ui/core";
import CreateEstateMap from "../../../../components/MapData/CreateEstateMap";
import ParcelCard from "../../../../components/ParcelCard/ParcelCard";

import TopTab from "../../../../components/TopTab/TopTab";
import ActionButton from "../../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../../components/BackButton/BackButton";

import { selectestates } from "../../../../store/selectedestates/selectors";
import { getestates } from "../../../../store/selectedestates";
import { showAlert } from "../../../../store/alert";

import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import {
  convertBidTypeArray,
  findCenterDot,
  getCoords,
  isAllConnectedLand,
} from "../../../../common/utils";
import { totalSpace } from "../../../../store/parcels/selectors";
import { EstateProxyAddress } from "../../../../config/contracts/EstateRegitryContract";
import { addEstate } from "../../../../hooks/InteractLand";
import { setSpaces } from "../../../../store/parcels";

export default function EstateAdd() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedEstate = useAppSelector(selectestates);
  const tiles: any = useAppSelector(totalSpace);
  const { contractaddress, estateid } = useParams();
  const [focusedEstate, setFocusedEstate] = useState<any>();
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    let estatePropsArray: any = [];
    let estateArray: any = [];
    Object.keys(tiles).forEach((index: any) => {
      const item = tiles[index];
      if (
        item.estateId === estateid &&
        contractaddress === EstateProxyAddress
      ) {
        estatePropsArray.push(getCoords(item.x, item.y));
        estateArray.push({ x: item.x, y: item.y });
      }
    });

    setFocusedEstate(estatePropsArray);
    if (estateArray?.length !== 0) {
      setCenterX(findCenterDot(estateArray).x);
      setCenterY(findCenterDot(estateArray).y);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles, estateid]);

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

  const handleContinue = async () => {
    let totalSpace = focusedEstate.concat(selectedEstate);
    let status = isAllConnectedLand(totalSpace);

    if (selectedEstate?.length === 0) {
      status = false;
    }

    let contractInput: any = convertBidTypeArray(selectedEstate);

    if (status) {
      await addEstate(contractInput.xs, contractInput.ys, estateid);
      dispatch(
        showAlert({
          message: "Add estate order is successfully published.",
          severity: "success",
        })
      );
      dispatch(getestates([]));
      dispatch(setSpaces());
    } else {
      dispatch(
        showAlert({
          message:
            "You must have to select neighborhood parcels of your estate exactly!",
          severity: "error",
        })
      );
    }
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
            <CreateEstateMap
              height={400}
              width={width}
              initialX={centerX}
              initialY={centerY}
              myEstate={focusedEstate}
            />
          </div>
        </div>
        <div className={classes.btnPart}>
          <BackButton className={classes.backButton} />
          <ActionButton
            color='light'
            className={classes.clearBtn}
            onClick={handleClear}>
            {t("Clear")}
            <CallMadeIcon fontSize='small' />
          </ActionButton>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t(
              "Select the neighborhood parcels of your Estate on the map for edit your Estate"
            )}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              {selectedEstate?.map((items: any, key: any) => {
                return (
                  <Grid key={key} item xs={6} sm={4} md={2}>
                    <ParcelCard
                      cardlabel='Parcel'
                      carddescription='Acquired at August 2nd, 2018'
                      location={items}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div className={classes.btns}>
              <div className={classes.buttons}>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  onClick={handleContinue}>
                  {t("Add Space")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate("/account?section=estates")}>
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
