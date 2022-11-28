import { ApiUrl } from "../config/constant";
const TILES_URL = `${ApiUrl}/api/v1/map`;

interface AtlasTile {
  x: number;
  y: number;
  type: number;
  left?: number;
  top?: number;
  topLeft?: number;
  owner: string;
  name?: string;
  estate_id?: string;
}

export const fetchTiles = async (
  url: string = TILES_URL
): Promise<Record<string, AtlasTile>> => {
  if (!window.fetch) return {};
  const resp = await window.fetch(url);
  const json = await resp.json();
  return json.data as Record<string, AtlasTile>;
};
