import React from "react";
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
import clsx from "clsx";

interface StyledTableleProps {
  columns?: any;
  rows?: any;
  parcelRows?: any;
  estateRows?: any;
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
        paddingLeft: "10px",
        paddingRight: "5px",
      },
      "& .MuiTableCell-root": {
        whiteSpace: "nowrap",
        borderBottom: "none",
      },
    },
    tableContent: {
      "&.MuiTableHead-root": {
        width: "900px",
        minWidth: "100%",
        tableLayout: "auto",
      },
    },
    tableHeaderCell: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 400,
      color: "#96A1DB",
      opacity: "50%",
      fontFamily: "Lato",
      "&.MuiTableCell-root": {
        padding: "10px 10px 10px 20px",
        borderBottom: "solid 1px #282E4E",
      },
    },
    tableCell: {
      fontSize: "16px",
      fontFamily: "Lato",
      color: "white",
      fontWeight: "normal",
    },
    firstcellmargin: {
      display: "flex",
      marginRight: "40px",
      alignItems: "center",
    },
    secondcellmargin: {
      marginRight: "20px",
    },
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
    whenCell: {
      fontSize: "15px",
      color: "#676370",
      fontWeight: 400,
      textAlign: "right",
    },
    center: {
      // textAlign: "center",
    },
    targetRow: {
      backgroundColor: "#282e4e",
      borderLeft: "2px solid #7e64e2",
      "& > td:last-child": {
        borderRadius: "0px 15px 15px 0px",
      },
    },
  })
);

function StageMarket({
  columns,
  parcelRows,
  estateRows,
  rows,
}: StyledTableleProps) {
  const classes = useStyles();

  const tableColumns = columns?.map((column: any, key: any) => (
    <TableCell
      key={column}
      className={clsx(classes.tableHeaderCell, {
        [classes.center]: column === "Status",
      })}
    >
      {column}
    </TableCell>
  ));

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table aria-label="simple table" className={classes.tableContent}>
          <TableHead>
            <TableRow>{tableColumns}</TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
          <TableBody>{parcelRows}</TableBody>
          <TableBody>{estateRows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StageMarket;
