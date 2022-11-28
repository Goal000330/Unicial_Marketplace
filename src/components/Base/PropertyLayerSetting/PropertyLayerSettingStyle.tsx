import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const PropertyLayerSettingStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      marginBottom: "10px",
    },
    headerPart: {
      padding: "12px 17px 12px 27px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #222740",
      alignItems: "center",
      cursor: "pointer",
    },
    title: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "20px",
      color: "#FFFFFF",
    },
    dropdownIcon: {
      "& i": {
        width: "16px",
        height: "10px",
        color: "#FFFFFF40",
      },
    },
  })
);
