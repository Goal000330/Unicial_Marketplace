import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands/Lands";
import Auction from "../../pages/Auction/Auction";
import MyStore from "../../pages/MyStore/MyStore";
import Contracts from "../../pages/Contracts/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";
import CreateEstates from "../../pages/MyStore/Estate/CreateEstate/CreateEstate";
import EstatesSelect from "../../pages/MyStore/Estate/EstateSelect/EstateSelect";
import EstateDetail from "../../pages/MyStore/Estate/EstateDetail/EstateDetail";
import EstateSell from "../../pages/MyStore/Estate/EstateSell/EstateSell";
import EstateTransfer from "../../pages/MyStore/Estate/EstateTransfer/EstateTransfer";
import Bid from "../../pages/Bid/Bid";
import Buy from "../../pages/Buy/Buy";
import NeedSignIn from "../../pages/NeedSignIn";
import SignIn from "../../pages/SignIn/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications";
import Spinner from "../Spinner";
import NetModal from "../NetModal";
import AdminLands from "../../pages/Admin/AdminLands/AdminLands";
import AdminEstate from "../../pages/Admin/AdminEstate/AdminEstate";
import ParcelSell from "../../pages/MyStore/Parcel/ParcelSell/ParcelSell";
import ParcelTransfer from "../../pages/MyStore/Parcel/ParcelTransfer/ParcelTransfer";
import Collectibles from "../../pages/Collectibles/Collectibles";
import OwnerDetail from "../../pages/OwnerDetail/OwnerDetail";
import ToLands from "./ToLands";
import ToSignIn from "./ToSignIn";
import ToNeedSignIn from "./ToNeedSignIn";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ParcelDetail from "../../pages/MyStore/Parcel/ParcelDetail/ParcelDetail";
import UpdateMetadata from "../../pages/MyStore/Estate/UpdateMetadata/UpdateMetadata";
import SettingManager from "../../pages/MyStore/Estate/SettingManager/SettingManager";
import UpdateOperate from "../../pages/MyStore/Estate/UpdateOperate/UpdateOperate";
import TransferSpaces from "../../pages/MyStore/Estate/TransferSpaces/TransferSpaces";
import SetSpaceOperator from "../../pages/MyStore/Estate/SetSpaceOperator/SetSpaceOperator";
import { setlogoutAddress } from "../../store/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CHAIN_INFO } from "../../config/constant";
import { showNetModal } from "../../store/netmodal";
import { useEffect } from "react";
import { setSaleParcels } from "../../store/saleparcels";
import { setSpaces } from "../../store/parcels";
import { setBidContractinfo } from "../../store/bidContractData";
import { showSpinner } from "../../store/spinner";
import SelectSpace from "../../pages/MyStore/Estate/UpdateLandData/SelectSpace/SelectSpace";
import UpdateLandData from "../../pages/MyStore/Estate/UpdateLandData/UpdateLandData";
import EstateEdit from "../../pages/MyStore/Estate/EstateAdd/EstateAdd";
import { setSaleEstates } from "../../store/saleestates";
import { getProvider } from "../../hooks/Common";
import { selectLoginAddress } from "./../../store/auth/selectors";
import BuilderScenes from "../../pages/Builder/BuilderScenes/BuilderScenes";
import BuilderCollections from "../../pages/Builder/BuilderCollections/BuilderCollections";
import BuilderLand from "../../pages/Builder/BuilderLand/BuilderLand";
import BuilderNames from "../../pages/Builder/BuilderNames/BuilderNames";
import ClaimName from "../../pages/Builder/BuilderNames/ClaimName/ClaimName";
import BuilderCollectionEdit from "../../pages/Builder/BuilderCollections/BuilderCollectionEdit/BuilderCollectionEdit";
import BuilderCollectionItemInfo from "../../pages/Builder/BuilderCollections/BuilderCollectionItemInfo/BuilderCollectionItemInfo";
import ScenePools from "../../pages/Builder/BuilderScenes/ScenePools/ScenePools";
import BuilderItemEditor from "../../pages/Builder/BuilderItemEditor/BuilderItemEditor";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
}));

declare var window: any;

