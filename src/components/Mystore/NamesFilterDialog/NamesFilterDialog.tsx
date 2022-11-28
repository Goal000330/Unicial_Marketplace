import React from "react";
import { CollectibleFilterDialogStyle } from "./NamesFilterDialogStyle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterTiltShiftIcon from "@material-ui/icons/FilterTiltShift";
import { useTranslation } from "react-i18next";
import ActionButton from "../../Base/ActionButton";
import { namesOrderByData } from "../../../config/Mystore/orderbyData";
import BorderListDropdown from "../../Base/BorderListDropdown/BorderListDropdown";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
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
          {t("Filter2")}
        </DialogTitle>
        <DialogContent>
          {/* orderby select start */}
          <div className={classes.orderbyContainer}>
            <div className={classes.orderbyTitle}>{t("Order By")}</div>
            <BorderListDropdown data={namesOrderByData} />
          </div>
          {/* / on sale part/ */}
          <div>
            <OnSaleSwitch letter="ON SALE" />
          </div>
        </DialogContent>
        <DialogActions className={classes.actionBtnContainer}>
          <ActionButton
            color="light"
            className={classes.actionBtn}
            onClick={handleDialogClose}
          >
            {t("APPLY")}
          </ActionButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
