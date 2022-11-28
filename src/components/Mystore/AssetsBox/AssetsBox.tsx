import React, { useEffect } from "react";
import { WearablesData, LandData } from "./../../CategoryWearables/SidebarData";
import { AssetsBoxStyle } from "./AssetsBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CategoryWearables from "../../CategoryWearables/CategoryWearables";
import { category } from "../../../config/constant";

import clsx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";
export default function AssetsBox() {
  const classes = AssetsBoxStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>();
  // category.wearable
  const [activeCategory, setActiveCategory] = React.useState<string | false>(
    category.collections
  );
  const query = new URLSearchParams(location.search);

  const handleRoute = (search: string) => {
    if (search === "land") {
      query.set("section", "parcels");
    } else {
      query.set("section", search);
    }
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    if (query.get("section")?.includes("wearables_")) {
      setActiveCategory("");
      setExpanded(category.wearable);
    } else {
      switch (query.get("section")) {
        case category.collections:
          setExpanded(category.collections);

          setActiveCategory(category.collections);
          break;
        case category.land:
          setExpanded(category.land);
          setActiveCategory(category.parcels);
          break;
        case category.parcels:
          setExpanded(category.land);
          setActiveCategory(category.parcels);
          break;
        case category.estates:
          setExpanded(category.land);
          setActiveCategory(category.estates);
          break;
        case category.wearable:
          setActiveCategory(category.wearable);
          setExpanded(category.wearable);
          break;
        case category.name:
          setActiveCategory(category.name);
          setExpanded(category.name);
          break;

        default:
          setActiveCategory("");
          setExpanded("");
        // }
      }
    }
  }, [location]);

  return (
    <>
      <div className={classes.categoryBox}>
        {/* <div className={classes.categoryTitle}>Categories</div> */}
        <div className={classes.categoryTitle}>{t("Assets")}</div>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === category.collections}
            onChange={() => handleRoute(category.collections)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.collections,
            })}
          >
            <StyledAccordionSummary
              aria-controls="panelCollections"
              id="panelCollections"
            >
              <Typography className={classes.maintitle}>
                {t("Collections")}
              </Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
          {/* /// */}
          <StyledAccordion
            square
            expanded={expanded === category.land}
            onChange={() => handleRoute(category.land)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.land,
            })}
          >
            <StyledAccordionSummary aria-controls="panelLand" id="panel1Land">
              <Typography className={classes.maintitle}>
                {t("Space")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables data={LandData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          {/* /// */}
          <StyledAccordion
            square
            expanded={expanded === category.wearable}
            onChange={() => handleRoute(category.wearable)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.wearable,
            })}
          >
            <StyledAccordionSummary
              aria-controls="panelWearables"
              id="panelWearables"
            >
              <Typography className={classes.maintitle}>
                {t("Wearables")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables data={WearablesData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            square
            expanded={expanded === category.name}
            onChange={() => handleRoute(category.name)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.name,
            })}
          >
            <StyledAccordionSummary aria-controls="panelName" id="panelName">
              <Typography className={classes.maintitle}>
                {t("Names")}
              </Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
