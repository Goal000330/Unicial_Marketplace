import React, { useEffect } from "react";
import { TypeBoxStyle } from "./TypeBoxStyle";
import { useLocation } from "react-router";
import { typebox } from "../../../config/constant";
import { useTranslation } from "react-i18next";

export default function TypeBox() {
  const classes = TypeBoxStyle();
  const { t } = useTranslation();
  const [itemIndex, setitemIndex] = React.useState(typebox.store);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleItem = (index: string) => {
    setitemIndex(index);
  };

  useEffect(() => {
    if (query.get("assetType") === typebox.listing) {
      setitemIndex(typebox.listing);
    } else {
      setitemIndex(typebox.store);
    }
  }, [location]);

  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>{t("Type")}</div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex === typebox.store
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(typebox.store)}
          >
            <div className={classes.itemTitle}>{t("Store")}</div>
            <div className={classes.itemDescription}>
              {t("Items available for minting")}
            </div>
          </div>
          {/* // */}
          <div
            className={
              itemIndex === typebox.listing
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(typebox.listing)}
          >
            <div className={classes.itemTitle}>{t("Listings")}</div>
            <div className={classes.itemDescription}>
              {t("Items being resold")}
            </div>
          </div>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
