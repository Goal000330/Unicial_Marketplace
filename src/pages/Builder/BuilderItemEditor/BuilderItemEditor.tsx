import { BuilderItemEditorStyle } from "./BuilderItemEditorStyle";
import MyItemSideBar from "../../../components/MyItemSideBar/MyItemSideBar";
import PropertySideBar from "../../../components/PropertySideBar/PropertySideBar";
import blackManImg from "../../../assets/img/blackMan.png";
import CreateItemModal from "../../../components/CreateItemModal/CreateItemModal";
import { useState } from "react";
import CreateCollectionModal from "../../../components/CreateCollectionModal/CreateCollectionModal";
import { useTranslation } from "react-i18next";

export default function BuilderItemEditor() {
  const classes = BuilderItemEditorStyle();
  const { t } = useTranslation();
  const [createItemStatus, setCreateItemStatus] = useState(false);
  const handlecreateItemOpen = () => {
    setCreateItemStatus(true);
  };
  const handleCreateItemClose = () => {
    setCreateItemStatus(false);
  };
  //
  const [createCollectionStatus, setCreateCollectionStatus] = useState(false);
  const handlecreateCollectionOpen = () => {
    setCreateCollectionStatus(true);
  };
  const handleCreateCollectionClose = () => {
    setCreateCollectionStatus(false);
  };

  return (
    <>
      <div className={classes.root}>
        <MyItemSideBar
          OpencreateItem={handlecreateItemOpen}
          OpencreateCollection={handlecreateCollectionOpen}
        />
        <div className={classes.charactorContainer}>
          <img src={blackManImg} className={classes.blackman} />
        </div>
        <PropertySideBar />
      </div>
      <CreateItemModal
        headerTitle={t("New Item")}
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
