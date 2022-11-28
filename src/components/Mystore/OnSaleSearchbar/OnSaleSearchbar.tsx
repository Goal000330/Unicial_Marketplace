import { OnSaleSearchbarStyle } from "./OnSaleSearchbarStyle";
import { useTranslation } from "react-i18next";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import SearchInputFilter from "../../Base/SearchInputFilter";
import { ListdropdownData4 } from "../../../config/ListdropdownData/ListdropdownData";

export default function MystoreSearchBar() {
  const classes = OnSaleSearchbarStyle();
  const { t } = useTranslation();
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
              <div>
                <GeneralListDropdown data={ListdropdownData4} />
              </div>
              {/* select end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
