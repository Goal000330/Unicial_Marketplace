import { Theme, makeStyles } from "@material-ui/core/styles";
import fromImg from "../../assets/img/1.png";
import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { addCommas } from "../../common/utils";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: "1 0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 41px",
    margin: "13px 0px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#282E4E",
    borderRadius: "15px",
    [theme.breakpoints.down(769)]: {
      paddingTop: "25px",
    },
  },
  container: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  fromPart: {
    width: "30%",
    display: "block",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      width: "80%",
      marginBottom: "15px",
    },
  },
  pricePart: {
    marginLeft: "48px",
    width: "20%",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
      marginBottom: "15px",
    },
  },
  timePart: {
    marginLeft: "48px",
    width: "20%",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
      marginBottom: "15px",
    },
  },
  actionPart: {
    marginLeft: "48px",
    width: "20%",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
      marginBottom: "15px",
    },
  },
  title: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 400,
    color: "#96A1DB",
    opacity: "50%",
    marginBottom: "10px",
  },

  fromIamge: {
    marginRight: "6px",
    borderRadius: "3px",
    width: "20px",
    height: "20px",
  },
  content: {
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    fontWeight: 400,
  },
  contentAddress: {
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    fontWeight: 400,
    overflow: "hidden",
  },
  symbol: {
    fontSize: "20px",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "0.5px",
  },
  actionBtn: {
    minWidth: "50px",
    "& span": {
      margin: "2px 11px",
      display: "flex",
      fontSize: "12px",
      alignItems: "center",
      fontFamily: "Lato",
      fontWeight: 500,
      lineHeight: "20px",
      verticalAlign: "Top",
    },
  },
}));

interface data {
  address: string;
  price: number;
  time: string;
}

const BidRecord = ({ address, price, time }: data) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {
        <div className={classes.container}>
          <div className={classes.fromPart}>
            <div className={classes.title}>{t("Address")}</div>
            <div className={classes.contentAddress}>
              <img
                src={fromImg}
                className={classes.fromIamge}
                alt='fromimage!'
              />
              {address}
            </div>
          </div>

          <div className={classes.pricePart}>
            <div className={classes.title}>{t("Price")}</div>
            <div className={classes.content}>
              <i className={classes.symbol}>⏣</i>
              {addCommas(price)}
            </div>
          </div>

          <div className={classes.timePart}>
            <div className={classes.title}>{t("Time")}</div>
            <div className={classes.content}>{time}</div>
          </div>

          <div className={classes.actionPart}>
            <div className={classes.title}>{t("Action")}</div>
            <div className={classes.content}>
              <ActionButton color='light' className={classes.actionBtn}>
                {t("Accept")}
              </ActionButton>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default BidRecord;
