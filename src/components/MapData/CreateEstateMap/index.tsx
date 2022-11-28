import React, { useCallback, useEffect, useState } from "react";
import { Atlas, Layer } from "../../Atlas/Atlas";
import { Tile } from "../../Atlas/Atlas.types";
import Popup from "../../Atlas/Popup";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { selectestates } from "../../../store/selectedestates/selectors";
import { getestates } from "../../../store/selectedestates";
import { totalSpace } from "../../../store/parcels/selectors";
import { showAlert } from "../../../store/alert";
import { getCoords } from "../../../common/utils";
import { mapColor } from "../../../config/constant";

interface CreateEstateMapProps {
  height?: any;
  width?: any;
  initialX?: number;
  initialY?: number;
  myEstate?: any;
}

const CreateEstateMap: React.FC<CreateEstateMapProps> = ({
  height,
  width,
  myEstate,
  initialX,
  initialY,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dispatch = useAppDispatch();
  const selectedTile = useAppSelector(selectestates);
  const tiles: any = useAppSelector(totalSpace);
  const loginAddress = useAppSelector(selectLoginAddress);

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (
        tile.owner &&
        tile.owner.toLowerCase() === loginAddress.toLowerCase() &&
        (tile.estateId === undefined || tile.estateId === "")
      ) {
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
        dispatch(getestates(newSelectedTile));
      } else {
        dispatch(
          showAlert({
            message: "You have to select your parcels!",
            severity: "error",
          })
        );
      }
    },
    [tiles, selectedTile]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      return selectedTile?.includes(getCoords(x, y));
    },
    [selectedTile, tiles]
  );

  const isFocused = useCallback(
    (x: number, y: number) => {
      if (myEstate === undefined) return false;
      return myEstate?.includes(getCoords(x, y));
    },
    [myEstate]
  );

  const isOtherEstate = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.owner && tile?.estateId !== undefined) {
        return true;
      } else return false;
    },
    [tiles]
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

  const isMyEstate = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (
        tile?.owner &&
        tile?.owner?.toLowerCase() === loginAddress.toLowerCase() &&
        tile?.estateId !== undefined &&
        tile?.estateId !== ""
      ) {
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
      return isFocused(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isMyEstate(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isMyParcel(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isOtherEstate(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    [isSelected, isFocused]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isFocused(x, y)
        ? { color: mapColor.focused, scale: 1.2 }
        : isSelected(x, y)
        ? { color: mapColor.selected, scale: 1.2 }
        : isMyEstate(x, y)
        ? { color: mapColor.myEstate, scale: 1.2 }
        : isMyParcel(x, y)
        ? { color: mapColor.myParcel, scale: 1.2 }
        : isOtherEstate(x, y)
        ? { color: mapColor.otherEstate, scale: 1.2 }
        : null;
    },
    [isSelected, isFocused]
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
        x={initialX}
        y={initialY}
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

export default CreateEstateMap;
