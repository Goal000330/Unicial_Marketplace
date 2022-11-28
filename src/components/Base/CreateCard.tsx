import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createCardletterData } from "../../config/constant";
import magicCapSvg from "./../../../src/assets/svg/magicCap.svg";
import magicFileSvg from "./../../../src/assets/svg/magicFile.svg";

import newItemIcon from "./../../../src/assets/svg/addItem.png";
import newCollectionIcon from "./../../../src/assets/svg/folder.png";

interface Props {
  children?: React.ReactNode;
  className?: any;
  letter: string;
  onClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      borderRadius: "8px",
      cursor: "pointer",
      padding: "61px 5px 46px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
    letter: {
      color: "white",
      textAlign: "center",
      fontSize: "17px",
    },
    ItemimgContainer: {
      width: "96px",
      height: "102px",
    },
    CollectionimgContainer: {
      width: "104px",
      height: "80px",
      marginTop: "10px",
    },
  })
);
export default function CreateCard({
  children,
  className,
  letter,
  onClick,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.container}>
        <div>
          <img
            src={
              letter === createCardletterData.new_item
                ? newItemIcon
                : newCollectionIcon
            }
            className={
              letter === createCardletterData.new_item
                ? classes.ItemimgContainer
                : classes.CollectionimgContainer
            }
          />
        </div>
        <div className={classes.letter}>{letter}</div>
      </div>
    </div>
  );
}
