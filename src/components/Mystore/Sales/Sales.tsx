import { Grid } from "@material-ui/core";
import { SalesStyle } from "./SalesStyle";
import GeneralSaleCard from "../GeneralSaleCard/GeneralSaleCard";
import GradientEarningCard from "../GradientEarningCard/GradientEarningCard";
import SalesStagingTable from "../../../pages/MyStore/SalesStagingTable/SalesStagingTable";
import { headerData } from "./SalesStagingData";
import { getSaleDataAPI } from "../../../../src/hooks/salesdata";
import React from "react";
import { useTranslation } from "react-i18next";
import TablePagination from "../../Base/TablePagination";
import { showSpinner } from "../../../store/spinner";
import { useAppDispatch } from "../../../store/hooks";

export default function Sales() {
  const classes = SalesStyle();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [saledata, setSaledata] = React.useState<any>();
  const [curPage, setCurPage] = React.useState<any>(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  const getSaleData = async () => {
    dispatch(showSpinner(true));
    const saledata = await getSaleDataAPI();
    dispatch(showSpinner(false));
    setSaledata(saledata.data.data);
  };
  const getPageCount = () => {
    var count = saledata?.length;
    var totalPage = Math.ceil(count / 2);
    setTotalPage(totalPage);
  };

  React.useEffect(() => {
    getSaleData();
  }, []);

  React.useEffect(() => {
    getPageCount();
  }, [saledata?.length]);

  return (
    <>
      <div className={classes.statsContainer}>
        <div className={classes.title}>{t("Stats")}</div>
        <div className={classes.generalStats}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard iconSrc="pen" priceColor="yellow" price={121} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard
                iconSrc="moneybag"
                priceColor="purple"
                price={111}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard iconSrc="crown" priceColor="green" price={621} />
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <GradientEarningCard
              iconSrc="cube"
              backgroundColor="yellow"
              title="ethereum"
              price={100}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <GradientEarningCard
              iconSrc="shape"
              backgroundColor="purple"
              title="polygon"
              price={300}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <div className={classes.title}>{t("Sales List")}</div>
        <SalesStagingTable
          columns={headerData}
          rows={saledata}
          curPage={curPage}
        />
        <div className={classes.paginationContainer}>
          <TablePagination handlepgnum={handlepgnum} totalPage={totalPage} />
        </div>
      </div>
    </>
  );
}
