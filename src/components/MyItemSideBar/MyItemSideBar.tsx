import { MyItemSideBarStyle } from "./MyItemSideBarStyle";
import menuIcon from "./../../assets/svg/menu.png";
import { useLocation, useNavigate } from "react-router";
import { Box } from "@material-ui/core";
import {
  StyledCollectionPopover,
  StyledMenuItem,
} from "../../pages/Builder/BuilderCollections/BuilderCollectionsStyle";
import React from "react";
import { collectionsPlusData } from "../../config/constant";
import clsx from "clsx";
import ItemRow from "./../Base/ItemRow";
import CollectionRow from "../Base/CollectionRow";
import { editorItemsData, editorCollectionsData } from "../../config/constant";

interface Props {
  OpencreateItem?: any;
  OpencreateCollection?: any;
}

export default function MyItemSideBar({
  OpencreateItem,
  OpencreateCollection,
}: Props) {
  const classes = MyItemSideBarStyle();
  const navigate = useNavigate();

  const handleToCollection = () => {
    navigate("/builder/builder_collections");
  };
  //    plus icon relate
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
    if (index === 1) {
      OpencreateItem();
    } else {
      OpencreateCollection();
    }
    handleClose();
  };
  //
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.myItemNavbar}>
          <img
            src={menuIcon}
            onClick={handleToCollection}
            className={classes.menuIcon}
          />
          <span className={classes.NavbarTitle}>My Items</span>
          <div aria-controls="simple-menu" aria-haspopup="true">
            <Box onClick={handleOpen} className={classes.plusIcon}>
              <i className="fas fa-plus "></i>
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
              className={classes.createPopover}
            >
              {collectionsPlusData.map((item: any, index: any) => (
                <StyledMenuItem
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
        </div>
        <div className={classes.totalInfoContainer}>
          <div className={classes.itemInfoRoot}>
            <div className={classes.title}>ITEMS</div>
            <div className={classes.scrollContainer}>
              {editorItemsData.map((item: any, key: any) => {
                return <ItemRow name={item?.name} key={key} />;
              })}
            </div>
          </div>
          <div className={classes.collectionInfoRoot}>
            <div className={classes.title}>COLLECTIONS</div>
            <div className={classes.scrollContainer}>
              {editorCollectionsData.map((item: any, key: any) => {
                return <CollectionRow name={item.name} count={item.count} key={key} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
