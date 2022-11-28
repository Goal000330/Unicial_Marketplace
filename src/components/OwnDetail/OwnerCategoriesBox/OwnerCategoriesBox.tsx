import React, { useEffect } from "react";
import { OwnerCategoriesBoxStyle } from "./OwnerCategoriesBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import CategoryWearables from "../../CategoryWearables/CategoryWearables";
import { Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router";
import { category } from "../../../config/constant";
import { useTranslation } from "react-i18next";

import { OwnerWearablesData } from "../../CategoryWearables/SidebarData";
import clsx from "clsx";

export default function OwnerCategoriesBox() {
  const classes = OwnerCategoriesBoxStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>(
    category.wearable
  );
  const [activeCategory, setActiveCategory] = React.useState<string | false>(
    ""
  );
  const query = new URLSearchParams(location.search);

  const handleRoute = (search: string) => {
    query.set("section", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    if (query.get("section") === category.wearable) {
      setActiveCategory(category.wearable);
      setExpanded(category.wearable);
    } else {
      setExpanded(category.wearable);
      setActiveCategory("");
    }
  }, [location]);

  return (
    <>
      <div className={classes.categoryBox}>
        <div className={classes.categoryTitle}>{t("Categories")}</div>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === category.wearable}
            onChange={() => handleRoute(category.wearable)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.wearable,
            })}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={classes.maintitle}>
                {t("Wearables")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables data={OwnerWearablesData} />
            </StyledAccordionDetails>
          </StyledAccordion>
        </div>
      </div>
    </>
  );
}
