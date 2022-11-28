import PropertyLayerSetting from "../Base/PropertyLayerSetting/PropertyLayerSetting";
import { PropertySideBarStyle } from "./PropertySideBarStyle";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import photoItem from "../../assets/svg/photoItem.svg";
import triangleIcon from "../../assets/svg/triangle.png";
import materialIcon from "../../assets/svg/material.png";
import textureIcon from "../../assets/svg/texture.png";
import PropertiesInput from "../Base/PropertiesInput";
import PropertiesCategory from "../Base/PropertiesCategory";

export default function PropertySideBar() {
  const classes = PropertySideBarStyle();

  const categoryData: any = ["Eyebrows", "Eyes", "Mouth"];
  const rareData: any = [
    "Unique",
    "Mythic",
    "Legendary",
    "Epic",
    "Rare",
    "Umcommon",
    "Common",
  ];
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.propertyNavbar}>
          <span className={classes.NavbarTitle}>Properties</span>
        </div>
        <div className={classes.layersRoot}>
          <PropertyLayerSetting title='Details'>
            <div className={classes.photoInfoContainer}>
              <div className={classes.photoUppart}>
                <div className={classes.photoContainer}>
                  <img
                    src={photoItem}
                    className={classes.photo}
                    alt='photoItem'
                  />
                  <PhotoCameraIcon className={classes.camera} />
                </div>
                <div className={classes.photoDetailInfoContainer}>
                  <div className={classes.triangleContainer}>
                    <img src={triangleIcon} className={classes.triangleicon} />
                    <span>100 triangles</span>
                  </div>
                  <div className={classes.triangleContainer}>
                    <img src={materialIcon} className={classes.triangleicon} />
                    <span>1 material</span>
                  </div>
                  <div className={classes.triangleContainer}>
                    <img src={textureIcon} className={classes.triangleicon} />
                    <span>1 texture</span>
                  </div>
                </div>
              </div>
              <div className={classes.functionIconRoot}>
                <div className={classes.downLoadIcon}>
                  <i className='fas fa-arrow-to-bottom'></i>
                </div>
                <div className={classes.downLoadIcon}>
                  <i className='fas fa-pen'></i>
                </div>
              </div>
            </div>
          </PropertyLayerSetting>
          <PropertyLayerSetting title='Basics'>
            <div className={classes.basicRoot}>
              <PropertiesInput
                name='1 texture'
                defaultInputValue='05 Economy'
                className={classes.basicInput}
              />
              <PropertiesInput
                name='Description'
                defaultInputValue='This is Nft.'
                className={classes.basicInput}
              />
              <PropertiesInput
                name='Category'
                type='dropdown'
                className={classes.basicInput}
                defaultInputValue={categoryData[0]}
                item={categoryData}
              />
              <PropertiesInput
                name='Rarity'
                type='dropdown'
                item={rareData}
                defaultInputValue={rareData[0]}
              />
            </div>
          </PropertyLayerSetting>
          <PropertyLayerSetting title='Overrides'>
            <div className={classes.overridesRoot}>
              <PropertiesCategory
                name='Replaces'
                type='dropdown'
                className={classes.overridesInput}
                defaultInputValue='Select an option'
                item={categoryData}
              />
              <PropertiesCategory
                name='Hides'
                type='dropdown'
                item={rareData}
                defaultInputValue='Select an option'
              />
            </div>
          </PropertyLayerSetting>
          <PropertyLayerSetting title='Tags'>
            <div className={classes.tagsRoot}>
              <PropertiesCategory name='' defaultInputValue='' />
            </div>
          </PropertyLayerSetting>
        </div>
      </div>
    </>
  );
}
