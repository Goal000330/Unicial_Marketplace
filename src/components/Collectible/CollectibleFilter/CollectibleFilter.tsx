import React, { useState, useEffect } from "react";
import { CollectibleFilterStyle } from "./CollectibleFilterStyle";
import Tag from "../../Base/Tag";
import StyledRadio from "../../Base/StyledRadio";
import {
  collectionData,
  networkData,
  filterListData,
} from "../../../config/Collectible/collectionData";
//
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import closeSvg from "../../../assets/svg/close.svg";
import { useTranslation } from "react-i18next";
import BorderListDropdown from "../../Base/BorderListDropdown/BorderListDropdown";

export default function CollectibleFilter() {
  const classes = CollectibleFilterStyle();
  const [selectedArray, setSelectedArray] = useState([""]);
  const [showClearFilterBtn, setShowClearFilterBtn] = useState(false);

  const { t } = useTranslation();

  const handleClickTag = (e: number) => {
    let newSelectedTile: string[] = [];
    const selectedIndex = selectedArray.indexOf(filterListData[e].category, 0);
    if (selectedIndex === -1) {
      newSelectedTile = newSelectedTile.concat(
        selectedArray,
        filterListData[e].category
      );
    } else if (selectedIndex === 0) {
      newSelectedTile = newSelectedTile.concat(selectedArray.slice(1));
    } else if (selectedIndex === selectedArray.length - 1) {
      newSelectedTile = newSelectedTile.concat(selectedArray.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTile = newSelectedTile.concat(
        selectedArray.slice(0, selectedIndex),
        selectedArray.slice(selectedIndex + 1)
      );
    }
    setSelectedArray(newSelectedTile);
  };

  const handleClickClear = () => {
    setSelectedArray([""]);
  };

  useEffect(() => {
    selectedArray.length !== 1
      ? setShowClearFilterBtn(true)
      : setShowClearFilterBtn(false);
  }, [selectedArray]);

  //radio relate
  const [value, setValue] = React.useState("Male");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.selectPart}>
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
            {/* network select start */}
            <div>
              <BorderListDropdown data={networkData} />
            </div>
            {/*network select end */}
          </div>
        </div>
        {/* downPart Rarity & Genger */}
        <div className={classes.selectPart} style={{ marginTop: "12px" }}>
          {/* gender part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("GENDER")}</div>
              {/* radio realte */}
              <RadioGroup
                aria-label='gender'
                name='gender1'
                value={value}
                onChange={handleRadioChange}
                className={classes.genderRadioContainer}>
                <FormControlLabel
                  value='Male'
                  control={<StyledRadio />}
                  label='Male'
                />
                <FormControlLabel
                  value='Female'
                  control={<StyledRadio />}
                  label='Female'
                />
              </RadioGroup>
            </div>
          </div>
          {/* rarity part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("RARITY")}</div>
              <div className={classes.options}>
                {filterListData?.map((data, index) => {
                  return selectedArray.indexOf(data.category) >= 0 ? (
                    <Tag
                      key={index}
                      color='EpicColor'
                      letter={data.category}
                      onClick={() => handleClickTag(index)}
                    />
                  ) : (
                    <Tag
                      key={index}
                      color='DefaultColor'
                      letter={data.category}
                      onClick={() => handleClickTag(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div
            className={
              showClearFilterBtn === true
                ? classes.clearFilterContainer
                : classes.clearFilterContainerNone
            }
            onClick={handleClickClear}>
            <div className={classes.clearFilterLabel}>{t("Clear Filter")}</div>
            <img src={closeSvg} className={classes.closeicon} />
          </div>
        </div>
      </div>
    </>
  );
}
