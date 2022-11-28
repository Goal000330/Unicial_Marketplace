import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import NameCard from "../../../components/Base/NameCard/NameCard";
import OvalBtn from "../../../components/Base/OvalBtn";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import { ShowMoreLessBtn } from "../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { NamesData, someShowMore } from "../../../config/constant";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderNamesStyles";

export default function BuilderNames() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showStatus, setShowStatus] = useState(false);
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 {t("RESULTS")}</div>
          <div className={classes.functionBtn}>
            <OvalBtn
              onClick={() => navigate("/builder/builder_claim_name")}
            />
          </div>
        </div>
        {NamesData !== undefined && NamesData.length !== 0 ? (
          <>
            <Grid container spacing={3}>
              {NamesData.slice(
                0,
                !showStatus ? someShowMore : NamesData.length
              ).map((item: any, key: any) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={key}>
                    <NameCard mainName={item.mainName} price={item.price} />
                  </Grid>
                );
              })}
            </Grid>
            <div
              className={
                NamesData.length < someShowMore
                  ? classes.displayNone
                  : classes.showmoreContent
              }>
              <ShowMoreLessBtn
                letter={showStatus ? "Show Less" : "Show All"}
                onClick={handleShowBtn}
              />
            </div>
          </>
        ) : (
          <div className={classes.createContent}>
            <span className={classes.contentLetter}>
              {t("It looks like that you don't have any Scenes")}.
              <br />
              <span
                className={classes.importantLink}
                onClick={() => navigate("/builder/builder_claim_name")}>
                {t("Click here")}
              </span>{" "}
              {t("to get started")}.
            </span>
          </div>
        )}
      </div>
    </>
  );
}
