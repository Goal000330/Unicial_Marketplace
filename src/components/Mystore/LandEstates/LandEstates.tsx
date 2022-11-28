import { useEffect, useState } from "react";
import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./../../../store/hooks";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { getEstatesByOwner, getMetadata } from "../../../hooks/api";
import { useTranslation } from "react-i18next";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
import { useLocation, useNavigate } from "react-router";
import { selectLoginAddress } from "./../../../store/auth/selectors";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { category, showMoreCount } from "../../../config/constant";
import { showSpinner } from "../../../store/spinner";
import { saleEstates } from "../../../store/saleestates/selectors";
import { ethers } from "ethers";

export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loginAddress = useAppSelector(selectLoginAddress);
  const emptyTokens: any[] = [];

  const [ownEstates, setOwnEstates] = useState(emptyTokens);
  const [showStatus, setShowStatus] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const estatesOnSale: any = useAppSelector(saleEstates);
  const handleCreateClick = () => {
    navigate("/account/estate/create");
  };

  const handleSettingManager = () => {
    navigate("/account/estate/setting_manager");
  };

  const handleNavigate = (tokenId: string) => {
    navigate(
      `/contracts/${EstateProxyAddress}/tokens/${tokenId}/estate_detail`
    );
  };
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  const initSet = async () => {
    dispatch(showSpinner(true));

    let searchInput: any = query.get("search");
    // let order: any[] = [];
    await getEstatesByOwner(loginAddress).then(async (estates) => {
      await sortByResult(estates).then(async (res) => {
        if (
          query.get("onlyOnSale") === null ||
          query.get("onlyOnSale") === "false"
        ) {
          await InputsearchFilter(res).then((res) => {
            setOwnEstates(res);
            return;
          });
        } else {
          let filterArray: any = [];
          for (let i = 0; i < res?.length; i++) {
            if (estatesOnSale[res[i]]) {
              filterArray.push(res[i]);
            }
          }
          await InputsearchFilter(filterArray).then((res) => {
            setOwnEstates(res);
          });
        }
      });
    });
    dispatch(showSpinner(false));
  };

  const getMetaName = async (tokenId: any) => {
    let metaData: any;
    await getMetadata(tokenId).then((res: any) => {
      metaData = res.split("^");
    });
    return metaData[0];
  };

  const getMetaDesc = async (tokenId: any) => {
    await getMetadata(tokenId).then((res: any) => {
      let metaData = res.split("^");
      return metaData[1];
    });
  };

  const sortByName = (array: any[]) => {
    let tempOnlytokenId: any[] = [];
    array.sort(function (a, b) {
      let x = a.metaName.toLowerCase();
      let y = b.metaName.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < array.length; i++) {
      tempOnlytokenId.push(array[i].tokenId);
    }
    return tempOnlytokenId;
  };

  const sortByResult = async (array: any[]) => {
    let temp: any[] = [];
    for (let i = 0; i < array.length; i++) {
      let metaname: any, metadesc: any;
      await getMetaName(array[i]).then((res: any) => {
        metaname = res;
      });
      await getMetaDesc(array[i]).then((res: any) => {
        metadesc = res;
      });
      temp.push({
        tokenId: array[i],
        metaName: metaname,
        metaDesc: metadesc,
      });
    }
    let tokenIds: any[] = [];
    switch (query.get("sortBy")) {
      case "name":
        tokenIds = sortByName(temp);
        break;
    }
    return tokenIds;
  };

  const InputsearchFilter = async (array: any[]) => {
    let searchInput: any = query.get("search");
    const searchResultTokens: any[] = [];
    for (let i = 0; i < array?.length; i++) {
      let metaData: string = await getMetaName(array[i]);
      if (
        metaData
          ?.toLowerCase()
          .indexOf(searchInput?.toString().toLowerCase()) >= 0
      ) {
        searchResultTokens.push(array[i]);
      }
    }
    return searchResultTokens;

    // setOwnEstates(searchResultTokens);
  };

  useEffect(() => {
    initSet();
  }, [
    query.get("onlyOnSale"),
    query.get("sortBy"),
    query.get("search"),
    estatesOnSale,
  ]);

  return (
    <>
      <div className={classes.createBtnContainer}>
        <ActionButton
          color="light"
          className={classes.createBtn}
          onClick={handleSettingManager}
        >
          {t("Setting Manager")}
        </ActionButton>
        <ActionButton
          color="light"
          className={classes.createBtn}
          onClick={handleCreateClick}
        >
          {t("Create Estates")}
        </ActionButton>
      </div>
      <Grid container spacing={2}>
        {ownEstates
          ?.slice(0, !showStatus ? showMoreCount : ownEstates.length)
          .map((tokenId: any, key: any) => {
            let priceEstate = "null";
            if (estatesOnSale[tokenId]) {
              priceEstate = ethers.utils.formatUnits(
                estatesOnSale[tokenId]?.priceInWei.toString(),
                18
              );
            }

            return (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <LandCard
                  type={category.estates}
                  tokenid={tokenId}
                  price={parseInt(priceEstate)}
                  categoryName="Zilionixx"
                  onClick={() => handleNavigate(tokenId)}
                />
              </Grid>
            );
          })}
      </Grid>
      <div
        className={
          ownEstates.length < showMoreCount
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
  );
}
