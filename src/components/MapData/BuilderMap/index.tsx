import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Atlas, Layer } from "../../Atlas/Atlas";
import { Tile } from "../../Atlas/Atlas.types";
import Popup from "../../Atlas/Popup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { saleParcels } from "../../../store/saleparcels/selectors";
import { saleEstates } from "../../../store/saleestates/selectors";
import { totalSpace } from "../../../store/parcels/selectors";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { setSaleParcels } from "../../../store/saleparcels";
import { setSaleEstates } from "../../../store/saleestates";
import { setSpaces } from "../../../store/parcels";
import { ethers } from "ethers";
import { getCoords } from "../../../common/utils";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
import { mapColor } from "../../../config/constant";
import { showSpinner } from "../../../store/spinner";

interface BuilderMapProps {
  height?: any;
  width?: any;
  centerX?: any;
  centerY?: any;
}

const BuilderMap: React.FC<BuilderMapProps> = ({
  height,
  width,
  centerX,
  centerY,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [price, setPrice] = useState("");
  const [onSale, setOnSale] = useState(false);
  const [, setEstateid] = useState(null);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tokensid } = useParams();

  const query = new URLSearchParams(location.search);

  const parcelOnSale: any = useAppSelector(saleParcels);
  const estateOnSale: any = useAppSelector(saleEstates);
  const tiles: any = useAppSelector(totalSpace);

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (!tile) {
        return;
      }
      if (tile.estateId) {
        setEstateid(tile.estateId);
        // navigate(`/contracts/${EstateProxyAddress}/tokens/${tile.estateId}`);
      } else {
        setEstateid(null);
        try {
          query.set("onlyOnSale", onSale.toString());
          navigate({
            // pathname: `/contracts/${SpaceProxyAddress}/tokens/${tile.tokenId}`,
            search: query.toString(),
          });
        } catch (error: any) {
          console.warn(
            `Couldn't fetch parcel ${tile.x},${tile.y}: ${error.message}`
          );
        }
        return;
      }
    },
    [tiles]
  );

  const isSaleParcels = useCallback(
    (x: number, y: number) => {
      if (!parcelOnSale) return false;
      const tile: any = parcelOnSale && (parcelOnSale[getCoords(x, y)] as Tile);

      if (onSale === true && tile) {
        return true;
      }
      return false;
    },
    [parcelOnSale, onSale]
  );

  const isSaleEstates = useCallback(
    (x: number, y: number) => {
      if (
        onSale === true &&
        estateOnSale &&
        tiles &&
        estateOnSale[tiles[getCoords(x, y)]?.estateId]
      ) {
        return true;
      }
      return false;
    },
    [estateOnSale, onSale, tiles]
  );

  const isOtherEstated = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.estateId) {
        return true;
      } else return false;
    },
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
    [tokensid, tiles]
  );

  const handleHidePopup = useCallback(() => {
    setShowPopup(false);
    setMouseX(-1);
    setMouseY(-1);
  }, []);

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSaleParcels(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSaleEstates(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isOtherEstated(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: mapColor.selected, scale: 1.2 }
        : isSaleParcels(x, y)
        ? { color: mapColor.onSaleParcels, scale: 1.2 }
        : isSaleEstates(x, y)
        ? { color: mapColor.onSaleEstates, scale: 1.2 }
        : isOtherEstated(x, y)
        ? { color: mapColor.otherEstate, scale: 1.2 }
        : null;
    },
    [isSelected]
  );

  const handleHover = useCallback(
    (x: number, y: number) => {
      if (!tiles) return;
      const id = getCoords(x, y);
      const tile: Tile = tiles && tiles[id];
      let sale: any;
      sale = parcelOnSale && parcelOnSale[id];
      if (tile.estateId) {
        sale = estateOnSale && estateOnSale[tile.estateId];
      }
      if (tile?.estateId && tokensid === tile?.estateId) {
        setShowPopup(false);
        return;
      }
      if (sale?.seller) {
        setPrice(ethers.utils.formatUnits(sale?.priceInWei, 18));
      } else {
        setPrice("");
      }
      if (tile && !showPopup) {
        setShowPopup(true);
        setHoveredTile(tile);
        setMouseX(-1);
        setMouseY(-1);
      } else if (tile && tile !== hoveredTile) {
        setHoveredTile(tile);
        setMouseX(-1);
        setMouseY(-1);
      } else if (!tile && showPopup) {
        setShowPopup(false);
      }
    },
    [hoveredTile, showPopup, tiles]
  );
  // mouse move
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (showPopup && mouseX === -1 && mouseY === -1) {
        setMouseX(event.offsetX);
        setMouseY(event.offsetY);
        setX(event.offsetX);
        setY(event.offsetY);
      }
    }
    if (true) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (true) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [showPopup, mouseX, mouseY]);

  const getAlldata = async () => {
    dispatch(showSpinner(true));
    await dispatch(setSaleEstates());
    await dispatch(setSaleParcels());
    await dispatch(setSpaces());
    dispatch(showSpinner(false));
  };

  useEffect(() => {
    if (query.get("onlyOnSale") === "true") {
      setOnSale(true);
    } else {
      setOnSale(false);
    }
    getAlldata();
  }, [location]);

  return (
    <div onMouseLeave={handleHidePopup}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
        height={height}
        width={width}
        y={centerY}
        x={centerX}
      />
      {hoveredTile ? (
        <Popup
          x={x}
          y={y}
          visible={showPopup}
          tile={hoveredTile}
          price={price}
          position={x > window.innerWidth - 550 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default BuilderMap;
