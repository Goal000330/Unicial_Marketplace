import { NamesStyle } from "./NamesStyle";
import { NamesData } from "../../../config/constant";
import { Grid } from "@material-ui/core";
import { showMoreCount } from "../../../config/constant";
// import ProductCard from "../../Base/ProductCard/ProductCard";
import NameCard from "../../Base/NameCard/NameCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import NoResult from "../../NoResult/NoResult";
import { useState } from "react";

export default function Names() {
  const classes = NamesStyle();
  const [showStatus, setShowStatus] = useState(false);
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  return (
    <>
      {NamesData !== undefined && NamesData.length !== 0 ? (
        <>
          <Grid container spacing={2}>
            {NamesData.slice(
              0,
              !showStatus ? showMoreCount : NamesData.length
            ).map((item: any, key: any) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <NameCard mainName={item.mainName} price={item.price} />
                </Grid>
              );
            })}
          </Grid>
          <div
            className={
              NamesData.length < showMoreCount
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
