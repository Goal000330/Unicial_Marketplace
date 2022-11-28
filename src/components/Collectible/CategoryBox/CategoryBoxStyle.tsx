import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const CategoryBoxStyle = makeStyles((theme: Theme) =>
  createStyles({
    categoryBox: {
      backgroundColor: "transparent",
      height: "fit-content",
      fontFamily: "Lato",
    },
    accordionRoot: {
      height: "fit-content",
    },
    firstAccordion: {},
    maintitle: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "40px",
      fontFamily: "Lato",
    },
    categoryTitle: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
      marginLeft: "40px",
      marginTop: "35px",
      marginBottom: "20px",
      opacity: "50%",
    },
    active: {
      "& > :first-child": {
        backgroundColor: "#21263f",
        borderLeft: "2px solid #7f64e2",
      },
    },
  })
);
