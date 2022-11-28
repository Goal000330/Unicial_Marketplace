import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const SalesStyle = makeStyles((theme: Theme) =>
  createStyles({
    statsContainer: {
      marginBottom: "42px",
    },
    title: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "50px",
      letterSpacing: "2%",
      marginTop: "-7px",
      marginBottom: "16px",
    },

    generalStats: {
      marginBottom: "20px",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
    },
  })
);
