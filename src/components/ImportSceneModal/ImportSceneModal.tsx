import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./ImportSceneModalStyle";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import RoundBackBtn from "../Base/RoundBackBtn";

interface ImportSceneModalProps {
  show: boolean;
  onClose: () => void;
}

export default function ImportSceneModal({
  show,
  onClose,
}: ImportSceneModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [importData, setImportData] = useState<any>();

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  const handleImportFile = (e: any) => {
    setImportData(e.target.files);
  };

  return (
    <>
      <div
        className={show ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <RoundBackBtn
            className={classes.closeIcon}
            onBack={onClose}
            type='multiply'
          />
          <div className={classes.title}>{t("Import Scene")}</div>
          <div className={classes.description}>
            {t("You can import any Scene made with the Builder")}!
          </div>
          <div className={classes.importContent}>
            <div className={classes.arrowImg} onClick={() => {}}>
              <i className='far fa-arrow-from-bottom'></i>
            </div>
            <span className={classes.contentLetter}>
              {t("Drag your Asset file here in")}{" "}
              <span className={classes.importantLink} onClick={() => {}}>
                {t("ZIP, GLTF, GLB, JPG, PNG")}
              </span>{" "}
              {t("format, or")}
              <br />
              <span
                className={classes.importantFunctionLink}
                onClick={() => {}}>
                {t("Browse your computer")}.
                <input
                  type='file'
                  className={classes.fileImport}
                  onChange={(e) => {
                    handleImportFile(e);
                  }}></input>
              </span>{" "}
            </span>
          </div>
          <div className={classes.btnRoot}>
            <ActionButton
              color='dark'
              className={classes.nextBtn}
              onClick={onClose}>
              {t("Cancel")}
            </ActionButton>
            <ActionButton
              color='light'
              className={clsx(classes.nextBtn, classes.marginLeft)}
              onClick={() => {}}>
              {t("Next")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
