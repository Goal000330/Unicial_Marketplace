import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Theme,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface StyledTableleProps {
  columns?: any;
  rows: any;
  emptyTableRows?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "18px",
      textTransform: "uppercase",
      marginBottom: "16px",
      color: "#676370",
    },
    tableContainer: {
      "&.MuiTableContainer-root": {
        overflow: "auto hidden",
        border: "none",
        padding: "0px",
        marginBottom: "20px",
      },
      "& .MuiTableCell-root": {
        borderBottom: "none",
      },
    },
    tableContent: {
      "&.MuiTableHead-root": {
        width: "900px",
        minWidth: "100%",
        tableLayout: "auto",
      },
      "& .MuiTableRow-head": {
        backgroundColor: "red",
      },
      "& .MuiTableCell-stickyHeader": {
        backgroundColor: "#18141a",
      },
    },
    tableHeaderCell: {
      fontSize: "13px",
      lineHeight: "18px",
      fontWeight: 400,
      color: "#676370",
      fontFamily: "Lato",
      "&.MuiTableCell-root": {
        padding: "11px 0px",
        // borderBottm: "none",
      },
      [theme.breakpoints.down(769)]: {
        display: "none",
      },
    },
    tableCell: {
      fontSize: "15px",
      fontFamily: "Lato",
      color: "white",
      fontWeight: 500,
      "&.MuiTableCell-root": {
        padding: "18px 0px",
        borderTop: "solid 1px #242129",
      },
    },
    firstcellmargin: {
      display: "flex",
      marginRight: "40px",
      alignItems: "center",
    },
    secondcellmargin: {
      marginRight: "20px",
    },
    thirdcellmargin: {},
    imageContainer: {
      width: "18px",
      height: "18px",
      backgroundColor: "#37343d",
      borderRadius: "100%",
      marginRight: "5px",
    },
    fromIamge: {
      width: "100%",
      height: "100%",
      marginRight: "5px",
    },
    symbol: {
      fontSize: "normal",
      paddingRight: "0.3em",
      transform: "translateY(-0.06em)",
      color: "#ff2d55",
    },
    responseTableCell: {
      fontSize: "15px",
      fontFamily: "Lato",
      color: "white",
      fontWeight: 500,
      "&.MuiTableCell-root": {
        padding: "7px 0px",
      },
    },
    whenCell: {
      fontSize: "15px",
      color: "#676370",
      fontWeight: 400,
      textAlign: "right",
    },
    noresponseRow: {
      [theme.breakpoints.down(769)]: {
        display: "none",
      },
    },
    responseRow: {
      display: "none",
      [theme.breakpoints.down(769)]: {
        display: "block",
      },
    },
  })
);

function TransactionHistoryTable({
  columns,
  rows,
}: StyledTableleProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  const tableColumns = columns?.map((column: any, key: any) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ));

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key} className={classes.noresponseRow}>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <div className={classes.firstcellmargin}>
          <div className={classes.imageContainer}>
            <img
              src={row.fromImgSrc}
              className={classes.fromIamge}
              alt="fromimage!"
            />
          </div>

          {row.fromName}
        </div>
      </TableCell>

      <TableCell component="th" scope="row" className={classes.tableCell}>
        <div className={classes.firstcellmargin}>
          <div className={classes.imageContainer}>
            <img
              src={row.toImgSrc}
              className={classes.fromIamge}
              alt="fromimage!"
            />
          </div>
          {row.toName}
        </div>
      </TableCell>

      <TableCell className={clsx(classes.tableCell, classes.thirdcellmargin)}>
        {row.type}
      </TableCell>

      <TableCell className={clsx(classes.tableCell, classes.thirdcellmargin)}>
        {row.when}
      </TableCell>

      <TableCell className={clsx(classes.tableCell, classes.secondcellmargin)}>
        <i className={classes.symbol}>⏣</i>
        {row.price}
      </TableCell>
    </TableRow>
  ));

  //responsive table
  const responsiveTableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key} className={classes.responseRow}>
      <TableCell className={classes.responseTableCell}>
        <i className={classes.symbol}>⏣</i>
        {row.price}
      </TableCell>
      <TableCell className={clsx(classes.responseTableCell, classes.whenCell)}>
        {row.when}
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <div className={classes.title}>{t("Latest Sales")}</div>
      <TableContainer className={classes.tableContainer}>
        <Table
          stickyHeader
          aria-label="simple table"
          className={classes.tableContent}
        >
          <TableHead>
            <TableRow>{tableColumns}</TableRow>
          </TableHead>
          <TableBody>
            {tableRows}
            {responsiveTableRows}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionHistoryTable;
