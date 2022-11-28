import { BuilderCollectionItemInfoStyle } from "./BuilderCollectionItemInfoStyle";
import RoundBackBtn from "../../../../components/Base/RoundBackBtn";
import {
  StyledCollectionPopover,
  StyledMenuItem,
} from "../BuilderCollectionsStyle";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import CreateItemModal from "../../../../components/CreateItemModal/CreateItemModal";
import SimpleDeleteModal from "../../../../components/SimpleDeleteModal/SimpleDeleteModal";
import moreIcon from "./../../../../assets/svg/more.png";
import React from "react";
import { itemMoreData } from "../../../../config/constant";
import YellowBtn from "../../../../components/Base/YellowBtn";
import productImg from "./../../../../assets/svg/texture.png";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function BuilderCollectionItemInfo() {
  const classes = BuilderCollectionItemInfoStyle();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createItemStatus, setCreateItemStatus] = useState(false);
  const [simpleDeleteStatus, setSimpleDeleteStatus] = useState(false);
  const handlecreateItem = () => {
    setCreateItemStatus(true);
  };
  const handleCreateItemClose = () => {
    setCreateItemStatus(false);
  };

  const handleSimpleDelete = () => {
    setSimpleDeleteStatus(true);
  };
  const handleSimpleDeleteClose = () => {
    setSimpleDeleteStatus(false);
  };
  //moreIcon relate start
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleMoreOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = (index: number) => {
    if (index === 1) {
      handlecreateItem();
    } else {
      handleSimpleDelete();
    }
    handleClose();
  };
  //moreIcon relate end
  const handleBack = () => {
    navigate(-1);
  };
  const handleNavigate = () => {
    navigate("/builder/builderItem-editor");
  };
  const handleNavigateItemInfo = () => {
    navigate("/builder/builder_collections/100");
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.topContainer}>
          <div className={classes.collectionNameContainer}>
            <RoundBackBtn className={classes.backBtn} onBack={handleBack} />
            <span className={classes.nameLetter}>{t("OrionNFT")}</span>
          </div>
          <div className={classes.btnSetContainer}>
            <YellowBtn
              letter={t("Open in Editor")}
              className={classes.openEditor}
              onClick={handleNavigate}
            />
            <div aria-controls="simple-menu" aria-haspopup="true">
              <Box
                className={classes.moreIconContainer}
                onClick={handleMoreOpen}
              >
                <img src={moreIcon} />
              </Box>
              <StyledCollectionPopover
                id="simple-menu"
                anchorEl={anchorNetwork}
                keepMounted
                open={Boolean(anchorNetwork)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {itemMoreData.map((item: any, index: any) => (
                  <StyledMenuItem
                    disableRipple
                    onClick={() => handleItem(item.index)}
                    key={index}
                  >
                    <Box className={classes.listContainer}>
                      <Box className={clsx(classes.listLabel)}>
                        {item.content}
                      </Box>
                    </Box>
                  </StyledMenuItem>
                ))}
              </StyledCollectionPopover>
            </div>
          </div>
        </div>
        <div className={classes.totalInfoContainer}>
          <div className={classes.productContainer}>
            <div className={classes.yellowPart}></div>
            <div className={classes.imgContainer}>
              <img src={productImg} className={classes.img} />
            </div>
          </div>
          <div className={classes.InfoContainer}>
            <div className={classes.itemContainer}>
              <div className={classes.title}>{t("category")}</div>
              <div className={classes.content}>{t("Eyes")}</div>
            </div>
            <div className={classes.itemContainer}>
              <div className={classes.title}>{t("Representation")}</div>
              <div className={classes.content}>{t("Male")}</div>
            </div>
            <div className={classes.itemContainer}>
              <div className={classes.title}>{t("Rarity")}</div>
              <div className={classes.content}>{t("Unique")}</div>
            </div>
            <div className={classes.itemContainer}>
              <div className={classes.title}>{t("Collection")}</div>
              <div
                className={classes.gradientContent}
                onClick={handleNavigateItemInfo}
              >
                {t("Orion NFT")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateItemModal
        headerTitle={t("New Item")}
        show={createItemStatus}
        onClose={handleCreateItemClose}
      />
      <SimpleDeleteModal
        show={simpleDeleteStatus}
        onClose={handleSimpleDeleteClose}
      />
    </>
  );
}
