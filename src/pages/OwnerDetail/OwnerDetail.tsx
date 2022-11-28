import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";

import { OwnerDetailStyle } from "./OwnerDetailStyle";
import TopTab from "../../components/TopTab/TopTab";
import AccountBanner from "../../components/AccountBanner/AccountBanner";
import { BackButton } from "../../components/BackButton/BackButton";
import OwnerDetailSidebar from "../../components/OwnDetail/OwnerDetailSidebar/OwnerDetailSidebar";
import { ownerStorebox } from "../../config/constant";
import CollectibleFilter from "../../components/Collectible/CollectibleFilter/CollectibleFilter";
import NoResult from "../../components/NoResult/NoResult";

export default function OwnerDetail() {
  const classes = OwnerDetailStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  var get_assetType = query.get("assetType");

  return (
    <>
      <TopTab />
      <div className={classes.accountBannerRoot}>
        <div className={classes.accountBannerContainer}>
          <BackButton className={classes.backBtn} />
          <AccountBanner />
        </div>
      </div>
      <div className={classes.mainbodyRoot}>
        <div className={classes.leftPart}>
          <OwnerDetailSidebar />
        </div>
        <div className={classes.rightPart}>
          {get_assetType === ownerStorebox.originals ? (
            <>
              <div className={classes.CollectibleFilterContainer}>
                <CollectibleFilter />
              </div>
              <NoResult />
            </>
          ) : (
            <div>this is related to originals</div>
          )}
        </div>
      </div>
    </>
  );
}
