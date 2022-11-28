import { useStyles } from "./StagingTableStyle";
import StageMarket from "../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import cancelIcon from "../../../assets/svg/cancel_icon.svg";
import checkIcon from "../../../assets/svg/check_icon.svg";
import clsx from "clsx";

interface StagingTableProps {
  columns?: any;
  rows: any;
  stepIndex?: number;
}

const StagingTable = ({ columns, rows, stepIndex }: StagingTableProps) => {
  const classes = useStyles();

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow
      key={key}
      className={clsx({ [classes.targetRow]: stepIndex === key })}
    >
      <TableCell className={clsx(classes.tableCell)}>{row.stage}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.starttime}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.endtime}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.price}</TableCell>
      <TableCell className={clsx(classes.tableCell, classes.center)}>
        {row.status === 1 ? (
          <img src={checkIcon} alt="check"></img>
        ) : (
          <img src={cancelIcon} alt="cancel"></img>
        )}
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default StagingTable;
