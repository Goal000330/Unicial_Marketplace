import { BuilderCollectionEditStyle } from "./BuilderCollectionEditStyle";
import RoundBackBtn from "../../../../components/Base/RoundBackBtn";
import {
  StyledCollectionPopover,
  StyledMenuItem,
} from "../BuilderCollectionsStyle";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import CreateItemModal from "../../../../components/CreateItemModal/CreateItemModal";
import SettingPriceModal from "../../../../components/SettingPriceModal/SettingPriceModal";
import moreIcon from "./../../../../assets/svg/more.png";
import React from "react";
import { collectionEditMoreIconData } from "../../../../config/constant";
import YellowBtn from "../../../../components/Base/YellowBtn";
import CoolNotification from "../../../../components/Base/CoolNotification";
import LookingGood from "../../../../components/Base/LookingGodd";
import CollectionItemInfoRow from "../../../../components/Base/CollectionItemInfoRow";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function BuilderCollectionEdit() {
  const classes = BuilderCollectionEditStyle();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createItemStatus, setCreateItemStatus] = useState(false);
  const [settingPriceStatus, setSettingPriceStatus] = useState(false);
  const handlecreateItem = () => {
    setCreateItemStatus(true);
  };
  const handleCreateItemClose = () => {
    setCreateItemStatus(false);
  };
  const handleSettingPriceClose = () => {
    setSettingPriceStatus(false);
  };
  //moreIcon relate start
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = (index: number) => {
    switch (index) {
      case 1:
        handleClose();
        break;
      case 2:
        navigate("/builder/builderItem-editor");

        handleClose();
        break;
      case 3:
        handleClose();
        break;
      case 4:
        handleClose();
        break;
      case 5:
        handleClose();
        break;
      case 6:
        handleClose();
        break;
      case 7:
        handleClose();
        break;
    }
    handleClose();
  };
  //moreIcon relate end
  const handlePhoto = () => {
    navigate("/builder/builder_items/200");
  };
  const handleBack = () => {
    navigate(-1);
  };
  let status = 2;

  const handleSetClick = () => {
    setSettingPriceStatus(true);
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
            <div className={classes.newItemBtnroot}>
              <div
                className={classes.newItemBtnContainer}
                onClick={handlecreateItem}
              >
                <i className="far fa-plus plusIcon"></i>&nbsp; {t("New Item")}
              </div>
            </div>
            <div
              className={classes.moreIconroot}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              <Box className={classes.moreIconContainer} onClick={handleOpen}>
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
                {collectionEditMoreIconData.map((item: any, index: any) => (
                  <StyledMenuItem
                    disableRipple
                    onClick={() => handleItem(item.index)}
                    key={index}
                    className={classes.menuItem}
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
            <YellowBtn letter="Publish" disabled />
          </div>
        </div>
        <CoolNotification className={classes.coolnotificationContainer} />
        {status === 1 ? (
          <LookingGood className={classes.lookingGoodContainer} />
        ) : (
          <div className={classes.rowsRoot}>
            <CollectionItemInfoRow
              handlePhoto={handlePhoto}
              setClick={handleSetClick}
              className={classes.rowContainer}
            />
            <CollectionItemInfoRow
              handlePhoto={handlePhoto}
              setClick={handleSetClick}
              className={classes.rowContainer}
            />
          </div>
        )}
      </div>
      <CreateItemModal
        headerTitle="New Item"
        show={createItemStatus}
        onClose={handleCreateItemClose}
      />
      <SettingPriceModal
        show={settingPriceStatus}
        onClose={handleSettingPriceClose}
      />
    </>
  );
}
