import { GeneralSaleCardStyle } from "./GeneralSaleCardStyle";
import penSvg from "./../../../assets/svg/pen.svg";
import moneybagSvg from "./../../../assets/svg/moneybag.svg";
import crownSvg from "./../../../assets/svg/crown.svg";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
interface GeneralSaleCardProps {
  iconSrc: string;
  priceColor: string;
  price: number;
  className?: any;
}

export default function GeneralSaleCard({
  iconSrc,
  priceColor,
  price,
  className,
}: GeneralSaleCardProps) {
  const classes = GeneralSaleCardStyle();
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <img
              src={
                iconSrc === "pen"
                  ? penSvg
                  : iconSrc === "moneybag"
                  ? moneybagSvg
                  : crownSvg
              }
            />
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.title}>{t("TOTAL SALES")}</div>
            <div
              className={clsx(classes.price, className, {
                [classes.yellow]: priceColor === "yellow",
                [classes.purple]: priceColor === "purple",
                [classes.green]: priceColor === "green",
              })}
            >
              {price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
