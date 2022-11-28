import { useLocation, useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { OwnerDetailSidebarStyle } from "./OwnerDetailSidebarStyle";
import OwnerStoreBox from "../OwnerStoreBox/OwnerStoreBox";
import OwnerCategoriesBox from "../OwnerCategoriesBox/OwnerCategoriesBox";
import OwnerAssetsBox from "../OwnerAssetsBox/OwnerAssetsBox";
import { ownerStorebox } from "./../../../config/constant";

export default function OwnerDetailSidebar() {
  const classes = OwnerDetailSidebarStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  var get_assetType = query.get("assetType");
  return (
    <>
      <div className={classes.root}>
        <OwnerStoreBox />
        {/* //depend on assetType */}
        {get_assetType === ownerStorebox.originals ? (
          <OwnerCategoriesBox />
        ) : (
          <OwnerAssetsBox />
        )}
      </div>
    </>
  );
}
