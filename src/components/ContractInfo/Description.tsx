import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#676370",
  },
  descript: {
    fontSize: "17px",
    lineHeight: "26px",
    letterSpacing: ".2px",
  },
}));

const Description: React.FC = () => {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <div>
      <div className={classes.title}>{t("Description")}</div>
      <div className={classes.descript}>{t("Unicial Genesis Plaza")}</div>
    </div>
  );
};

export default Description;
