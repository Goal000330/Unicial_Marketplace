import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const CollectibleFilterDialogStyle = makeStyles((theme: Theme) =>
  createStyles({
    openfilter: {
      display: "flex",
      position: "relative",
      cursor: "pointer",
      alignItems: "center",
    },
    openfilterLabel: {
      background: "linear-gradient(to right, #7F64E2 10%, #41A6EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginRight: "10px",
      fontWeight: 500,
    },
    filtericonContainer: {
      "& .MuiSvgIcon-root": {
        width: "18px",
        height: "18px",
        fill: "#41A6EF",
        marginTop: "2.5px",
      },
    },
    dialogRoot: {},
    dialogContainer: {
      "& .MuiPaper-root": {
        backgroundColor: "#282E4E",
        borderRadius: "5px",
        width: "100%",
        height: "100%",
      },
    },
    maintitle: {
      "&.MuiDialogTitle-root": {
        color: "white",
        fontSize: "30px",
        fontWeight: 400,
        padding: "22px 24px",
      },
    },

    collectionSelectContainer: {
      flex: "1 0 auto",
    },

    title: {
      fontStyle: "normal",
      fontWeight: 400,
      color: "#96A1DB",
      fontSize: "14px",
      lineHeight: "17px",
      opacity: 0.5,
      marginBottom: "12px !important",
    },

    listRoot: {
      transform: "translateY(2px)",
      textTransform: "none",
      transition: "none",
    },

    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    mainlistLabel: {
      fontSize: "16px",
      lineHeight: "19px",
      color: "white",
    },

    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      "&:hover": {
        color: "white",
      },
    },

    listDropdown: {
      marginTop: "5px",
      width: "100%",
      height: "32px",
      cursor: "pointer",
      position: "relative",
      border: "1px solid #373F66",
      borderRadius: "100px",
      padding: "1px 20px",
      [theme.breakpoints.down(1025)]: {
        marginBottom: "18px",
      },
    },
    switch: {
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      },
      "& .MuiSwitch-root": {
        padding: "12.5px 12px",
      },
      "& .MuiSwitch-track": {
        // backgroundColor: "blue",
      },
    },

    rarityPart: {
      flex: "1 1 auto",
      alignItems: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      margin: "20px 0px",
    },
    rarityPartContainer: {
      flex: "1 0 auto",
    },

    genderRadioContainer: {
      "&.MuiFormGroup-root": {
        flexDirection: "row",
        flexWrap: "nowrap",
      },
      "& .MuiTypography-root": {
        color: "white",
      },
    },
    options: {
      display: "flex",
      flexFlow: "wrap",
      marginTop: "13px",
    },
    orderbyContainer: {},
    orderbyTitle: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: "#96A1DB",
      opacity: "50%",
      marginBottom: "10px",
    },
    gradientlistLabel: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      background: "linear-gradient( #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    filterDownArrow: {
      color: "linear-gradient( #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginLeft: "3px",
      marginTop: "4px",
    },
    actionBtnContainer: {
      "&.MuiDialogActions-root": {
        justifyContent: "center",
      },
    },
    actionBtn: {
      width: "90%",
    },
  })
);
