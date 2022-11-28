import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
//accordion relate
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Input } from "@material-ui/core";

export const LandAccordionStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: "1064px",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
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
    borderRadius: "15px",
    height: "fit-content",
    "& .MuiPaper-root": {
      backgroundColor: "#282E4E",
      color: "white",
    },
  },
  firstAccordion: {
    borderBottom: "1px solid #373F66 ",
    "&.MuiPaper-root": {
      borderRadius: "8px 8px 0px 0px",
    },
  },
  secondAccordion: {
    "&.MuiPaper-root": {
      borderRadius: "0px 0px 8px 8px",
    },
  },
  areaLandDetailRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(769)]: {
      flexDirection: "column",
    },
  },
  cards: {
    display: "flex",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down(769)]: {
      flexDirection: "column",
    },
  },
  card: {
    paddingRight: "40px",
    width: "50%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    [theme.breakpoints.down(769)]: {
      width: "100%",
      paddingRight: "0px",
    },
  },
  title: {
    fontSize: "20px",
    lineHeight: "50px",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  axisContainer: {
    display: "flex",
  },
  selectedLandContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    marginTop: "20px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    [theme.breakpoints.down(550)]: {
      display: "block",
    },
  },
  selectedLandLabelContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    alignItems: "center",
    [theme.breakpoints.down(769)]: {
      padding: "5px",
    },
  },
  selectedLandLabel: {
    color: "#96A1DB",
    fontSize: "16px",
    lineHeight: "19px",
    marginRight: "15px",
    width: "max-content",
  },
  selectedLandResult: {
    color: "white",
    fontSize: "18px",
    fontWeight: 400,
  },
  showmapBtn: {
    [theme.breakpoints.down(550)]: {
      marginBottom: "20px",
    },
  },
  inputLands: {
    width: "100%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
}));

//accordion relate
export const StyledAccordion = withStyles((theme) => ({
  root: {
    border: "1px solid #3f51b50f",
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
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    margin: "0px",
    "&$expanded": {
      margin: "0px",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export const StyledInput = withStyles((theme) => ({
  root: {
    padding: "10px",
    border: "1px solid #373F66",
    borderRadius: "100px",
    alignItems: "center",
    marginTop: "20px",
    color: "white",
    "&:before": {
      border: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
    },
    "& .MuiInputAdornment-root span": {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19px",
      fontStyle: "normal",
      padding: "0em 1em",
      transform: "translateY(-0.06em)",
      display: "inline-block",
      marginTop: "2px",
      background: "linear-gradient(to right, #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      borderRight: "1px solid #373F66",
    },
  },
}))(Input);
