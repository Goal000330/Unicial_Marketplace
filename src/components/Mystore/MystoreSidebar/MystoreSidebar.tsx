import { MystoreSidebarStyle } from "./MystoreSidebarStyle";
import AssetsBox from "../AssetsBox/AssetsBox";
import StoreBox from "../StoreBox/StoreBox";
export default function MystoreSidebar() {
  const classes = MystoreSidebarStyle();
  return (
    <>
      <div className={classes.root}>
        <AssetsBox />
        <StoreBox />
      </div>
    </>
  );
}
