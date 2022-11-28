import React, { useEffect, useState } from "react";
import { useStyles } from "./BuilderLandStyle";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import lightBlueCheck from "../../../assets/svg/lightblueCheck.svg";
import purpleCheck from "../../../assets/svg/purpleCheck.svg";
import BuilderMap from "../../../components/MapData/BuilderMap";

const BuilderLand: React.FC = () => {
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
      <BuilderTopTab />
      <div className={classes.mapHeader}>
        <div className={classes.mapHeaderContainer}>
          <div className={classes.firstPart}>0 RESULT</div>
          <div className={classes.secondPart}>
            <div className={classes.item}>
              <img
                src={lightBlueCheck}
                className={classes.lightBlue}
                alt='check'
              />
              Owner
            </div>
            <div className={classes.item}>
              <img
                src={purpleCheck}
                className={classes.lightBlue}
                alt='check'
              />
              Operator
            </div>
            <div className={classes.item}></div>
          </div>
        </div>
      </div>
      <div className={classes.landMap}>
        <BuilderMap height={height} width={width} />
      </div>
    </>
  );
};

export default BuilderLand;
