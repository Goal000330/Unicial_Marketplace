import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import CreateCard from "../../../components/Base/CreateCard";
import {
  useStyles,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./BuilderCollectionsStyle";
import clsx from "clsx";
import {
  createCardletterData,
  collectionsPlusData,
  builderCollectionData,
  showMoreCount,
} from "../../../config/constant";
import CreateItemModal from "../../../components/CreateItemModal/CreateItemModal";
import CreateCollectionModal from "../../../components/CreateCollectionModal/CreateCollectionModal";
import { useState } from "react";
import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CollectionCard from "../../../components/Base/CollectionCard/CollectionCard";
import OvalBtn from "../../../components/Base/OvalBtn";
import DeleteModal from "../../../components/DeleteModal/DeleteModal";
import { useLocation, useNavigate } from "react-router";
import { ShowMoreLessBtn } from "../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { useTranslation } from "react-i18next";

export default function BuilderCollections() {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // showmore Btn relate start
  const [showStatus, setShowStatus] = useState(false);
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };
  // showmore Btn relate end

  //
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const [itemContent, setitemContent] = React.useState(
    collectionsPlusData[0].content
  );
  //
  const [createItemStatus, setCreateItemStatus] = useState(false);
  const [createCollectionStatus, setCreateCollectionStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const handleDeleteModalClose = () => {
    setDeleteModalStatus(false);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalStatus(true);
  };

  const handlecreateItem = () => {
    setCreateItemStatus(true);
  };
  const handleCreateItemClose = () => {
    setCreateItemStatus(false);
  };
  //
  const handlecreateCollection = () => {
    setCreateCollectionStatus(true);
  };
  const handleCreateCollectionClose = () => {
    setCreateCollectionStatus(false);
  };
  //plus icon relate start
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = (index: number) => {
    setitemContent(collectionsPlusData[index - 1].content);
    if (index === 1) {
      handlecreateItem();
    } else {
      handlecreateCollection();
    }
    handleClose();
  };
  //plus icon relate end
  const handleNavigate = () => {
    navigate("/builder/builder_collections/100");
  };

  const handleToEditor = () => {
    navigate("/builder/builderItem-editor");
  };
  let itemStatus = 1;
  return (
    <>
      <BuilderTopTab />

      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 {t("RESULTS")}</div>
          <div className={classes.functionBtn}>
            <div aria-controls="simple-menu" aria-haspopup="true">
              <Box onClick={handleOpen}>
                <OvalBtn className={classes.functionIcon} />
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
                {collectionsPlusData.map((item: any, index: any) => (
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

            <div className={classes.openEditorRoot} onClick={handleToEditor}>
              <div className={classes.openEditorContainer}>
                {t("Open Editor")}
              </div>
            </div>
          </div>
        </div>
        {itemStatus === 1 ? (
          <>
            <div className={classes.noItemsRoot}>
              <Grid container spacing={2}>
                {builderCollectionData
                  ?.slice(
                    0,
                    !showStatus ? showMoreCount : builderCollectionData.length
                  )
                  .map((item: any, key: any) => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={key}>
                        <CollectionCard
                          name={item.name}
                          count={item.count}
                          onClick={handleNavigate}
                          OpenDeleteModal={handleDeleteModalOpen}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
            <div
              className={
                builderCollectionData.length < showMoreCount
                  ? classes.displayNone
                  : classes.showmoreContent
              }
            >
              <ShowMoreLessBtn
                letter={showStatus ? "Show Less" : "Show All"}
                onClick={handleShowBtn}
              />
            </div>
          </>
        ) : (
          <>
            <div className={classes.noItemsRoot}>
              <div className={classes.noItemsContainer}>
                <div className={classes.noItemsInfoContainer}>
                  <div className={classes.noItemsTitle}>{t("No items")}</div>
                  <div className={classes.noItemsDesc}>
                    {t(
                      "No itemsYou have no Items or Collections yet. Create a new item or collection, and dress the metaverse in style!"
                    )}
                  </div>
                </div>
                <div className={classes.CardsContainer}>
                  <div
                    className={clsx(classes.CardContainer, classes.MarginRight)}
                  >
                    <CreateCard
                      letter={createCardletterData.new_item}
                      onClick={handlecreateItem}
                    />
                  </div>
                  <div className={classes.CardContainer}>
                    <CreateCard
                      letter={createCardletterData.new_collection}
                      onClick={handlecreateCollection}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <DeleteModal show={deleteModalStatus} onClose={handleDeleteModalClose} />

      <CreateItemModal
        headerTitle="New Item"
        show={createItemStatus}
        onClose={handleCreateItemClose}
      />
      <CreateCollectionModal
        show={createCollectionStatus}
        onClose={handleCreateCollectionClose}
      />
    </>
  );
}
