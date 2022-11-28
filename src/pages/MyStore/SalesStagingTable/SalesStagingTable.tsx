import { useStyles } from "./SalesStagingTableStyle";
import StageMarket from "../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../assets/svg/normalshape.svg";
import clsx from "clsx";
import { dateConvert_untilDate } from "./../../../common/dateUtils";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
import { ethers } from "ethers";
import { StyledTooltip } from "../../../components/Mystore/LandCard/LandCardStyle";

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
}

const SalesStagingTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
}: StagingTableProps) => {
  const classes = useStyles();
  const tableRows = rows
    ?.slice((curPage - 1) * 2, curPage * 2)
    .map((row: any, key: any) => {
      const date = dateConvert_untilDate(row.expiresAt);
      const buyer = row.buyer.slice(0, 7) + "..";
      let type = "";
      if (row.nftAddress === SpaceProxyAddress) {
        type = "Parcel";
      } else if (row.nftAddress === EstateProxyAddress) {
        type = "Estate";
      }
      const price = ethers.utils.formatUnits(row.totalPrice, 18);
      return (
        <TableRow
          key={key}
          className={clsx({ [classes.targetRow]: stepIndex === key })}
        >
          <TableCell className={clsx(classes.tableCell)}>{key + 1}</TableCell>
          <TableCell className={clsx(classes.tableCell)}>{date}</TableCell>

          <TableCell className={clsx(classes.tableCell)}>
            <StyledTooltip title={row.buyer} interactive arrow placement="top">
              <span>{buyer}</span>
            </StyledTooltip>
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>{type}</TableCell>
          <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
            {
              <img
                src={normalshapeSvg}
                className={classes.normalshape}
                alt="salestaging"
              />
            }
            {<div>{Number(price)}</div>}
          </TableCell>
        </TableRow>
      );
    });
  return (
    <>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default SalesStagingTable;
