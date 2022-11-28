import React, { useEffect } from "react";
import { MobileSidebarStyle } from "./MobileSidebarStyle";
import { StyledTopTabBtn } from "../../TopTab/TopTabStyle";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
export default function MobileSidebar() {
  const classes = MobileSidebarStyle();
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const category = query.get("section");

  const [menuIndex, setmenuIndex] = React.useState(category);
  const handlemenu = (index: string) => {
    setmenuIndex(index);
    query.set("section", index);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    setmenuIndex(category);
  }, [location]);
  return (
    <>
      <div className={classes.root}>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("collections")}
          disabled={menuIndex === "collections"}
        >
          {t("Collections")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("space")}
          disabled={menuIndex === "space"}
        >
          {t("Space")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("wearables")}
          disabled={menuIndex === "wearables"}
        >
          {t("Wearables")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("ens")}
          disabled={menuIndex === "ens"}
        >
          {t("Names")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("on_sale")}
          disabled={menuIndex === "on_sale"}
        >
          {t("On Sale")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("sales")}
          disabled={menuIndex === "sales"}
        >
          {t("Sales")}
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("bids")}
          disabled={menuIndex === "bids"}
        >
          {t("Bids")}
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("settings")}
          disabled={menuIndex === "settings"}
        >
          {t("Settings")}
        </StyledTopTabBtn>
      </div>
    </>
  );
}
