import FormControl from "@material-ui/core/FormControl";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./SettingManagerStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import TablePagination from "../../../../components/Base/TablePagination";
import { showAlert } from "../../../../store/alert";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { BigNumber, ethers } from "ethers";
import UpdateManagerTable from "./UpdateManagerTable/UpdateManagerTable";
import { headerUpdateManagerData } from "../../../../config/constant";
// import { managerData } from "../../../../config/constant";
import { onePageCount, CHAIN_INFO } from "../../../../config/constant";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../../../config/contracts/EstateRegitryContract";
import { MarketplaceAddress } from "../../../../config/contracts/MarketPlaceContract";
import { selectLoginAddress } from "./../../../../store/auth/selectors";

declare var window: any;
// var totalPage: number;
let managerData: any[];

var signer: any,
  estateRegistryContractwithSigner: any,
  estateRegistryContractwithProvider: any;
const SettingManager = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { estateid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);

  const [managerAddress, setManagerAddress] = useState("");
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const [selectRow, setSelectRow] = useState(0);
  const [CurPage, setCurPage] = useState(1);
  const [uniqueManagers, setUniqueManagers] = useState<any>();
  const [totalPage, setTotalPage] = useState(0);
  var isSignIn = 1;
  signer = generateSigner(window.ethereum);
  estateRegistryContractwithSigner = generateContractInstance(
    EstateProxyAddress,
    EstateRegistryAbi,
    signer
  );
  const provider = new ethers.providers.JsonRpcProvider(
    CHAIN_INFO.TESTNET.rpcUrls[0]
  );
  estateRegistryContractwithProvider = new ethers.Contract(
    EstateProxyAddress,
    EstateRegistryAbi,
    provider
  );
  const isAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    let result = isAddress(managerAddress);
    result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
  }, [managerAddress]);
  useEffect(() => {
    fetchManagerData();
  }, []);
  const fetchManagerData = async () => {
    let filterManager =
      estateRegistryContractwithProvider.filters.UpdateManager(loginAddress);
    managerData = await estateRegistryContractwithProvider.queryFilter(
      filterManager,
      -10000,
      "latest"
    );
    let managerDataLength = managerData?.length;
    let uniqueManagers: any[] = [];
    let uniqueManagerSet = new Set();

    for (var i = 0; i < managerDataLength; i++) {
      uniqueManagerSet.add(managerData[i].args[1]);
    }
    for (var i = managerDataLength - 1; i >= 0; i--) {
      if (uniqueManagerSet.size === 0) break;
      if (uniqueManagerSet.has(managerData[i].args[1])) {
        uniqueManagers.push(managerData[i]);
      }
      uniqueManagerSet.delete(managerData[i].args[1]);
    }

    let totalRowCount = uniqueManagers?.length;
    // totalPage = Math.ceil(totalRowCount / onePageCount);
    setTotalPage(Math.ceil(totalRowCount / onePageCount));
    setUniqueManagers(uniqueManagers);
  };

  const handleRow = (key: number) => {
    setSelectRow(key);
  };
  const handleChange = (e: any) => {
    setManagerAddress(e.target.value);
  };

  const handlepgnum = (value: number) => {
    setCurPage(value);
  };

  const handleAdd = async () => {
    if (
      estateRegistryContractwithSigner.getApproved(estateid) !==
        MarketplaceAddress &&
      estateRegistryContractwithSigner.isApprovedForAll(
        loginAddress,
        estateid
      ) === false
    ) {
      let approveMarketTx = await estateRegistryContractwithSigner.approve(
        MarketplaceAddress,
        estateid
      );
      await approveMarketTx.wait();
      dispatch(
        showAlert({
          message:
            "Successfully approved. You have to confirm order creation transaction to finally publich your order.",
          severity: "success",
        })
      );
    }
    let addManagerTx = await estateRegistryContractwithSigner.setUpdateManager(
      loginAddress,
      managerAddress,
      true
    );
    await addManagerTx.wait();
    dispatch(
      showAlert({
        message: "New Manager was successfully added on this estate",
        severity: "success",
      })
    );
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container_root}>
        <BackButton className={classes.backButton} />
        <div className={classes.bidCard}>
          <div className={classes.leftCard}>
            <div className={classes.imgContent}>
              <img
                src={TokenImg}
                className={classes.tokenImg}
                alt="token"
              ></img>
            </div>
          </div>
          <div className={classes.rightCard}>
            <div className={classes.title}>{t("Add New Manager")}</div>
            <div className={classes.subtitle}>
              {t("Your are not the owner of Roads.")}
            </div>
            <div className={classes.form_field}>
              <div className={classes.price_container}>
                <Grid container>
                  <Grid md={12} sm={12} xs={12} item>
                    <div className={classes.subheader_label}>
                      {t("RECEPIENT ADDRESS")}
                    </div>
                    <FormControl>
                      <StyledInput placeholder="0x" onChange={handleChange} />
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <p>&nbsp;</p>
            </div>
            {/* buttons */}
            <div className={classes.buttons}>
              {isCorrectAddress === true ? (
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={handleAdd}
                >
                  {t("Add")} &nbsp;
                  <img src={raiseicon} alt="raiseicon" />
                </ActionButton>
              ) : (
                <ActionButton
                  disabled
                  color="light"
                  className={classes.bidchange}
                >
                  {t("Add")} &nbsp;
                  <img src={raiseicon} alt="raiseicon" />
                </ActionButton>
              )}
              <ActionButton
                color="dark"
                className={classes.cancelchange}
                onClick={() => navigate(-1)}
              >
                {t("Cancel")}
              </ActionButton>
            </div>
          </div>
        </div>
        <div className={classes.updateManagerRoot}>
          <div className={classes.updateManagerTitle}>
            {t("Update Managers")}
          </div>
          {totalPage === 0 || uniqueManagers === undefined ? (
            <div className={classes.emptyDisplay}>
              {t("You haven't got any any managers on this estate")}...
            </div>
          ) : (
            <>
              <UpdateManagerTable
                columns={headerUpdateManagerData}
                rows={uniqueManagers}
                curPage={CurPage}
                onRowClick={handleRow}
              />
              <div className={classes.paginationContainer}>
                <TablePagination
                  handlepgnum={handlepgnum}
                  totalPage={totalPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingManager;
