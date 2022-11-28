import React, { useEffect } from "react";
import { MobileCategoryBoxStyle } from "./MobileCategoryBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import CategoryWearables from "../../CategoryWearables/CategoryWearables";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router";
import { category } from "../../../config/constant";
import { useTranslation } from "react-i18next";

export default function MobileCategoryBox() {
  const classes = MobileCategoryBoxStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const [expanded, setExpanded] = React.useState<string | false>(
    category.wearable
  );
  const query = new URLSearchParams(location.search);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    if (query.get("section") === category.name) setExpanded(category.name);
  }, [location]);

  return (
    <>
      <div className={classes.categoryBox}>
        <div className={classes.categoryTitle}>{t("Categories")}</div>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === category.wearable}
            onChange={handleChange(category.wearable)}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={classes.maintitle}>{t("Wearables")}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables />
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            square
            expanded={expanded === category.name}
            onChange={handleChange(category.name)}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className={classes.maintitle}>{t("Names")}</Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
        </div>
      </div>
    </>
  );
}
