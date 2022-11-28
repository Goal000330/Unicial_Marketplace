import React, { useEffect } from "react";
import { OwnerStoreBoxStyle } from "./OwnerStoreBoxStyle";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useParams } from "react-router";
import { ownerStorebox } from "../../../config/constant";
import { useTranslation } from "react-i18next";

export default function OwnerStoreBox() {
  const classes = OwnerStoreBoxStyle();
  const { t } = useTranslation();
  const { owneraddress } = useParams();
  const [itemIndex, setitemIndex] = React.useState(ownerStorebox.originals);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const handleItem = (index: string) => {
    setitemIndex(index);
    // query.set("assetType", index);
    if (index === ownerStorebox.collectibles) {
      navigate(
        `/accounts/${owneraddress}?assetType=nft&section=all&vendor=decentraland&page=1&sortBy=newest&onlyOnSale=false&viewAsGuest=false`
      );
    } else {
      navigate(
        `/accounts/${owneraddress}?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest&onlyOnSale=false&viewAsGuest=false`
      );
    }
  };

  useEffect(() => {
    if (query.get("assetType") === ownerStorebox.originals) {
      setitemIndex(ownerStorebox.originals);
    } else {
      setitemIndex(ownerStorebox.collectibles);
    }
  }, [location]);

  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>{t("Store")}</div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex === ownerStorebox.originals
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(ownerStorebox.originals)}
          >
            <div className={classes.itemTitle}>{t("Originals")}</div>
            <div className={classes.itemDescription}>
              {t("Created by the user")}
            </div>
          </div>
          {/* // */}
          <div
            className={
              itemIndex === ownerStorebox.collectibles
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(ownerStorebox.collectibles)}
          >
            <div className={classes.itemTitle}>{t("Collectibles")}</div>
            <div className={classes.itemDescription}>
              {t("Collected by the user")}
            </div>
          </div>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
