import clsx from "clsx";
import React, { useState } from "react";
import { PropertyLayerSettingStyle } from "./PropertyLayerSettingStyle";

interface PropertyLayerSettingProps {
  title: string;
  children?: React.ReactNode;
  className?: any;
}

export default function PropertyLayerSetting({
  title,
  children,
  className,
}: PropertyLayerSettingProps) {
  const classes = PropertyLayerSettingStyle();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={clsx(classes.root, className)}>
        <div className={classes.headerPart} onClick={handleShow}>
          <span className={classes.title}>{title}</span>
          <div className={classes.dropdownIcon}>
            <i className={`fal fa-angle-${show ? `up` : `down`}`}></i>
          </div>
        </div>
        {show && children}
      </div>
    </>
  );
}
