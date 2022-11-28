import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Box } from "@material-ui/core";
import coinIcon1 from "./../../../../assets/svg/coin_symbol1.svg";
import coinIcon2 from "./../../../../assets/svg/coin_symbol2.svg";
import sigin_user_svg from "./../../../../assets/svg/sigin_user.svg";
import {
  StyledAvatarPopover,
  HeaderSignInBarStyle,
  StyledRingButton,
} from "./HeaderSignInBarStyle";
import { StyledMenuItem } from "../../../Footer/FooterStyle";
import { setlogoutAddress } from "../../../../store/auth/actions";
import { useAppDispatch } from "../../../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../store/hooks";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import useEffect from "react";
import { getZNXBalance, getUccBalance } from "../../../../common/contract";
import { ethers, BigNumber } from "ethers";
import clsx from "clsx";

export default function HeaderSignInBar() {
  const classes = HeaderSignInBarStyle();
  const [tmp, setTmp] = React.useState(0);
  const [znxBal, setZnxBal] = React.useState<any>(0);
  const [uccBal, setUccBal] = React.useState<any>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginAddress = useAppSelector(selectLoginAddress);

  React.useEffect(() => {
    getZNXBalance(loginAddress).then((bal) => {
      setZnxBal(Math.round(Number(ethers.utils.formatEther(bal)) * 1e2) / 1e2);
    });
    getUccBalance(loginAddress).then((bal) => {
      setUccBal(Math.round(Number(ethers.utils.formatEther(bal)) * 1e2) / 1e2);
    });
  }, [loginAddress]);

  const handleRingButton = () => {
    setTmp(1);
  };
  //    avatar menu relate
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount = () => {};
  const handleSettings = () => {};
  const handleSignOut = () => {
    dispatch(setlogoutAddress());
    navigate("/");
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledRingButton
          onClick={handleRingButton}
          disabled={tmp === 1}
          className={classes.ringButton}
        >
          <NotificationsIcon className={classes.notificationicon} />
        </StyledRingButton>
        <div className={classes.userMenu}>
          <div className={classes.accountWrapper}>
            <a className={classes.mana}>
              <i className={classes.symbol}>
                <img
                  src={coinIcon1}
                  className={classes.maticIcon}
                  alt="symbol"
                />
              </i>
              {uccBal} UCC
            </a>
            <a href="#" className={classes.mana}>
              <i className={classes.symbol}>
                <img
                  src={coinIcon2}
                  className={classes.maticIcon}
                  alt="symbol"
                />
              </i>
              {znxBal} ZNX
            </a>
          </div>
          {/* avartar */}
          <Box className={classes.avatarContainer} onClick={handleClick}>
            <img
              src={sigin_user_svg}
              style={{ width: "100%", height: "100%" }}
              alt="symbol"
            />
          </Box>

          {/* avatar menu open */}
          <StyledAvatarPopover
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
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
            <div className={classes.accountInfo}>
              <div className={classes.imageContainer}>
                <img
                  src={sigin_user_svg}
                  style={{ width: "100%", height: "100%" }}
                  alt="symbol"
                />
              </div>
              <div className={classes.imageLabel}>{t("Guest")}</div>
            </div>
            <StyledMenuItem className={classes.moneyContainer}>
              <Box className={clsx(classes.itemContainer)}>
                <img src={coinIcon1} className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{uccBal} UCC</Box>
              </Box>
            </StyledMenuItem>
            <StyledMenuItem className={classes.moneyContainer}>
              <Box className={classes.itemContainer}>
                <img src={coinIcon2} className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{znxBal} ZNX</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleAccount}>
              <Box className={classes.itemContainer}>
                <PersonOutlineIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{t("Account")}</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSettings}>
              <Box className={classes.itemContainer}>
                <SettingsIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{t("Settings")}</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSignOut}>
              <Box className={classes.itemContainer}>
                <ExitToAppIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel} onClick={handleSignOut}>
                  {t("Sign Out")}
                </Box>
              </Box>
            </StyledMenuItem>
          </StyledAvatarPopover>
        </div>
      </div>
    </div>
  );
}