export default function Layout() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const loginAddress = useAppSelector(selectLoginAddress);
  if (window.ethereum !== undefined) {
    window.ethereum.on("accountsChanged", function (account: Array<string>) {
      dispatch(setlogoutAddress());
    });

    window.ethereum.on("chainChanged", function (chainId: string) {
      let projectChainId = parseInt(CHAIN_INFO.TESTNET.chainId, 16);
      let changedChainId = parseInt(chainId, 16);
      if (changedChainId !== projectChainId) {
        dispatch(setlogoutAddress());
        dispatch(showNetModal(true));
      }
    });
  }

  const initSet = async () => {
    const provider = getProvider();
    const chainId = await provider.getNetwork();
    if (chainId.chainId !== 93) {
      dispatch(showNetModal(true));
      return;
    } else {
      dispatch(showNetModal(false));
    }

    await dispatch(showSpinner(true));
    let dispatchPromises = [];

    dispatchPromises.push(
      dispatch(setSaleParcels()),
      dispatch(setSaleEstates()),
      dispatch(setSpaces()),
      dispatch(setBidContractinfo())
    );
    await Promise.all(dispatchPromises);
    await dispatch(showSpinner(false));
  };

  useEffect(() => {
    initSet();
  }, [loginAddress]);

  return (
    <Router>
      <Box className={classes.root}>
        <Header />
        <Routes>
          <Route path="/" element={<MarketPlace />} />
          <Route path="/builder/builder_scenes" element={<BuilderScenes />} />
          <Route
            path="/builder/builder_scenes/pools"
            element={<ScenePools />}
          />
          <Route path="/builder/builder_land" element={<BuilderLand />} />
          <Route path="/builder/builder_names" element={<BuilderNames />} />
          <Route path="/builder/builder_claim_name" element={<ClaimName />} />
          <Route
            path="/builder/builder_collections"
            element={<BuilderCollections />}
          />
          <Route
            path="/builder/builder_collections/100"
            element={<BuilderCollectionEdit />}
          />
          <Route
            path="/builder/builder_items/200"
            element={<BuilderCollectionItemInfo />}
          />
          <Route
            path="/builder/builderItem-editor"
            element={<BuilderItemEditor />}
          />
          <Route path="/needsignin" element={<NeedSignIn />} />
          <Route path="/lands" element={<Lands />} />
          <Route path="/browse" element={<Collectibles />} />
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid"
            element={<Contracts />}
          />
          <Route path="/auction" element={<ToNeedSignIn />}>
            <Route path="/auction" element={<Auction />} />
          </Route>
          <Route path="/account/estate/createestate" element={<ToNeedSignIn />}>
            <Route
              path="/account/estate/createestate"
              element={<CreateEstates />}
            />
          </Route>
          <Route path="/account/estate/create" element={<ToNeedSignIn />}>
            <Route path="/account/estate/create" element={<EstatesSelect />} />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/bid"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:tokensid/bid"
              element={<Bid />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/buy"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:tokensid/buy"
              element={<Buy />}
            />
          </Route>
          <Route path="/admin/lands" element={<AdminLands />} />
          <Route path="/admin/estate" element={<AdminEstate />} />
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/sell"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:tokensid/sell"
              element={<ParcelSell />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/transfer"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:tokensid/transfer"
              element={<ParcelTransfer />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/parcel_detail"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:tokensid/parcel_detail"
              element={<ParcelDetail />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_sell"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_sell"
              element={<EstateSell />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_edit"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_edit"
              element={<EstateEdit />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_transfer"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_transfer"
              element={<EstateTransfer />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_detail"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_detail"
              element={<EstateDetail />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_updatemetadata"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_updatemetadata"
              element={<UpdateMetadata />}
            />
          </Route>
          <Route
            path="/account/estate/setting_manager"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/account/estate/setting_manager"
              element={<SettingManager />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/estate_updateoperate"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/estate_updateoperate"
              element={<UpdateOperate />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/transfer_spaces"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/transfer_spaces"
              element={<TransferSpaces />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/set_spaceOperator"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/set_spaceOperator"
              element={<SetSpaceOperator />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/selectSpace_forUpdatelanddata"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/selectSpace_forUpdatelanddata"
              element={<SelectSpace />}
            />
          </Route>
          <Route
            path="/contracts/:contractaddress/tokens/:estateid/UpdateLandData"
            element={<ToNeedSignIn />}
          >
            <Route
              path="/contracts/:contractaddress/tokens/:estateid/UpdateLandData"
              element={<UpdateLandData />}
            />
          </Route>
          <Route path="/signin" element={<ToLands />}>
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route path="/account" element={<ToSignIn />}>
            <Route path="/account" element={<MyStore />} />
          </Route>
          <Route path="/accounts/:owneraddress" element={<OwnerDetail />} />
        </Routes>
        <Footer />
        <Notification />
        <NetModal />
        <Spinner />
      </Box>
    </Router>
  );
}
