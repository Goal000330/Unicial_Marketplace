import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
//accordion relate
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

export const CategoryWearablesStyle = makeStyles((theme: Theme) =>
  createStyles({
    categoryBox: {
      backgroundColor: "transparent",
      height: "fit-content",
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
    subCategoryItem: {
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "40px",
      textDecoration: "none",
      color: "#70708F",
      borderLeft: "2px solid transparent",
      display: "block",
      alignItems: "center",
      width: "100%",
      "&:hover": {
        color: "white",
      },
    },
    active: {
      "& > :first-child.MuiAccordionSummary-root": {
        backgroundColor: "#21263f",
        borderLeft: "2px solid #7f64e2",
      },
    },
    subCategoryTitle: {
      marginLeft: "68px",
    },
    activeSubCategory: {
      backgroundColor: "#21263f",
      borderLeft: "2px solid #7f64e2",
      color: "white",
    },
  })
);

//accordion relate
export const StyledAccordion = withStyles((theme) => ({
  root: {
    backgroundColor: "#282e4e",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
}))(MuiAccordion);

export const StyledAccordionSummary = withStyles((theme) => ({
  root: {
    padding: "0px 35px 0px 58px",
    fontSize: "16px",
    lineHeight: "40px",
    color: "white",
    minHeight: "40px",
    height: "40px",
    borderLeft: "2px solid transparent",
    "&$expanded": {
      minHeight: "40px",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&$expanded": {
      margin: "0px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    display: "block",
    padding: "0px 0px",
    width: "100%",
    cursor: "pointer",
  },
}))(MuiAccordionDetails);
