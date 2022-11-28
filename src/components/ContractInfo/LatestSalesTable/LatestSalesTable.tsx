import { useStyles } from "./LatestSalesTableStyle";
import StageMarket from "../../../components/StageMarket/StageMarket";
import { useTranslation } from "react-i18next";

import { TableRow, TableCell } from "@material-ui/core";

import clsx from "clsx";

interface Props {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
}

const LatestSalesTable = ({ columns, rows, curPage, stepIndex }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const tableRows =
    rows !== undefined ? (
      rows.slice((curPage - 1) * 5, curPage * 5).map((row: any, key: any) => (
        <TableRow
          key={key}
          className={clsx({ [classes.targetRow]: stepIndex === key })}
        >
          <TableCell className={clsx(classes.tableCell, classes.imageCell)}>
            <div className={classes.avatarContainer}>
              <img src={row.fromImgSrc} className={classes.avatar} />
            </div>
            <div>{row.fromName}</div>
          </TableCell>
          <TableCell className={clsx(classes.tableCell, classes.imageCell)}>
            <div className={classes.avatarContainer}>
              <img src={row.toImgSrc} className={classes.avatar} />
            </div>
            <div>{row.fromName}</div>
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>{row.type}</TableCell>
          <TableCell className={clsx(classes.tableCell)}>{row.when}</TableCell>
          <TableCell className={clsx(classes.tableCell, classes.symbolCell)}>
            <i className={classes.symbol}>⏣</i>
            <div className={classes.price}>{row.price}</div>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <></>
    );
  return (
    <>
      <div className={classes.title}>{t("Latest Sales")}</div>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default LatestSalesTable;
