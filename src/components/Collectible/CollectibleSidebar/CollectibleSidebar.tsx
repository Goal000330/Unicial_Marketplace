import { CollectibleSidebarStyle } from "./CollectibleSidebarStyle";
import TypeBox from "../TypeBox/TypeBox";
import CategoryBox from "../CategoryBox/CategoryBox";
export default function CollectibleSidebar() {
  const classes = CollectibleSidebarStyle();

  return (
    <>
      <div className={classes.root}>
        <TypeBox />
        <CategoryBox />
      </div>
    </>
  );
}
