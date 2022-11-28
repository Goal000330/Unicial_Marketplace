import { ParcelCardStyle } from "./ParcelCardStyle";
import Tag from "../Base/Tag";
import LocationBtn from "../../components/Base/LocationBtn";
import { fetchTiles } from "../../hooks/tiles";
import { useState, useEffect } from "react";
import { noneSpace } from "../../common/utils";
import { dateConvert_untilDate } from "../../common/dateUtils";
interface ParcelCardProps {
  cardlabel: string;
  carddescription: string;
  location: string;
  onClick?: () => void;
}

export default function ParcelCard({ location, onClick }: ParcelCardProps) {
  const classes = ParcelCardStyle();
  const [updatedAt, setUpdatedAt] = useState();

  useEffect(() => {
    if (window) {
      fetchTiles().then((_tiles: any) => {
        setUpdatedAt(_tiles[noneSpace(location)]?.updatedAt);
      });
    }
  }, []);

  return (
    <>
      <div className={classes.card}>
        <Tag color="RareColor" letter="Parcel" className={classes.cardLabel} />
        <div className={classes.cardDescription}>
          {"Acquired at " + dateConvert_untilDate(updatedAt)}
        </div>
        <LocationBtn position={location} dark className={classes.location} />
      </div>
    </>
  );
}
