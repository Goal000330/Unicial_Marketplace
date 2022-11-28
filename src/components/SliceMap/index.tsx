import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Atlas, Layer } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { saleParcels } from "../../store/saleparcels/selectors";
import { totalSpace } from "../../store/parcels/selectors";
import { setSaleParcels } from "../../store/saleparcels";
import { setSpaces } from "../../store/parcels";
import { selectLoginAddress } from "../../store/auth/selectors";
import { getCoords } from "../../common/utils";
import { useStyles } from "./SliceMapStyle";
import { mapColor } from "../../config/constant";

declare var window: any;

interface SliceMapProps {
  centerX?: any;
  centerY?: any;
}

const SliceMap: React.FC<SliceMapProps> = ({ centerX, centerY }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [onSale, setOnSale] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tokensid } = useParams();

  const query = new URLSearchParams(location.search);

  const saleSpaces: any = useAppSelector(saleParcels);
  const tiles: any = useAppSelector(totalSpace);
  const loginAddress: any = useAppSelector(selectLoginAddress);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
      setHeight(420);
    } else if (window.innerWidth <= 500) {
      setWidth(329);
      setHeight(329);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const isSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleSpaces) return false;
      const tile: any = saleSpaces && (saleSpaces[getCoords(x, y)] as Tile);

      if (onSale === true && tile) {
        return true;
      }
      return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [saleSpaces, onSale]
  );
  
  const isEstated = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.estateId) {
        return true;
      } else return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [tiles]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles[getCoords(x, y)] as Tile;

      if (tile?.estateId && tokensid === tile?.estateId) {
        return true;
      }
      if (tokensid && tile && tokensid === tile?.tokenId) {
        return true;
      }
      return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [tokensid, tiles]
  );

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSaleParcel(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isEstated(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: mapColor.selected, scale: 1.2 }
        : isSaleParcel(x, y)
        ? { color: mapColor.onSaleParcels, scale: 1.2 }
        : isEstated(x, y)
        ? { color: mapColor.otherEstate, scale: 1.2 }
        :  null;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelected]
  );

  useEffect(() => {
    if (query.get("onlyOnSale") === null) {
      setOnSale(true);
      return;
    }
    if (query.get("onlyOnSale") === "true") {
      setOnSale(true);
    } else {
      setOnSale(false);
    }
    dispatch(setSaleParcels());
    dispatch(setSpaces());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={classes.mapRoot}>
        <Atlas
          tiles={tiles}
          layers={[selectedStrokeLayer, selectedFillLayer]}
          height={height}
          width={width}
          y={centerY}
          x={centerX}
          movingeStatus={false}
          zoomStatus={2}
        />
      </div>
    </>
  );
};

export default SliceMap;
