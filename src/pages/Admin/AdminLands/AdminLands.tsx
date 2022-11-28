import React, { useState, useEffect } from "react";
import AdminTopTab from "../../../components/Admin/AdminTopTab/AdminTopTab";
import LandAccordion from "./LandAccordion/LandAccordion";
import LandMap from "../../../components/Admin/LandMap";
import { BackButton } from "../../../components/BackButton/BackButton";
import { AdminLandsStyle } from "./AdminLandsStyle";
import FormControl from "@material-ui/core/FormControl";
import {
  useStyles,
  StyledInput,
} from "./../../MyStore/Estate/CreateEstate/CreateEstateStyle";
import ActionButton from "../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../config/contracts/SpaceRegistryContract";
// import utility functions
import {
  generateContractInstance,
  generateSigner,
} from "../../../common/contract";

declare var window: any;
var signer: any, spaceRegistryContract: any;

export default function AdminLands() {
  const classes = AdminLandsStyle();
  const [width, setWidth] = useState(0);

  signer = generateSigner(window.ethereum);

  spaceRegistryContract = generateContractInstance(
    SpaceProxyAddress,
    SpaceRegistryAbi,
    signer
  );

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(945);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(820);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(600);
    } else if (window.innerWidth <= 770 && window.innerWidth >= 500) {
      setWidth(420);
    } else {
      setWidth(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleSetEstateProxy = async () => {
    let setEstateTx = await spaceRegistryContract.setEstateRegistry(
      EstateProxyAddress
    );
    await setEstateTx.wait();
  };
  return (
    <>
      <AdminTopTab />
      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <BackButton className={classes.backBtnPosition} />
          <LandAccordion />
        </div>
        <FormControl className={classes.widthFull}>
          <StyledInput
            placeholder="Address"
            // onChange={(e) => handleBeneficiaryChange(e)}
            value={EstateProxyAddress}
            disabled
          />
        </FormControl>
        <ActionButton
          color="light"
          className={classes.bidchange}
          onClick={handleSetEstateProxy}
        >
          Set EstateProxy
          <CallMadeIcon fontSize="small" />
        </ActionButton>
      </div>
    </>
  );
}
