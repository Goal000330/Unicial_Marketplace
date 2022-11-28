import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const MyItemSideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "360px",
      height: "100vh",
    },
    myItemNavbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "62px",
      backgroundColor: "#FFFFFF0D",
      padding: "0px 21px",
    },
    NavbarTitle: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "50px",
    },
    menuIcon: {
      cursor: "pointer",
    },
    plusIcon: {
      cursor: "pointer",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      "&:hover": {
        color: "white",
      },
    },
    menuItem: {
      "&:hover": {
        "& $listLabel": {
          color: "white !important",
        },
      },
    },
    createPopover: {
      marginTop: "23px",
    },
    totalInfoContainer: {
      padding: "0px 0px 0px 22px",
    },
    itemInfoRoot: {
      borderBottom: "1px solid #FFFFFF12",
      padding: "24px 0px 34px 0px",
      maxHeight: "calc((100vh - 62px) / 2)",
    },
    title: {
      color: "#96A1DB",
      opacity: "50%",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "18px",
      marginBottom: "10px",
    },
    ///
    collectionInfoRoot: {
      padding: "24px 0px 34px 0px",
      maxHeight: "calc((100vh - 62px) / 2)",
    },
    scrollContainer: {
      overflow: "auto",
      maxHeight: "calc((100vh - 62px) / 2 - 52px)",
      paddingRight: "22px",
    },
  })
);
