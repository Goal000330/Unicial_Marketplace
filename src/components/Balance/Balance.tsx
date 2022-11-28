import { useStyles } from "./BalanceStyle";
import { useTranslation } from "react-i18next";

interface BalanceProps {
  className?: any;
  type: string;
  value: any;
}

export const Balance = ({ className, type, value }: BalanceProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.balanceRoot}>
      {type === "uccbalance" && (
        <>
          <div className={classes.balanceDotUcc}></div>
          <div className={classes.balanceDescriptionUcc}>
            {t("My UCC Balance")}:
          </div>
          <div className={classes.balancePercentUcc}>{value}</div>
        </>
      )}
      {type === "currentspace" && (
        <>
          <div className={classes.balanceDotCurrent}></div>
          <div className={classes.balanceDescriptionCurrent}>
            {t("Current Space Price in UCC Token")}:
          </div>
          <div className={classes.balancePercentCurrent}>{value}</div>
        </>
      )}
      {type === "buyable" && (
        <>
          <div className={classes.balanceDotBuyable}></div>
          <div className={classes.balanceDescriptionBuyable}>
            {t("Buyable Maximum Spaces")}:
          </div>
          <div className={classes.balancePercentBuyable}>{value}</div>
        </>
      )}
    </div>
  );
};
