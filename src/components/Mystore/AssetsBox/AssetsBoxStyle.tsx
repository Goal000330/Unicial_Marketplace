import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const AssetsBoxStyle = makeStyles((theme: Theme) =>
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
      opacity: "50%",
    },
    divideline: {
      borderBottom: "2px solid #373F66",
      margin: "5px 18px",
    },
    active: {
      "& > :first-child.MuiAccordionSummary-root": {
        backgroundColor: "#21263f",
        borderLeft: "2px solid #7f64e2",
      },
    },
  })
);
