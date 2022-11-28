import { WearablesStyle } from "./WearablesStyle";
import { WearablesData } from "../../../config/constant";
import { Grid } from "@material-ui/core";
import { showMoreCount } from "../../../config/constant";
import ProductCard from "../../Base/ProductCard/ProductCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import NoResult from "../../NoResult/NoResult";
import { useState } from "react";

export default function Wearables() {
  const classes = WearablesStyle();
  const [showStatus, setShowStatus] = useState(false);
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };
  return (
    <>
      {WearablesData !== undefined && WearablesData.length !== 0 ? (
        <>
          <Grid container spacing={2}>
            {WearablesData.slice(
              0,
              !showStatus ? showMoreCount : WearablesData.length
            ).map((item: any, key: any) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <ProductCard
                    tagColor={item.tagColor}
                    tagLetter={item.tagLetter}
                    productName={item.productName}
                    category="Zilionixx"
                    price={item.price}
                  />
                </Grid>
              );
            })}
          </Grid>
          <div
            className={
              WearablesData.length < showMoreCount
                ? classes.displayNone
                : classes.showmoreContent
            }
          >
            <ShowMoreLessBtn
              letter={showStatus ? "Show Less" : "Show All"}
              onClick={handleShowBtn}
            />
          </div>
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
}
