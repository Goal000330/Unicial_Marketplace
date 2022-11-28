import { useTranslation } from "react-i18next";
import { useStyles } from "./SimpleDeleteModalStyle";
import { useState, useEffect, useRef } from "react";
import BorderBtn from "../Base/BorderBtn";
import YellowBtn from "../Base/YellowBtn";
interface Props {
  show: boolean;
  onClose: () => void;
}
export default function DeleteModal({ show, onClose }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [showStatus, setShowStatus] = useState(show);

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

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.title}>Delete “OrionNFT”?</div>
          <div className={classes.mainContainer}>
            <div className={classes.btnContainer}>
              <BorderBtn
                letter="Cancel"
                className={classes.cancelBtn}
                onClick={onClose}
              />
              <YellowBtn letter="OK" className={classes.okBtn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
