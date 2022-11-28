import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import noResultSvg from "../../assets/svg/noResult.svg";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "110px",
      justifyContent: "center",
    },
    imgcontainer: {},
    description: {
      fontSize: "16px",
      lineHeight: "40px",
      justifyContent: "center",
      display: "flex",
      color: "white",
    },
  })
);
export default function NoResult() {
  const classes = useStyles();
  const { t} =  useTranslation();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imgcontainer}>
          <img src={noResultSvg} />
          <div className={classes.description}>{t("No Results")}</div>
        </div>
      </div>
    </>
  );
}
