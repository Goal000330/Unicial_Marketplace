import {
  CollectibleSearchBarStyle,
} from "./CollectibleSearchBarStyle";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";

import CollectibleFilterDialog from "../CollectibleFilterDialog/CollectibleFilterDialog";
import { ListdropdownData1 } from "../../../config/ListdropdownData/ListdropdownData";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
import SearchInputFilter from "../../Base/SearchInputFilter";

export default function CollectibleSearchBar() {
  const classes = CollectibleSearchBarStyle();
  //
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
              <div className={classes.listdropdownContainer}>
                <GeneralListDropdown data={ListdropdownData1} />
              </div>
              {/* select end */}
              <div className={classes.OnSaleSwitchContainer}>
                <OnSaleSwitch letter="ON SALE" />
              </div>
              <div className={classes.filterDialogbtn}>
                <CollectibleFilterDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
