import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
//accordion relate
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
export const LandAccordionStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 160px)",
    width: "100%",
    maxWidth: "1064px",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    position: "relative",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "723px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },

  accordionRoot: {
    borderRadius: "10px",
    border: "3px solid #242129",
    height: "fit-content",
    "& .MuiPaper-root": {
      backgroundColor: "#18141a",
      color: "white",
      border: "none",
    },
  },
  firstAccordion: {
    "&.MuiPaper-root": {
      borderRadius: "8px 8px 0px 0px",
    },
  },
  secondAccordion: {
    "&.MuiPaper-root": {
      borderRadius: "0px 0px 8px 8px",
      "& .MuiAccordionSummary-root": {
        boderTop: "1px solid #242129 ",
      },
    },
  },
  areaLandDetailRoot: {
    width: "100%",
  },
  cards: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  card: {
    width: "50%",
    "& .MuiFormControl-root": {
      width: "50%",
      padding: "16px",
    },
    "& .MuiInputBase-input": {
      fontFamily: "Lato",
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "7px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #28242b",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover": {
      "&:before": {
        borderBottom: "2px solid #28242b",
      },
    },
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
  },
  axisContainer: {
    display: "flex",
  },
  axisLabel: {
    fontWeight: 700,
    fontSize: "15px",
    color: "#ff2d55",
    fontStyle: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    display: "inline-block",
    marginLeft: "5px",
  },

  buttons: {
    display: "flex",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      display: "grid",
    },
  },
  btnchange: {
    marginLeft: "16px",
    minWidth: "64px",
  },
  selectedLandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      display: "grid",
      justifyContent: "unset",
    },
    [theme.breakpoints.down(550)]: {
      display: "block",
    },
  },
  selectedLandLabelContainer: {
    display: "flex",
    justifyContent: "center",
  },
  selectedLandLabel: {
    color: "#676370",
    fontSize: "17px",
    marginRight: "15px",
  },
  selectedLandResult: {
    color: "white",
    fontSize: "18px",
    fontWeight: 400,
  },
  testinput: {
    width: "100%",
    "& .MuiFormControl-root": {
      width: "71%",
      padding: "16px 0px",
    },
    "& .MuiInputBase-input": {
      fontFamily: "Lato",
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "7px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #28242b",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover": {
      "&:before": {
        borderBottom: "2px solid #28242b",
      },
    },
  },
}));

//accordion relate
export const StyledAccordion = withStyles((theme) => ({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
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
    backgroundColor: "rgba(0, 0, 0, .07)",
    borderBottom: "1px solid #242129",
    borderTop: "1px solid #242129",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
