import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import CreateSceneModal from "../../../components/CreateSceneModal/CreateSceneModal";
import ImportSceneModal from "../../../components/ImportSceneModal/ImportSceneModal";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderScenesStyles";
import sceneImg from "../../../assets/img/sceneImg.png";
import CreateSceneSizeModal from "../../../components/CreateSceneSizeModal/CreateSceneSizeModal";
import { useNavigate } from "react-router";
import OvalBtn from "../../../components/Base/OvalBtn";

export const sceneData = [
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
  {
    name: "Name",
    size: "32x32m",
  },
];

export default function BuilderScenes() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showImportModal, setShowImportModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCreateSizeModal, setShowCreateSizeModal] = useState(false);

  const handleCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCreateClose = () => {
    setShowCreateModal(false);
  };

  const handleCreateStep1 = (e: any) => {
    setShowCreateModal(false);
    setShowCreateSizeModal(true);
  };

  const handleImportModal = () => {
    setShowImportModal(true);
  };

  const handleImportClose = () => {
    setShowImportModal(false);
  };

  const handleToCreateStep1 = () => {
    setShowCreateSizeModal(false);
    setShowCreateModal(true);
  };

  const handleToScenePool = () => {
    navigate("/builder/builder_scenes/pools");
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 {t("RESULTS")}</div>
          <div className={classes.functionBtn}>
            <OvalBtn
              className={classes.functionIcon}
              onClick={handleImportModal}
              type='toparrow'
            />
            <OvalBtn
              className={classes.functionIcon}
              onClick={handleCreateModal}
            />
          </div>
        </div>
        <div className={classes.createContent}>
          <span className={classes.contentLetter}>
            {t("It looks like that you don't have any Scenes")}.
            <br />
            <span className={classes.importantLink} onClick={handleCreateModal}>
              {t("Click here")}
            </span>{" "}
            {t("to get started")}.
          </span>
        </div>
        <div className={clsx(classes.createBtns, classes.secondPart)}>
          <div className={classes.resultStatus1}>
            {t("From The Scene Pool")}
          </div>
          <div className={classes.functionBtn}>
            <div className={classes.viewLetter} onClick={handleToScenePool}>
              {t("View More")}
            </div>
            <div className={classes.viewArrow}>
              <i className='far fa-angle-right'></i>
            </div>
          </div>
        </div>
        <div className={classes.sceneContent}>
          {sceneData?.map((item: any, key: any) => {
            return (
              <div key={key} className={classes.sceneCardRoot}>
                <div className={classes.sceneImgRoot}>
                  <img src={sceneImg} className={classes.sceneImg} alt='alt' />
                </div>
                <div className={classes.sceneName}>{item.name}</div>
                <div className={classes.sceneSize}>{item.size}</div>
              </div>
            );
          })}
        </div>
      </div>
      <ImportSceneModal show={showImportModal} onClose={handleImportClose} />
      <CreateSceneModal
        show={showCreateModal}
        onClose={handleCreateClose}
        onCreate={(e) => handleCreateStep1(e)}
      />
      <CreateSceneSizeModal
        show={showCreateSizeModal}
        onBack={handleToCreateStep1}
      />
    </>
  );
}
