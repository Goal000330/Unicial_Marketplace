import { NameCardStyle } from "./NameCardStyle";
import Tag from "../Tag";
import diamondSvg from "../../../assets/svg/diamond.svg";
import makeBlockie from "ethereum-blockies-base64";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  mainName: string;
  price: number;
}

export default function NameCard({ mainName, price }: ProductCardProps) {
  const classes = NameCardStyle();
  const { t } = useTranslation();
  const address = "0x8734CB972d36a740Cc983d5515e160C373A4a016";
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Tag color="NameColor" letter="NAME" className={classes.nameRoot} />
          <></>
        </div>
        <div className={classes.infoRoot}>
          <div className={classes.infoContainer}>
            <div className={classes.infoNamesContainer}>
              <div className={classes.infoBigname}>{mainName}</div>
              <div className={classes.infoSmallname}>{mainName}</div>
            </div>
          </div>
          <div className={classes.avatarIamgeContainer}>
            <img
              src={makeBlockie(address)}
              className={classes.avatarIamge}
              alt="fromimage!"
            />
          </div>
        </div>

        <div className={classes.productName}>{mainName}</div>
        <div className={classes.bottom}>
          <div className={classes.category}>{t("Zilionixx")}</div>
          <div className={classes.priceContainer}>
            <img src={diamondSvg} className={classes.icon} />
            <div className={classes.price}>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
