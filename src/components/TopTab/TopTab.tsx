import React, { useEffect } from "react";
import { topTabIndex, searchbarIndex } from "../../config/constant";
import { TopTabStyle, StyledTopTabBtn } from "./TopTabStyle";
import LandSearchbar from "../Mystore/LandSearchbar/LandSearchbar";
import CollectibleSearchBar from "../Collectible/CollectibleSearchBar/CollectibleSearchBar";
import MystoreSearchBar from "../Mystore/MystoreSearchBar/MystoreSearchBar";
import OnSaleSearchBar from "../Mystore/OnSaleSearchbar/OnSaleSearchbar";
import NamesSearchBar from "../Mystore/NamesSearchbar/NamesSearchbar";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import OnSaleSwitch from "../Base/OnSaleSwitch";

export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [toptab_index, setToptabIndex] = React.useState(1);
  const [searchbar_index, setSearchbarIndex] = React.useState(1);

  const handlehead = (url: string) => {
    navigate(url);
  };
  const query = new URLSearchParams(location.search);
  const category = query.get("section");
  useEffect(() => {
    if (location.pathname.includes("/contracts")) {
      setToptabIndex(topTabIndex.contracts);
      setSearchbarIndex(searchbarIndex.contracts);
    } else if (location.pathname.includes("/lands")) {
      setToptabIndex(topTabIndex.land);
      setSearchbarIndex(searchbarIndex.land);
    } else if (location.pathname.includes("/auction")) {
      setToptabIndex(topTabIndex.auction);
      setSearchbarIndex(searchbarIndex.auction);
    } else if (location.pathname.includes("/browse")) {
      setToptabIndex(topTabIndex.collectibles);
      setSearchbarIndex(searchbarIndex.collections);
    } else if (location.pathname.includes("/accounts")) {
      setToptabIndex(0);
      switch (category) {
        case "collections":
          setSearchbarIndex(searchbarIndex.collections);
          break;
        case "land":
          setSearchbarIndex(searchbarIndex.land);
          break;
        case "parcels":
          setSearchbarIndex(searchbarIndex.parcels);
          break;
        case "estate":
          setSearchbarIndex(searchbarIndex.estate);
          break;
        case "wearables":
          setSearchbarIndex(searchbarIndex.wearables);
          break;
        case "ens":
          setSearchbarIndex(searchbarIndex.ens);
          break;
        case "on_sale":
          setSearchbarIndex(searchbarIndex.on_sale);
          break;
        case "sales":
          setSearchbarIndex(searchbarIndex.sales);
          break;
      }
    } else if (location.pathname.includes("/account")) {
      setToptabIndex(topTabIndex.mystore);
      switch (category) {
        case "collections":
          setSearchbarIndex(searchbarIndex.collections);
          break;
        case "land":
          setSearchbarIndex(searchbarIndex.land);
          break;
        case "parcels":
          setSearchbarIndex(searchbarIndex.parcels);
          break;
        case "estates":
          setSearchbarIndex(searchbarIndex.estate);
          break;
        case "wearables":
          setSearchbarIndex(searchbarIndex.wearables);
          break;
        case "ens":
          setSearchbarIndex(searchbarIndex.ens);
          break;
        case "on_sale":
          setSearchbarIndex(searchbarIndex.on_sale);
          break;
        case "sales":
          setSearchbarIndex(searchbarIndex.sales);
          break;
      }
    }
  }, [searchbar_index, location]);

  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.nftfilter}>
              <div className={classes.topbar}>
                <div className={classes.tabsLeft}>
                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handlehead("/lands")}
                    className={
                      toptab_index === topTabIndex.land
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Lands")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() =>
                      handlehead(
                        "/browse?section=wearables&vendor=decentraland&page=1&sortBy=recently_listed&onlyOnSale=true"
                      )
                    }
                    className={
                      toptab_index === topTabIndex.collectibles
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Collectibles")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handlehead("/account?section=collections")}
                    className={
                      toptab_index === topTabIndex.mystore
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("My Store")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handlehead("/auction")}
                    className={
                      toptab_index === topTabIndex.auction
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Auction")}
                  </StyledTopTabBtn>
                </div>

                {toptab_index === 1 ? (
                  /* //Land */
                  <div className={classes.landtoptabRight}>
                    <OnSaleSwitch letter="ON SALE" />
                    {/* <div style={{ marginLeft: "20px" }}>
                      <LandFilterBtns />
                    </div> */}
                  </div>
                ) : toptab_index === 2 ? (
                  <CollectibleSearchBar />
                ) : searchbar_index === 0 ? (
                  <></>
                ) : searchbar_index === 1 ? (
                  <MystoreSearchBar />
                ) : searchbar_index === 2 ? (
                  //  Collctibles
                  <CollectibleSearchBar />
                ) : searchbar_index === 3 ? (
                  //My store MystoreSearchBar
                  // <MystoreSearchBar />
                  <LandSearchbar />
                ) : searchbar_index === 4 ? (
                  <NamesSearchBar />
                ) : searchbar_index === 5 ? (
                  <OnSaleSearchBar />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
