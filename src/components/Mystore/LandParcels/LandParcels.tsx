import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { getParcelsByOwnerAsCoords } from "../../../hooks/api";
import { useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useLocation, useNavigate } from "react-router";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { showMoreCount } from "../../../config/constant";
import NoResult from "../../NoResult/NoResult";
import { saleParcels } from "../../../store/saleparcels/selectors";
import { getCoords } from "../../../common/utils";
import { totalSpace } from "../../../store/parcels/selectors";
import { useAppDispatch } from "./../../../store/hooks";
import { showSpinner } from "./../../../store/spinner";
import { ethers } from "ethers";
import { category } from "../../../config/constant";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [resultParcels, setResultParcels] = useState<any>();
  const [showStatus, setShowStatus] = useState(false);
  const loginAddress = useAppSelector(selectLoginAddress);
  const saleSpaces: any = useAppSelector(saleParcels);
  const tiles: any = useAppSelector(totalSpace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleNavigate = (tokenId: string) => {
    navigate(`/contracts/${SpaceProxyAddress}/tokens/${tokenId}/parcel_detail`);
  };

  const getResult = async () => {
    dispatch(showSpinner(true));
    await getParcelsByOwnerAsCoords(loginAddress).then((parcels) => {
      if (
        query.get("onlyOnSale") === null ||
        query.get("onlyOnSale") === "false"
      ) {
        setResultParcels(parcels);
      } else {
        setResultParcels(
          parcels.filter((el: any) => saleSpaces[getCoords(el[0], el[1])])
        );
      }
    });
    dispatch(showSpinner(false));
  };

  useEffect(() => {
    getResult();
  }, [query.get("onlyOnSale"), saleSpaces]);

  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };
  return (
    <>
      {resultParcels !== undefined && resultParcels.length !== 0 ? (
        <>
          <Grid container spacing={2}>
            {resultParcels
              .slice(0, !showStatus ? showMoreCount : resultParcels.length)
              .map((tokenId: any, key: any) => {
                let priceParcel = "null";
                if (saleSpaces[`${tokenId[0]},${tokenId[1]}`]) {
                  priceParcel = ethers.utils.formatUnits(
                    saleSpaces[
                      `${tokenId[0]},${tokenId[1]}`
                    ]?.priceInWei.toString(),
                    18
                  );
                }

                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <LandCard
                      type={category.parcels}
                      locationbtnX={tokenId[0]}
                      locationbtnY={tokenId[1]}
                      landName={tiles[getCoords(tokenId[0], tokenId[1])]?.name}
                      price={parseInt(priceParcel)}
                      categoryName="Zilionixx"
                      onClick={() =>
                        handleNavigate(
                          tiles[getCoords(tokenId[0], tokenId[1])].tokenId
                        )
                      }
                    />
                  </Grid>
                );
              })}
          </Grid>
          <div
            className={
              resultParcels.length < showMoreCount
                ? classes.displayNone
                : classes.showmoreContent
            }
          >
            <ShowMoreLessBtn
              letter={showStatus ? "Show Less" : "Show All"}
              onClick={handleShowBtn}
            />
          </div>
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
}
