import React from "react";
import {
  MystoreSearchBarStyle,
} from "./MystoreSearchBarStyle";
import { useTranslation } from "react-i18next";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import SearchInputFilter from "../../Base/SearchInputFilter";
import { ListdropdownData2 } from "../../../config/ListdropdownData/ListdropdownData";

export default function MystoreSearchBar() {
  const classes = MystoreSearchBarStyle();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [listIndex, setlistIndex] = React.useState("Cheapest");

  const handleCheapest = () => {
    setlistIndex("Cheapest");
    handleClose();
  };
  const handleRecentlyListied = () => {
    setlistIndex("Recently listed");
    handleClose();
  };
  const handleRecentlySold = () => {
    setlistIndex("Recently sold");
    handleClose();
  };
  const handleNewest = () => {
    setlistIndex("Newest");
    handleClose();
  };
  const handleName = () => {
    setlistIndex("Newest");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <GeneralListDropdown data={ListdropdownData2} />
              </div>
              {/* select end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
