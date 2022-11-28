import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const ScenePoolCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    sceneCardRoot: {
      cursor: "pointer",
      width: "100%",
      padding: "8.5px 8.5px 23px 8.5px",
      background: "#282E4E",
      borderRadius: "15px",
      position: "relative",
      marginRight: "50px",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    sceneImgRoot: {
      width: "100%",
      borderRadius: "15px",
      overflow: "hidden",
    },
    sceneImg: {
      width: "100%",
      height: "200px",
    },
    sceneName: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "26px",
      margin: "16px 8px 13px 8px",
    },
    sceneItems: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      marginLeft: "8px",
    },
    sceneSize: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: "#96A1DB",
    },
    marginRight: {
      marginRight: "30px",
    },
    itemImg: {
      marginRight: "6.15px",
    },
  })
);
