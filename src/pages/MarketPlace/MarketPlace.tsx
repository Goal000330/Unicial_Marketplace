import { useStyles } from "./MarketPlaceStyle";
import TopLeftTexture from "../../assets/svg/top_left_texture.svg";
import TopRightTexture from "../../assets/svg/top_right_texture.svg";
import TopEllipse1 from "../../assets/svg/top_ellipse1.svg";
import TopEllipse2 from "../../assets/svg/top_ellipse2.svg";
import TopEllipse3 from "../../assets/svg/top_ellipse3.svg";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MarketPlace() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.root}>
        <img src={TopLeftTexture} className={classes.topleftTexture} alt="topleft"></img>
        <img src={TopRightTexture} className={classes.toprightTexture} alt="topright"></img>
        <img src={TopEllipse1} className={classes.topEllipse1} alt="topellipse1"></img>
        <img src={TopEllipse2} className={classes.topEllipse2} alt="topellipse2"></img>
        <img src={TopEllipse3} className={classes.topEllipse3} alt="topellipse3"></img>
        <div className={classes.content}>
          <div className={classes.itemContainer}>
            <div className={classes.title}>{t("Unicial Marketplace")}</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.subtitle}>
              {t(
                "Welcometothevirtualworldsone-stop-shopfortheverybestdigitalassets"
              )}
              ..
            </div>
          </div>
          <div className={classes.hero_action}>
            <Link className={classes.browsebtn} to="/lands">
              {t("Start Browsing")}&nbsp;
              <CallMadeIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
