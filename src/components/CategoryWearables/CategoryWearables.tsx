import React, { useEffect } from "react";
import {
  CategoryWearablesStyle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "./CategoryWearablesStyle";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
interface PropsData {
  data: any;
}
export default function CategoryWearables(props: any) {
  const classes = CategoryWearablesStyle();
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>("");
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
    setExpanded("");
    setActiveCategory("");
    const category = query.get("section");
    props.data.forEach((items: any) => {
      if (items.path === category) {
        setExpanded(items.path);
        setActiveCategory(items.path);
      } else {
        items.subNav?.forEach((item: any) => {
          if (item.path === category) {
            setExpanded(items.path);
            setActiveCategory(item.path);
          }
        });
      }
    });
  }, [location]);

  return (
    <>
      <div className={classes.categoryBox}>
        <div className={classes.accordionRoot}>
          {props.data.map((item: any, index: any) => {
            return (
              <StyledAccordion
                square
                expanded={expanded === item.path}
                onChange={() => handleRoute(item.path)}
                className={clsx(classes.firstAccordion, {
                  [classes.active]: activeCategory === item.path,
                })}
                key={index}
              >
                <StyledAccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography className={classes.maintitle}>
                    {item.title}
                  </Typography>
                  {item.iconClosed}
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  {item.subNav?.map((subitem: any, key: any) => {
                    return (
                      <span
                        className={clsx(classes.subCategoryItem, {
                          [classes.activeSubCategory]:
                            activeCategory === subitem.path,
                        })}
                        onClick={() => handleRoute(subitem.path)}
                        key={key}
                      >
                        <span className={classes.subCategoryTitle}>
                          {subitem.title}
                        </span>
                      </span>
                    );
                  })}
                </StyledAccordionDetails>
              </StyledAccordion>
            );
          })}
        </div>
      </div>
    </>
  );
}
