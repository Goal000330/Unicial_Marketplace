import { Tile } from "../Atlas.types";

export type Props = {
  x: number;
  y: number;
  visible: boolean;
  tile: Tile;
  position: "left" | "right";
  price? : string;
};

export type MapStateProps = {};
export type MapDispatchProps = {};
export type OwnProps = Pick<Props, "x" | "y" | "visible" | "tile">;
