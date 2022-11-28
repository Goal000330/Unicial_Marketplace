import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import makeBlockie from "ethereum-blockies-base64";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.4px",
    textTransform: "uppercase",
    marginBottom: "21px",
    color: "#96A1DB",
    opacity: "50%",
  },
  descript: {
    display: "flex",
    overflow: "hidden",
  },
  name: {
    marginLeft: "15px",
    fontSize: "16px",
    lineHeight: "19.2px",
    fontWeight: 400,
    alignSelf: "center",
  },
  avatarContainer: {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    backgroundColor: "white",
    borderRadius: "100%",
    cursor: "pointer",
  },
  addressImg: {
    width: "100%",
    height: "100%",
  },
  displayNone: {
    display: "none",
  },
}));

interface OwnerProps {
  ownerAddress: any;
}

const Owner = ({ ownerAddress }: OwnerProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleOwnerAvatar = (address: any) => {
    navigate(
      `/accounts/${address}?assetType=nft&section=all&vendor=decentraland&page=1&sortBy=newest&onlyOnSale=false&viewAsGuest=false`
    );
  };
  return (
    <>
      <div>
        <div className={classes.title}>{t("Owner")}</div>
        <div className={classes.descript}>
          <div
            className={classes.avatarContainer}
            onClick={() => handleOwnerAvatar(ownerAddress)}
          >
            <img
              src={makeBlockie(ownerAddress)}
              className={classes.addressImg}
              alt="A"
            />
          </div>
          <div className={classes.name}>{ownerAddress}</div>
        </div>
      </div>
    </>
  );
};

export default Owner;
