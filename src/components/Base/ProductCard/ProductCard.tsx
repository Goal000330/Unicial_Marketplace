import { ProductCardStyle } from "./ProductCardStyle";
import Tag from "../Tag";
import headSvg from "../../../assets/svg/head.svg";
import unisexSvg from "../../../assets/svg/unisex.svg";
import diamondSvg from "../../../assets/svg/diamond.svg";
import PussyhairPng from "../../../assets/img/Pussyhair.png";

interface ProductCardProps {
  tagColor: string;
  tagLetter: string;
  productName: string;
  category?: string;
  price: number;
}

export default function ProductCard({
  tagColor,
  tagLetter,
  productName,
  category,
  price,
}: ProductCardProps) {
  const classes = ProductCardStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Tag color={tagColor} letter={tagLetter} />
          {/* <Tag color="LegendaryColor" letter="LEGENDARY" /> */}
          <div className={classes.iconContainer}>
            <img src={headSvg} className={classes.icon} />
            <img src={unisexSvg} className={classes.icon} />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={PussyhairPng} className={classes.image} />
        </div>
        <div className={classes.productName}>{productName}</div>
        <div className={classes.bottom}>
          <div className={classes.category}>{category}</div>
          <div className={classes.priceContainer}>
            <img src={diamondSvg} className={classes.icon} />
            <div className={classes.price}>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
