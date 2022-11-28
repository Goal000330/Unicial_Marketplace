import React from "react";
import { ClickAwayListener } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { HeaderMobileMenuStyle } from "./HeaderMobileMenuStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { headerLinkData } from "../../../../config/constant";
import { useState, useEffect } from "react";

export default function HeaderMobileMenu() {
  const classes = HeaderMobileMenuStyle();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [headerActive, setHeaderActive] = useState(headerLinkData.marketplace);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleHeaderlink = (index: number) => {
    setHeaderActive(index);
    setOpen(false);
    switch (index) {
      case headerLinkData.marketplace:
        navigate("/");
        break;
      case headerLinkData.builder:
        navigate("/builder");
        break;
      case headerLinkData.docs:
        window.open("https://doc.unicial.org");
        break;
      case headerLinkData.blog:
        window.open("https://blog.unicial.org");
        break;
    }
  };
  useEffect(() => {
    if (location.pathname.includes("/builder")) {
      setHeaderActive(headerLinkData.builder);
    } else {
      setHeaderActive(headerLinkData.marketplace);
    }
  }, [headerActive]);

  return (
    <div className={classes.headerMobilemenu}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem className={classes.headerlistItem}>
            <a href="https://unicial.org">
              <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
            </a>
            <div className={classes.firstItem} onClick={handleClick}>
              <ListItemText primary={t("UNICIAL")} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItem>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className={classes.collapse}
          >
            <List component="div" disablePadding>
              <ListItem
                button
                className={
                  headerActive === headerLinkData.marketplace
                    ? classes.active
                    : classes.unactive
                }
                onClick={() => handleHeaderlink(headerLinkData.marketplace)}
              >
                <ListItemText primary={t("Marketplace")} />
              </ListItem>
              <ListItem
                button
                className={
                  headerActive === headerLinkData.builder
                    ? classes.active
                    : classes.unactive
                }
                onClick={() => handleHeaderlink(headerLinkData.builder)}
              >
                <ListItemText primary={t("Builder")} />
              </ListItem>
              <ListItem
                button
                className={classes.unactive}
                onClick={() => handleHeaderlink(headerLinkData.docs)}
              >
                <ListItemText primary={t("Documents")} />
              </ListItem>
              <ListItem
                button
                className={classes.unactive}
                onClick={() => handleHeaderlink(headerLinkData.blog)}
              >
                <ListItemText primary={t("Blog")} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
}
