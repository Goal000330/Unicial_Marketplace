import React from "react";
import { CollectibleFilterDialogStyle } from "./CollectibleFilterDialogStyle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterTiltShiftIcon from "@material-ui/icons/FilterTiltShift";
import { FormControlLabel, RadioGroup } from "@material-ui/core";
import {
  collectionData,
  networkData,
} from "../../../config/Collectible/collectionData";
import { ListdropdownData1 } from "../../../config/ListdropdownData/ListdropdownData";

import BorderListDropdown from "../../Base/BorderListDropdown/BorderListDropdown";
import StyledRadio from "../../Base/StyledRadio";
import Tag from "../../Base/Tag";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
import { useTranslation } from "react-i18next";
import ActionButton from "../../Base/ActionButton";
import AssetsBox from "../../Mystore/AssetsBox/AssetsBox";
export default function CollectibleFilterDialog() {
  const classes = CollectibleFilterDialogStyle();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  //dialog relate

  //radio relate
  const [value, setValue] = React.useState("Male");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.dialogRoot}>
      <div
        color="primary"
        onClick={handleDialogOpen}
        className={classes.openfilter}
      >
        <div className={classes.openfilterLabel}>{t("FILTER")}</div>
        <div className={classes.filtericonContainer}>
          <FilterTiltShiftIcon />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialogContainer}
      >
        <DialogTitle id="form-dialog-title" className={classes.maintitle}>
          {t("Filter")}
        </DialogTitle>
        <DialogContent>
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>{t("Collections")}</div>
            {/* collection select start */}
            <div>
              <BorderListDropdown data={collectionData} />
            </div>
            {/*collection select end */}
          </div>
          {/* // */}
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>{t("Network")}</div>
            {/* network select start */}ma
            <div>
              <BorderListDropdown data={networkData} />
            </div>
            {/*network select end */}
          </div>
          {/* /smart wearables part/ */}
          <div>
            <OnSaleSwitch letter="SMART WEARABLES" />
          </div>
          {/* gender part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("GENDER")}</div>
              {/* radio realte */}
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleRadioChange}
                className={classes.genderRadioContainer}
              >
                <FormControlLabel
                  value="Male"
                  control={<StyledRadio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<StyledRadio />}
                  label="Female"
                />
              </RadioGroup>
            </div>
          </div>
          {/* rarity part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("RARITY")}</div>
              <div className={classes.options}>
                <Tag color="CommonColor" letter="COMMON" />
                <Tag color="RareColor" letter="RARE" />
                <Tag color="EpicColor" letter="EPIC" />
                <Tag color="LegendaryColor" letter="LEGENDARY" />
                <Tag color="DefaultColor" letter="MYTHIC" />
                <Tag color="DefaultColor" letter="UNIQUE" />
              </div>
            </div>
          </div>
          {/* orderby select start */}
          <div className={classes.orderbyContainer}>
            <div className={classes.orderbyTitle}>{t("Order By")}</div>
            <BorderListDropdown data={ListdropdownData1} />
          </div>
          {/* / on sale part/ */}
          <div>
            <OnSaleSwitch letter="ON SALE" />
          </div>
          {/* mobile categorybox */}
          <div>
            {/* <MobileCategoryBox /> */}
            <AssetsBox />
          </div>
        </DialogContent>
        <DialogActions className={classes.actionBtnContainer}>
          <ActionButton color="light" className={classes.actionBtn}>
            {t("APPLY")}
          </ActionButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
