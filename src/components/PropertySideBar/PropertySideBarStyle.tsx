import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const PropertySideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "360px",
      height: "100vh",
    },
    propertyNavbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "62px",
      backgroundColor: "#FFFFFF0D",
      textAlign: "center",
    },
    NavbarTitle: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "50px",
    },
    layersRoot: {
      padding: "24px 23px 0px 22px",
    },
    photoInfoContainer: {
      padding: "26px 15px 15px 27px",
    },
    photoUppart: {
      display: "flex",
      alignItems: "center",
    },
    photoContainer: {
      position: "relative",
    },
    photo: {
      mixBlendMode: "difference",
    },
    camera: {
      color: "white",
      width: "23px",
      heigth: "21px",
      bottom: "12px",
      right: "12px",
      position: "absolute",
      cursor: "pointer",
    },
    photoDetailInfoContainer: {
      marginLeft: "20px",
      background: "#282E4E",
      display: "flex",
      flexDirection: "column",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    triangleContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      color: "#96A1DB",
    },
    triangleicon: {
      marginRight: "7px",
    },
    functionIconRoot: {
      display: "flex",
      justifyContent: "end",
    },
    downLoadIcon: {
      marginLeft: "7px",
      padding: "7px",
      borderRadius: "4px",
      border: "solid 1px #5E627A",
      "& i": {
        width: "14px",
        height: "14px",
        color: "#5E627A",
      },
    },
    basicRoot: {
      padding: "25px 27px",
    },
    basicInput: {
      marginBottom: "10px",
    },
    overridesRoot: {
      padding: "25px 27px 58px 27px",
    },
    overridesInput: {
      marginBottom: "9px",
    },
    tagsRoot:{
      padding: "25px 27px 58px 27px",
    },
  })
);
