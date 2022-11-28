import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const MobileCategoryBoxStyle = makeStyles((theme: Theme) =>
  createStyles({
    categoryBox: {
      backgroundColor: "transparent",
      height: "fit-content",
    },
    accordionRoot: {
      height: "fit-content",
    },
    firstAccordion: {},
    maintitle: {},
    categoryTitle: {
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
      marginLeft: "40px",
      marginTop: "35px",
      marginBottom: "20px",
    },
  })
);
