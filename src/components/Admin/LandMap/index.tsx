import React, { useCallback, useEffect, useState } from "react";

import { Atlas, Layer } from "../../Atlas/Atlas";
import { Tile } from "../../Atlas/Atlas.types";
import Popup from "../../Atlas/Popup";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { selectparcels } from "../../../store/selectedparcels/selectors";
import { getparcels } from "../../../store/selectedparcels";
import { getCoords } from "../../../common/utils";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { totalSpace } from "../../../store/parcels/selectors";
import { mapColor } from "../../../config/constant";

interface LandMapProps {
  height?: any;
  width?: any;
  initialX?: number;
  initialY?: number;
}

const LandMap: React.FC<LandMapProps> = ({ height, width }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dispatch = useAppDispatch();
  const loginAddress = useAppSelector(selectLoginAddress);
  const selectedTile = useAppSelector(selectparcels);

  const tiles: any = useAppSelector(totalSpace);

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile.owner) {
        return;
      } else {
        let newSelectedTile: string[] = [];
        const selectedIndex = selectedTile.indexOf(getCoords(x, y));
        if (selectedIndex === -1) {
          newSelectedTile = newSelectedTile.concat(
            selectedTile,
            getCoords(x, y)
          );
        } else if (selectedIndex === 0) {
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(1));
        } else if (selectedIndex === selectedTile.length - 1) {
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelectedTile = newSelectedTile.concat(
            selectedTile.slice(0, selectedIndex),
            selectedTile.slice(selectedIndex + 1)
          );
        }
        dispatch(getparcels(newSelectedTile));
      }
    },
    [tiles, selectedTile]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      return selectedTile.includes(getCoords(x, y));
    },
    [selectedTile, tiles]
  );

  const isMyParcel = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);

      if (
        tile?.owner &&
        tile?.owner?.toLowerCase() === loginAddress.toLowerCase()
      ) {
        return true;
      } else return false;
    },
    [tiles]
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

  const handleHidePopup = useCallback(() => {
    setShowPopup(false);
    setMouseX(-1);
    setMouseY(-1);
  }, []);

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "transparent", scale: 1.2 }
        : isMyParcel(x, y)
        ? { color: "transparent", scale: 1.2 }
        : isOtherEstated(x, y)
        ? { color: "transparent", scale: 1.2 }
        : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: mapColor.selected, scale: 1.4 }
        : isMyParcel(x, y)
        ? { color: mapColor.myParcel, scale: 1.4 }
        : isOtherEstated(x, y)
        ? { color: mapColor.otherEstate, scale: 1.4 }
        : null;
    },
    [isSelected]
  );

  const handleHover = useCallback(
    (x: number, y: number) => {
      if (!tiles) return;
      const id = getCoords(x, y);
      const tile: Tile = tiles && tiles[id];

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

  return (
    <div onMouseLeave={handleHidePopup}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
        height={height}
        width={width}
      />
      {hoveredTile ? (
        <Popup
          x={x}
          y={y}
          visible={showPopup}
          tile={hoveredTile}
          position={x > window.innerWidth - 550 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default LandMap;
