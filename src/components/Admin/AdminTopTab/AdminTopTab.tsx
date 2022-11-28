import React from "react";
import { adminTopTabIndex } from "../../../config/adminConstant";
import { AdminTopTabStyle, StyledTopTabBtn } from "./AdminTopTabStyle";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

export default function TopTab() {
  const classes = AdminTopTabStyle();
  const {t } = useTranslation();
  const location = useLocation();

  const [toptab_index, setToptabIndex] = React.useState(1);
  const handleLand = () => {
    setToptabIndex(1);
  };
  const handleEstate = () => {
    setToptabIndex(2);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.tabsLeft}>
              <StyledTopTabBtn
                onClick={handleLand}
                disabled={toptab_index === adminTopTabIndex.land}
              >
                {t("Land")}
              </StyledTopTabBtn>
              <StyledTopTabBtn
                onClick={handleEstate}
                disabled={toptab_index === adminTopTabIndex.estate}
              >
                {t("Estate")}
              </StyledTopTabBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
