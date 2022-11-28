import {
  CollectionCardStyle,
  StyledDeletePopover,
  StyledDeleteItem,
} from "./CollectionCardStyle";
import PussyhairPng from "../../../assets/img/Pussyhair.png";
import { Box } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface CollctionCardProps {
  name: string;
  count: number;
  onClick?: any;
  OpenDeleteModal?: any;
}

export default function CollctionCard({
  name,
  count,
  onClick,
  OpenDeleteModal,
}: CollctionCardProps) {
  const classes = CollectionCardStyle();
  const { t } = useTranslation();
  //    ellipse icon relate
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = () => {
    OpenDeleteModal();
    handleClose();
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <div aria-controls="simple-menu" aria-haspopup="true">
            <Box className={clsx(classes.moreIcon)} onClick={handleOpen}>
              <i className="fas fa-ellipsis-h"></i>
            </Box>

            <StyledDeletePopover
              id="simple-menu"
              anchorEl={anchorNetwork}
              keepMounted
              open={Boolean(anchorNetwork)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <StyledDeleteItem
                disableRipple
                onClick={() => handleItem()}
                className={classes.menuItem}
              >
                <Box className={classes.listContainer}>
                  <Box className={clsx(classes.listLabel)}>{t("Delete")}</Box>
                </Box>
              </StyledDeleteItem>
            </StyledDeletePopover>
          </div>
          <img src={PussyhairPng} className={classes.image} onClick={onClick} />
        </div>
        <div className={classes.nameContainer}>{name}</div>
        <div className={classes.descContainer}>
          <span>{t("Collection")}</span>
          <span className={classes.divide}></span>
          <span>
            {count} &nbsp; {t("items")}
          </span>
        </div>
      </div>
    </>
  );
}
