import { ScenePoolCardStyle } from "./ScenePoolCardStyle";
import sceneImg from "../../../assets/img/sceneImg.png";
import tree from "../../../assets/svg/tree.svg";
import parcelimg from "../../../assets/svg/parcel.svg";
import clsx from "clsx";

interface ScenePoolCardProps {
  cardName: string;
  parcel: number;
  item: number;
}

export default function ScenePoolCard({
  cardName,
  parcel,
  item,
}: ScenePoolCardProps) {
  const classes = ScenePoolCardStyle();
  return (
    <>
      <div className={classes.sceneCardRoot}>
        <div className={classes.sceneImgRoot}>
          <img src={sceneImg} className={classes.sceneImg} alt='alt' />
        </div>
        <div className={classes.sceneName}>{cardName}</div>
        <div className={classes.sceneItems}>
          <div className={clsx(classes.sceneSize, classes.marginRight)}>
            <img src={parcelimg} className={classes.itemImg} alt='parcel' />
            {parcel}PARCEL
          </div>
          <div className={classes.sceneSize}>
            <img src={tree} className={classes.itemImg} alt='tree' />
            {item}ITEM
          </div>
        </div>
      </div>
    </>
  );
}
