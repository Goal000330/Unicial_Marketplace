import React, { useEffect, useState } from "react";
import { MyStoreStyle } from "./MyStoreStyle";
import TopTab from "../../components/TopTab/TopTab";
import MystoreSidebar from "../../components/Mystore/MystoreSidebar/MystoreSidebar";
import MobileSidebar from "../../components/Mystore/MobileSidebar/MobileSidebar";
import LandParcels from "../../components/Mystore/LandParcels/LandParcels";
import LandEstates from "../../components/Mystore/LandEstates/LandEstates";
import Wearables from "../../components/Mystore/Wearables/Wearables";
import OnSale from "../../components/Mystore/OnSale/OnSale";
import AllBids from "../../components/Mystore/AllBids/AllBids";
import Names from "../../components/Mystore/Names/Names";
import NoResult from "../../components/NoResult/NoResult";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { getSaleDataAPI } from "../../hooks/salesdata";
import Sales from "../../components/Mystore/Sales/Sales";

export default function MyStore() {
  const classes = MyStoreStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  var category = query.get("section");
  const [rightPartIndex, setrightPartIndex] = React.useState("");

  useEffect(() => {
    switch (category) {
      case "parcels":
        setrightPartIndex("parcels");
        break;
      case "estates":
        setrightPartIndex("estates");
        break;
      case "wearables":
        setrightPartIndex("wearables");
        break;
      case "sales":
        setrightPartIndex("sales");
        break;
      case "on_sale":
        setrightPartIndex("on_sale");
        break;
      case "bids":
        setrightPartIndex("bids");
        break;
      case "ens":
        setrightPartIndex("ens");
        break;
      default:
        setrightPartIndex("");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <TopTab />
      <div className={classes.MobileSidebarContainer}>
        <MobileSidebar />
      </div>

      <div className={classes.root}>
        <div className={classes.leftPart}>
          <MystoreSidebar />
        </div>
        <div className={classes.rightPart}>
          {rightPartIndex === "parcels" ? (
            <LandParcels />
          ) : rightPartIndex === "estates" ? (
            <LandEstates />
          ) : rightPartIndex === "wearables" ? (
            <Wearables />
          ) : rightPartIndex === "sales" ? (
            <Sales />
          ) : rightPartIndex === "on_sale" ? (
            <OnSale />
          ) : rightPartIndex === "bids" ? (
            <AllBids />
          ) : rightPartIndex === "ens" ? (
            <Names />
          ) : (
            <NoResult />
          )}
        </div>
      </div>
    </>
  );
}
