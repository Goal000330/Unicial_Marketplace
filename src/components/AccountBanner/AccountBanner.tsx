import { AccountBannerStyle } from "./AccountBannerStyle";
import makeBlockie from "ethereum-blockies-base64";
import { useState, useEffect } from "react";
import copy from "clipboard-copy";

export default function AccountBanner() {
  const classes = AccountBannerStyle();
  const ownerAddress = "0x17E7BB9216206424eFc98354e7aae5F818CAbEE3";
  const [copyOwnAddress, setcopyOwnAddress] = useState<any>({
    status: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setcopyOwnAddress({ status: false });
    }, 400);
    return () => clearTimeout(timer);
  }, [copyOwnAddress]);

  const handleCopyOwnAddress = (address: string) => {
    copy(address);
    setcopyOwnAddress({ status: !copyOwnAddress.status });
  };

  return (
    <div className={classes.root}>
      <div className={classes.ownerInfoRoot}>
        <div className={classes.imgRoot}>
          <div className={classes.imgContainer}>
            <img src={makeBlockie(ownerAddress)} className={classes.ownerImg} />
          </div>
        </div>

        <div className={classes.ownerName}>Leopard#b02a</div>
        <div
          className={classes.ownerAddress}
          onClick={() => handleCopyOwnAddress(ownerAddress)}
        >
          {ownerAddress.slice(0, 10)}... &nbsp;
          {copyOwnAddress.status ? (
            <i className="fa fa-check-circle mr-1"></i>
          ) : (
            <span>
              <i className="far fa-copy"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
