import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import HeaderSignInBtn from "./component/HeaderSignInBtn/HeaderSignInBtn";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { headerLinkData } from "../../config/constant";
import clsx from "clsx";
export default function Header() {
  const classes = HeaderStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const loginAddress = useAppSelector(selectLoginAddress);
  const { t } = useTranslation();
  const [headerShowStatus, setHeaderShowStatus] = useState(true);
  const [headerActive, setHeaderActive] = useState(headerLinkData.marketplace);
  const handleSignIn = () => {
    navigate(`/signin`);
  };

  const handleHeaderlink = (index: number) => {
    setHeaderActive(index);
    switch (index) {
      case headerLinkData.marketplace:
        navigate("/");
        break;
      case headerLinkData.builder:
        navigate("/builder/builder_scenes");
        break;
      case headerLinkData.docs:
        window.open("https://doc.unicial.org");
        break;
      case headerLinkData.blog:
        window.open("https://blog.unicial.org");
        break;
    }
  };
  useEffect(() => {
    if (location.pathname.includes("/builder")) {
      setHeaderActive(headerLinkData.builder);
      if (location.pathname.includes("/builder/builderItem-editor")) {
        setHeaderShowStatus(false);
      } else {
        setHeaderShowStatus(true);
      }
    } else {
      setHeaderActive(headerLinkData.marketplace);
      setHeaderShowStatus(true);
    }
  }, [headerActive, location]);

  return (
    <>
      <div
        className={clsx(classes.root, {
          [classes.NoneDisplay]: headerShowStatus === false,
        })}>
        <div className={classes.container}>
          <div className={classes.headermenuContainer}>
            <a href='https://unicial.org' className={classes.logoContent}>
              <img src={"/logo.svg"} className={classes.logo} alt='symbol' />
              <span className={classes.logoName}>{t("UNICIAL")}</span>
            </a>
            <Button
              className={
                headerActive === headerLinkData.marketplace
                  ? classes.headerClickBtn
                  : classes.headerBtn
              }
              disableRipple
              onClick={() => handleHeaderlink(headerLinkData.marketplace)}>
              <span></span>
              <span className={classes.headerLink}>{t("Marketplace")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={
                headerActive === headerLinkData.builder
                  ? classes.headerClickBtn
                  : classes.headerBtn
              }
              disableRipple
              onClick={() => handleHeaderlink(headerLinkData.builder)}>
              <span></span>
              <span className={classes.headerLink}>{t("Builder")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={classes.headerBtn}
              disableRipple
              onClick={() => handleHeaderlink(headerLinkData.docs)}>
              <span></span>
              <span className={classes.headerLink}>{t("Documents")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={classes.headerBtn}
              disableRipple
              onClick={() => handleHeaderlink(headerLinkData.blog)}>
              <span></span>
              <span className={classes.headerLink}>{t("Blog")}</span>
              <span className={"active-border"}></span>
            </Button>
          </div>
          <HeaderMobileMenu />
          {loginAddress ? (
            <HeaderSignInBar />
          ) : (
            <HeaderSignInBtn onClick={handleSignIn} />
          )}
        </div>
      </div>
    </>
  );
}
