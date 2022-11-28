import { LandCardStyle } from "./LandCardStyle";
import headSvg from "../../../assets/svg/head.svg";
import unisexSvg from "../../../assets/svg/unisex.svg";
import landmap1Png from "../../../assets/img/landmap1.png";
//
import LocationBtn from "../../Base/LocationBtn";
import LandSize from "../../Base/LandSize";
import React, { useEffect } from "react";
import { getEstateSize } from "../../../../src/hooks/api";
import { getMetadata } from "../../../../src/hooks/api";
import { category } from "../../../config/constant";
import normalshapeSvg from "../../../assets/svg/normalshape.svg";

interface LandCardProps {
  type: string;
  tokenid?: any;
  locationbtnX?: number;
  locationbtnY?: number;
  landName?: string;
  categoryName: string;
  price?: number;
  onClick?: () => void;
}

export default function LandCard({
  type,
  tokenid,
  locationbtnX,
  locationbtnY,
  landName,
  categoryName,
  price,
  onClick,
}: LandCardProps) {
  const classes = LandCardStyle();
  const [count, setCount] = React.useState(0);
  const [land, setLand] = React.useState("");
  const getLandCount = async () => {
    if (type === category.estates) {
      await getEstateSize(tokenid).then((res: any) => {
        setCount(res);
      });
    }
  };

  const getMetaData = async () => {
    await getMetadata(tokenid).then((res: any) => {
      let metaData = res.split("^");
      setLand(metaData[0]);
    });
  };
  useEffect(() => {
    if (type === category.parcels) {
      if (landName === null || landName === "" || landName === undefined) {
        setLand("Parcel");
      } else {
        setLand(landName);
      }
    }
    if (type === category.estates) {
      getLandCount();
      getMetaData();
    }
  }, [tokenid]);
  return (
    <>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.header}>
          {type === category.parcels ? (
            <LocationBtn position={`${locationbtnX} , ${locationbtnY}`} dark />
          ) : (
            <LandSize count={count} />
          )}
          <div className={classes.iconContainer}>
            <img src={headSvg} className={classes.icon} alt="alt" />
            <img src={unisexSvg} className={classes.icon} alt="alt" />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={landmap1Png} className={classes.image} alt="alt" />
        </div>

        <div className={classes.productName}>{land}</div>

        <div className={classes.bottom}>
          <div className={classes.category}>{categoryName}</div>
          {price ? (
            <div className={classes.priceContainer}>
              <img src={normalshapeSvg} className={classes.icon} alt="alt" />
              <div className={classes.price}>{price}</div>
            </div>
          ) : (
            <div className={classes.priceContainer}>
              <div className={classes.emptyprice}>{}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
