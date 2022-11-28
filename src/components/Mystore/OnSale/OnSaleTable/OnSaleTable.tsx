import { useStyles } from "./OnSaleTableStyle";
import StageMarket from "../../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  MarketplaceAbi,
  MarketplaceAddress,
} from "../../../../config/contracts/MarketPlaceContract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";
import { BigNumber, ethers } from "ethers";
import { showAlert } from "../../../../store/alert";
import { useAppDispatch } from "../../../../store/hooks";
import { StyledTooltip } from "../../LandCard/LandCardStyle";

declare var window: any;
interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
}
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const OnSaleTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const tableRows =
    rows !== undefined ? (
      rows.slice((curPage - 1) * 2, curPage * 2).map((row: any, key: any) => {
        let type = "";
        if (row.tokenAddress === SpaceProxyAddress) {
          type = "Parcel";
        } else {
          type = "Estate";
        }
        let tokenId = row?.tokenId.slice(0, 5) + "..";
        let price = ethers.utils.formatUnits(row?.price, 18);

        const handleParcelCancel = async (tokenAddress: any, tokenId: any) => {
          signer = generateSigner(window.ethereum);
          marketplaceContract = generateContractInstance(
            MarketplaceAddress,
            MarketplaceAbi,
            signer
          );
          spaceRegistryContract = generateContractInstance(
            SpaceProxyAddress,
            SpaceRegistryAbi,
            signer
          );
          // check if this token is approved for marketplace contract
          let cancelOrderTx = await marketplaceContract.cancelOrder(
            tokenAddress,
            BigNumber.from(tokenId)
          );
          await cancelOrderTx.wait();
          dispatch(
            showAlert({
              message: "Sales order cancel is successfully published.",
              severity: "success",
            })
          );
          // window.location.href = "/account?section=parcels";
          window.location.reload();
        };

        const handleEstateCancel = async (tokenAddress: any, tokenId: any) => {
          signer = generateSigner(window.ethereum);
          marketplaceContract = generateContractInstance(
            MarketplaceAddress,
            MarketplaceAbi,
            signer
          );
          // check if this token is approved for marketplace contract
          let cancelOrderTx = await marketplaceContract.cancelOrder(
            tokenAddress,
            BigNumber.from(tokenId)
          );
          await cancelOrderTx.wait();
          dispatch(
            showAlert({
              message: "Sales order cancel is successfully published.",
              severity: "success",
            })
          );
          // window.location.href = "/account?section=estates";
          window.location.reload();
        };

        return (
          <TableRow
            key={key}
            className={clsx({ [classes.targetRow]: stepIndex === key })}
          >
            <TableCell className={clsx(classes.tableCell)}>{type}</TableCell>

            <TableCell className={clsx(classes.tableCell)}>
              <StyledTooltip
                title={row.tokenId}
                interactive
                arrow
                placement="top"
              >
                <span>{tokenId}</span>
              </StyledTooltip>
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {<img src={normalshapeSvg} className={classes.normalshape} />}
              {<div>{Number(price)}</div>}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {type === "Parcel" ? (
                <ActionButton
                  color="dark"
                  className={classes.actionBtn}
                  onClick={() =>
                    handleParcelCancel(row.tokenAddress, row.tokenId)
                  }
                >
                  {t("Cancel")}
                </ActionButton>
              ) : (
                <ActionButton
                  color="dark"
                  className={classes.actionBtn}
                  onClick={() =>
                    handleEstateCancel(row.tokenAddress, row.tokenId)
                  }
                >
                  {t("Cancel")}
                </ActionButton>
              )}
            </TableCell>
          </TableRow>
        );
      })
    ) : (
      <></>
    );
  return (
    <>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default OnSaleTable;
