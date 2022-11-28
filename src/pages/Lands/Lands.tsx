import React, { useEffect, useState } from "react";
import LandMap from "../../components/MapData/LandMap";
import TopTab from "../../components/TopTab/TopTab";
import { useStyles } from "./LandsStyle";
import BuilderTopTab from "../../components/BuilderTopTab/BuilderTopTab";
const Lands: React.FC = () => {
  const classes = useStyles();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 246);
  };
  useEffect(() => {
    setHeight(window.innerHeight - 246);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TopTab />
      {/* <BuilderTopTab /> */}
      <div className={classes.landMap}>
        <LandMap height={height} width={width} />
      </div>
    </>
  );
};

export default Lands;
