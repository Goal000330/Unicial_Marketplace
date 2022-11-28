import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    marginBottom: "15px",
  },
  smalltitle: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    color: "#96A1DB",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    marginTop: "15px",
    gridGap: "8px",
    gap: "8px",
  },
  jumpbtn: {
    minWidth: "75px !important",
  },
}));

interface titleProps {
  name?: string;
  des?: string;
  count?: number;
}

const Title = ({ name, des, count }: titleProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className={classes.title}>{name}</div>
      <div className={classes.smalltitle}>{des}</div>
      <div className={classes.buttonGroup}>
        <ActionButton disabled color="dark">
          {count} {t("LAND")}
        </ActionButton>
        {/* <div className={classes.jumpbtn}> */}
        <ActionButton disabled color="light" className={classes.jumpbtn}>
          {t("JUMP IN")}
        </ActionButton>
      </div>
    </div>
  );
};

export default Title;
