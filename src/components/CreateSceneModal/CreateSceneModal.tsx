import ActionButton from "../Base/ActionButton";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles, StyledInput } from "./CreateSceneModalStyle";
import { useEffect, useRef, useState } from "react";
import RoundBackBtn from "../Base/RoundBackBtn";

interface CreateSceneModalProps {
  show: boolean;
  onClose: () => void;
  onCreate: (e: any) => void;
}

export default function CreateSceneModal({
  show,
  onClose,
  onCreate,
}: CreateSceneModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

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

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleDes = (e: any) => {
    setDes(e.target.value);
  };

  const handleCreate = () => {
    let param = {
      name: name,
      des: des,
    };
    onCreate(param);
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
          <div className={classes.title}>{t("Create a Scene")}</div>
          <div className={classes.description}>
            {t("Set a name and description for your scene")}
          </div>
          <div className={classes.form_field}>
            <div className={classes.subheader_label}>{t("NAME")}</div>
            <FormControl className={classes.widthFull}>
              <StyledInput
                placeholder={t("New scene")}
                onChange={(e) => {
                  handleName(e);
                }}
              />
            </FormControl>
            <div className={classes.subheader_label}>{t("DESCRIPTION")}</div>
            <TextareaAutosize
              className={classes.descriptionTextField}
              aria-label='maximum height'
              placeholder={t("Some description ...")}
              onChange={(e) => {
                handleDes(e);
              }}
            />
          </div>
          <div className={classes.btnRoot}>
            <ActionButton
              color='light'
              className={classes.nextBtn}
              onClick={handleCreate}>
              {t("Create")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
