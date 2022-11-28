import ActionButton from "../Base/ActionButton";
import FormControl from "@material-ui/core/FormControl";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles, StyledInput } from "./CreateSceneSizeModalStyle";
import clsx from "clsx";
import { useEffect, useState } from "react";
import RoundBackBtn from "../Base/RoundBackBtn";

interface CreateSceneSizeModalProps {
  show: boolean;
  onBack: () => void;
}

export default function CreateSceneSizeModal({
  show,
  onBack,
}: CreateSceneSizeModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  const [graphic, setGraphic] = useState<any>();
  const [graphicStatus, setGraphicStatus] = useState(false);

  useEffect(()=>{
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },[show])

  const handleRows = (e: any) => {
    setRow(e.target.value);
  };

  const handleColumns = (e: any) => {
    setColumn(e.target.value);
  };

  useEffect(() => {
    let rowsItem: any = [];
    let columnsItem: any = [];

    for (let i = 0; i < column; i++) {
      rowsItem.push(
        <div
          key={i}
          className={
            row > 6 || column > 6
              ? classes.squareSmall
              : row > 4 || column > 4
              ? classes.squareMedium
              : classes.squareLarge
          }
        ></div>
      );
    }
    for (let j = 0; j < row; j++) {
      columnsItem.push(
        <div
          key={j}
          className={
            row > 6 || column > 6
              ? classes.squareRootSmall
              : row > 4 || column > 4
              ? classes.squareRootMedium
              : classes.squareRootLarge
          }
        >
          {rowsItem}
        </div>
      );
    }
    column * row > 32 ? setGraphicStatus(true) : setGraphicStatus(false);
    setGraphic(columnsItem);
  }, [row, column]);

  return (
    <>
      <div className={show ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <RoundBackBtn className={classes.backIcon} onBack={onBack} />
          <div className={classes.title}>{t("Create a Scene")}</div>
          <div className={classes.description}>
            {t("Set the size of your new scene")}
          </div>
          <div className={classes.content}>
            {graphicStatus ? (
              <div className={classes.cautionRoot}>
                <i className="far fa-exclamation-triangle"></i>
                <p className={classes.cautionLetter}>
                  Your Scene can't have more than 32 parcels
                </p>
              </div>
            ) : (
              graphic
            )}
          </div>
          <div className={classes.form_field}>
            <div className={classes.inputItem}>
              <div className={classes.subheader_label}>{t("ROWS")}</div>
              <FormControl className={classes.widthFull}>
                <StyledInput
                  type="number"
                  defaultValue={2}
                  onChange={(e) => {
                    handleRows(e);
                  }}
                />
              </FormControl>
            </div>
            <div className={classes.operatorIcon}>
              <i className="fas fa-times"></i>
            </div>
            <div className={classes.inputItem}>
              <div className={classes.subheader_label}>{t("COLUMNS")}</div>
              <FormControl className={classes.widthFull}>
                <StyledInput
                  type="number"
                  defaultValue={2}
                  onChange={(e) => {
                    handleColumns(e);
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className={classes.btnRoot}>
            <ActionButton
              color="dark"
              className={classes.nextBtn}
              onClick={onBack}
            >
              {t("Back")}
            </ActionButton>
            <ActionButton
              color="light"
              className={clsx(classes.nextBtn, classes.marginLeft)}
              onClick={() => {}}
            >
              {t("Create")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
