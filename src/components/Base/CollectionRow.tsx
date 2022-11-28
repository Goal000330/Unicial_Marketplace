import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import textureImg from "./../../assets/svg/texture.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      cursor: "pointer",
      borderRadius: "15px",
      width: "100%",
      height: "79px",
      padding: "0px 24px",
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      "&:hover": {
        transform: "translateY(-1px)",
      },
    },
    imgRoot: {
      borderRadius: "5px",
      width: "52px",
      height: "52px",
    },
    infoContainer: {
      marginLeft: "15px",
    },
    name: {
      color: "white",
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "17px",
      lineHeight: "20.4px",
    },
    count: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "29px",
      color: "#96A1DB",
    },
    yellowPart: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      backgroundColor: "#FF7C4C",
      height: "20%",
      width: "100%",
    },
    imgContainer: {
      borderBottomRightRadius: "5px",
      borderBottomLeftRadius: "5px",
      height: "80%",
      width: "100%",
    },
  })
);

interface Props {
  className?: any;
  onClick?: any;
  name?: string;
  count?: number;
}

export default function CollectionRow({
  className,
  onClick,
  name,
  count,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={clsx(classes.root, className)} onClick={onClick}>
      {/* <img src={textureImg} className={classes.imgRoot} /> */}
      <div className={classes.imgRoot}>
        <div className={classes.yellowPart}></div>
        <img src={textureImg} className={classes.imgContainer} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.name}>{name}</div>
        <div className={classes.count}>
          {count} &nbsp; {t("items")}
        </div>
      </div>
    </div>
  );
}
