import { useStyles } from "./UpdateManagerTableStyle";
import StageMarket from "../../../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import ActionButton from "../../../../../components/Base/ActionButton";
import { onePageCount } from "../../../../../config/constant";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { showMoreCount } from "../../../../../config/constant";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { showAlert } from "../../../../../store/alert";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../../common/contract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../../../../config/contracts/EstateRegitryContract";

import { selectLoginAddress } from ".././../../../../store/auth/selectors";
import { StyledTooltip } from "../../../../../components/Mystore/LandCard/LandCardStyle";
declare var window: any;
var signer: any, estateRegistryContractwithSigner: any;

interface StagingTableProps {
  columns?: any;
  rows?: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number): any;
}

const UpdateManagerTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
  onRowClick,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  signer = generateSigner(window.ethereum);

  const loginAddress = useAppSelector(selectLoginAddress);

  const handleCancel = async (loginAddress: string, managerAddress: string) => {
    estateRegistryContractwithSigner = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let cancelManagerTx =
      await estateRegistryContractwithSigner.setUpdateManager(
        loginAddress,
        managerAddress,
        false
      );
    await cancelManagerTx.wait();
    dispatch(
      showAlert({
        message: "Successfully canceled.",
        severity: "success",
      })
    );
  };
  const handleAccept = async (loginAddress: string, managerAddress: string) => {
    estateRegistryContractwithSigner = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let acceptManagerTx =
      await estateRegistryContractwithSigner.setUpdateManager(
        loginAddress,
        managerAddress,
        true
      );
    await acceptManagerTx.wait();
    dispatch(
      showAlert({
        message: "Successfully accepted as a manager.",
        severity: "success",
      })
    );
  };

  const tableRows =
    rows !== undefined ? (
      rows
        .slice((curPage - 1) * onePageCount, curPage * onePageCount)
        .map((row: any, key: any) => (
          <TableRow
            key={key}
            onClick={() => onRowClick(key)}
            className={clsx({ [classes.targetRow]: stepIndex === key })}
          >
            <TableCell className={clsx(classes.tableCell, classes.tokenId)}>
              <StyledTooltip
                title={row.args[1]}
                interactive
                arrow
                placement="top"
              >
                <span>{row.args[1].slice(0, 15) + ".."}</span>
              </StyledTooltip>
            </TableCell>

            <TableCell className={clsx(classes.tableCell)}>
              {row.args[3] === false ? "UNSETTED" : "SETTED"}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {row.args[3] === true ? (
                <ActionButton
                  color="dark"
                  className={classes.actionBtn}
                  onClick={() => handleCancel(row.args[0], row.args[1])}
                >
                  {t("Cancel")}
                </ActionButton>
              ) : (
                <ActionButton
                  color="light"
                  className={classes.actionBtn}
                  onClick={() => handleAccept(row.args[0], row.args[1])}
                >
                  {t("Accept")}
                </ActionButton>
              )}
            </TableCell>
          </TableRow>
        ))
    ) : (
      <></>
    );
  return (
    <>
      <StageMarket columns={columns} parcelRows={tableRows} />
    </>
  );
};

export default UpdateManagerTable;
