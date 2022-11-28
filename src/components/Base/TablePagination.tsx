import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
      "& .MuiPaginationItem-root": {
        color: "white",
      },

      "& .MuiPaginationItem-page.Mui-selected": {
        backgroundColor: "#e5080814",
      },
      "& .MuiTouchRipple-root": {
        backgroundColor: "#606cab",
        opacity: "20%",
      },
    },
  })
);

interface Props {
  totalPage: number;
  handlepgnum: (value: any) => void;
  className?: any;
}

export default function TablePagination({ totalPage, handlepgnum }: Props) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlepgnum(value);
  };
  return (
    <div className={classes.root}>
      <Pagination count={totalPage} onChange={handleChange} />
    </div>
  );
}
