import { CollectibleSearchBarStyle } from "./NamesSearchbarStyle";
import NamesFilterDialog from "../NamesFilterDialog/NamesFilterDialog";
import { useTranslation } from "react-i18next";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
import SearchInputFilter from "../../Base/SearchInputFilter";
import { ListdropdownData3 } from "../../../config/ListdropdownData/ListdropdownData";

export default function NamesSearchBar() {
  const classes = CollectibleSearchBarStyle();

  const { t } = useTranslation();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nftfillter}>
            <div className={classes.topbar}>
              <div>
                <SearchInputFilter />
              </div>
              {/* select start */}
              <div className={classes.listDropdownContainer}>
                <GeneralListDropdown data={ListdropdownData3} />
              </div>
              {/* select end */}
              <div className={classes.OnSaleContainer}>
                <OnSaleSwitch letter="ON SALE" />
              </div>
              <div className={classes.filterDialogbtn}>
                <NamesFilterDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
