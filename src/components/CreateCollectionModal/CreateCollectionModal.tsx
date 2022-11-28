import { useTranslation } from "react-i18next";
import { useStyles } from "./CreateCollectionModalStyle";
import { useState, useEffect, useRef } from "react";
import { FormControl } from "@material-ui/core";
import { StyledInput } from "./../CreateSceneModal/CreateSceneModalStyle";
import RoundBackBtn from "../Base/RoundBackBtn";
import YellowBtn from "../Base/YellowBtn";
interface Props {
  show: boolean;
  onClose: () => void;
}
export default function CreateSceneModal({ show, onClose }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [showStatus, setShowStatus] = useState(show);
  const [name, setName] = useState("");
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setShowStatus(show);
  }, [show]);

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

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <RoundBackBtn
            className={classes.closeIcon}
            onBack={onClose}
            type="multiply"
          />
          <div className={classes.title}>New Collection</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              Enter a descriptive name for your new collection
            </div>
            <div className={classes.name}>Name</div>
            <FormControl className={classes.widthFull}>
              <StyledInput
                placeholder={t("My Collection")}
                onChange={(e) => {
                  handleName(e);
                }}
              />
            </FormControl>
            <div className={classes.name}>
              The name can be 32 characters at most
            </div>
            <YellowBtn letter="Create" className={classes.createbtn} />
          </div>
        </div>
      </div>
    </>
  );
}
