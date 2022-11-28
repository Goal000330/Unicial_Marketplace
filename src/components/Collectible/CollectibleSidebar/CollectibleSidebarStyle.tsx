import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
//accordion relate
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

export const CollectibleSidebarStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#282E4E",
    width: "265px",
    borderRadius: "15px",
    paddingBottom: "25px",
  },
  // categoryBox: {
  //   backgroundColor: "transparent",
  //   height: "fit-content",
  // },
  // accordionRoot: {
  //   height: "fit-content",
  // },
  // firstAccordion: {},
  // maintitle: {},
  // categoryTitle: {
  //   fontSize: "14px",
  //   lineHeight: "17px",
  //   color: "#96A1DB",
  //   marginLeft: "40px",
  //   marginTop: "35px",
  //   marginBottom: "20px",
  // },
}));

// accordion relate
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
    padding: "0px 40px 0px 38px",
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
    "&$expanded": {
      margin: "0px 0",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    display: "block",
    width: "100%",
    padding: "0px 0px",
  },
}))(MuiAccordionDetails);
