import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import productImg from "../../assets/svg/texture.png";
import clsx from "clsx";
import whiteTokenIcon from "../../assets/svg/whiteToken.png";
import { useLocation, useNavigate } from "react-router";
import { Box } from "@material-ui/core";
import {
  StyledCollectionPopover,
  StyledMenuItem,
} from "../../pages/Builder/BuilderCollections/BuilderCollectionsStyle";
import {
  editnotYetdonedropdownData,
  editDonedropdownData,
} from "./../../../src/config/constant";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "92px",
      backgroundColor: "#282E4E",
      borderRadius: "15px",
      padding: "16px 32px 16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&:hover": {
        // transform: "translateY(-2px)",
        "& $editContainer": {
          opacity: 100,
        },
      },
      [theme.breakpoints.down(726)]: {
        height: "auto",
      },
    },
    productContainer: {
      width: "81px",
      height: "68px",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",

      [theme.breakpoints.down(726)]: {
        width: "140px",
        height: "150px",
      },
    },
    yellowPart: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      width: "100%",
      height: "20%",
      backgroundColor: "#DFB140",
    },
    imgContainer: {
      width: "100%",
      height: "80%",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "calc(100% - 132px )",
      [theme.breakpoints.down(726)]: {
        display: "block",
        width: "calc(100% - 190px)",
      },
    },
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down(726)]: {
        marginBottom: "15px",
      },
    },
    whiteColor: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      alignItems: "center",
      justifyContent: "center",
    },
    priceContainer: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      [theme.breakpoints.down(726)]: {
        justifyContent: "left",
      },
    },
    whiteTokenIcon: {
      marginRight: "3px",
    },

    greyColor: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.2px",
      color: "#96A1DB",
    },
    yellowColor: {
      cursor: "pointer",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "26px",
      background: "linear-gradient(to right, #FF7C4C 10%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginRight: "5px",
    },
    img: {
      width: "100%",
      height: "100%",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    editContainer: {
      display: "flex",
      alignItems: "center",
      opacity: 0,
    },
    editContainerShow: {
      display: "flex",
      alignItems: "center",
      opacity: 100,
    },
    moreIcon: {
      cursor: "pointer",
      marginLeft: "5px",
      display: "flex",
      alignItems: "center",
      marginTop: "1px",
      "& i": {
        color: "#C4C4C4",
      },
    },
    doneContainer: {
      display: "flex",
      alignItems: "center",
      "& i": {
        fontSize: "18px",
        fontWeight: 100,
        marginRight: "1px",
        background: "linear-gradient(to right, #7F64E2 10%, #41A6EF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    doneLetter: {
      cursor: "pointer",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "26px",
      background: "linear-gradient(to right, #7F64E2 10%, #41A6EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginRight: "5px",
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
  })
);

interface Props {
  className?: any;
  handlePhoto?: any;
  setClick: () => void;
}

export default function CollectionItemInfoRow({
  className,
  handlePhoto,
  setClick,
}: Props) {
  let status = 1;
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ellipsisIconStatus, setEllipsisIconStatus] = React.useState(false);
  const handleEdit = () => {
    navigate("/builder/builderItem-editor");
  };
  //    ellipse icon relate
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
    setEllipsisIconStatus(true);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
    setEllipsisIconStatus(false);
  };
  const handleItem = (index: number) => {
    switch (index) {
      case 1:
        navigate("/builder/builder_items/200");
        handleClose();
        break;
      case 2:
        navigate("/builder/builderItem-editor");
        handleClose();
        break;
      case 3:
        setClick();
        handleClose();
        break;
      case 4:
        // removeRow();
        handleClose();
        break;
    }
  };
  return (
    <>
      <div className={clsx(classes.root, className)}>
        <div className={classes.productContainer} onClick={handlePhoto}>
          <div className={classes.yellowPart}></div>
          <div className={classes.imgContainer}>
            <img src={productImg} className={classes.img} />
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>{t("OrionNFT")}</div>
            <div className={classes.greyColor}>{t("Wearable")}</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>{t("Eyes")}</div>
            <div className={classes.greyColor}>{t("Category")}</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>{t("Unique")}</div>
            <div className={classes.greyColor}>{t("Rarity")}</div>
          </div>
          <div className={classes.itemContainer}>
            {status === 1 ? (
              <div className={classes.yellowColor} onClick={setClick}>
                {t("Set Price")}
              </div>
            ) : (
              <div className={classes.priceContainer}>
                <img src={whiteTokenIcon} className={classes.whiteTokenIcon} />{" "}
                12
              </div>
            )}

            <div className={classes.greyColor}> {t("price")}</div>
          </div>
          {/* /// */}
          {status === 1 ? (
            <div
              className={clsx(classes.editContainer, {
                [classes.editContainerShow]: ellipsisIconStatus === true,
              })}
            >
              <div className={classes.yellowColor} onClick={handleEdit}>
                {t("Edit")}
              </div>
              <div aria-controls="simple-menu" aria-haspopup="true">
                <Box className={classes.moreIcon} onClick={handleOpen}>
                  <i className="fas fa-ellipsis-h"></i>
                </Box>

                <StyledCollectionPopover
                  id="simple-menu"
                  anchorEl={anchorNetwork}
                  keepMounted
                  open={Boolean(anchorNetwork)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {editnotYetdonedropdownData.map((item: any, index: any) => (
                    <StyledMenuItem
                      disableRipple
                      onClick={() => handleItem(item.index)}
                      key={index}
                      className={classes.menuItem}
                    >
                      <Box className={classes.listContainer}>
                        <Box className={clsx(classes.listLabel)}>
                          {item.content}
                        </Box>
                      </Box>
                    </StyledMenuItem>
                  ))}
                </StyledCollectionPopover>
              </div>
            </div>
          ) : (
            <div
              className={clsx(classes.editContainer, {
                [classes.editContainerShow]: ellipsisIconStatus === true,
              })}
            >
              <div className={classes.doneContainer}>
                <span className={classes.doneLetter}>{t("Done")}</span>
                <i className="fas fa-check"></i>
              </div>
              <div aria-controls="simple-menu" aria-haspopup="true">
                <Box className={classes.moreIcon} onClick={handleOpen}>
                  <i className="fas fa-ellipsis-h"></i>
                </Box>

                <StyledCollectionPopover
                  id="simple-menu"
                  anchorEl={anchorNetwork}
                  keepMounted
                  open={Boolean(anchorNetwork)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {editDonedropdownData.map((item: any, index: any) => (
                    <StyledMenuItem
                      disableRipple
                      onClick={() => handleItem(item.index)}
                      key={index}
                      className={classes.menuItem}
                    >
                      <Box className={classes.listContainer}>
                        <Box className={clsx(classes.listLabel)}>
                          {item.content}
                        </Box>
                      </Box>
                    </StyledMenuItem>
                  ))}
                </StyledCollectionPopover>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
