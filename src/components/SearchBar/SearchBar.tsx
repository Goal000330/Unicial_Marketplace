import React from "react";
import {
  SearchBarStyle,
  StyledFormControlLabel,
  StyledTableButton,
  StyledLocationButton,
  StyledTableChartIcon,
  StyledLocationOnIcon,
} from "./SearchBarStyle";
import { searchbarBtn } from "../../config/constant";
import filter_svg from "./../../assets/svg/filter.svg";
import search_svg from "./../../assets/svg/search.svg";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#ff2d55",
    "&$checked": {
      color: "#ff2d55",
    },
    "&$checked + $track": {
      backgroundColor: "#ff2d55",
    },
    "&.Mui-checked:hover": {
      backgroundColor: "unset",
    },
    "&.MuiIconButton-root:hover": {
      backgroundColor: "unset",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function SearchBar() {
  const classes = SearchBarStyle();
  const {t, i18n} = useTranslation();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [filter_index, setFilterIndex] = React.useState(1);
  const handletable = () => {
    setFilterIndex(1);
  };
  const handlelocation = () => {
    setFilterIndex(2);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nftfillter}>
            <div className={classes.topbar}>
              <div className={classes.textfilter}>
                <img
                  src={search_svg}
                  className={classes.searchIcon}
                  alt="symbol"
                />
                <input
                  className={classes.searchinput}
                  placeholder="Search land..."
                />
              </div>
              <div className={classes.topbarFilter}>
                <StyledFormControlLabel
                  control={
                    <PurpleSwitch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      disableRipple={true}
                    />
                  }
                  label="ON SALE"
                />
              </div>
              <div className={classes.openfilter}>
                <div className={classes.openfilterLabel}>{t("FILTER")}</div>
                <img
                  src={filter_svg}
                  className={classes.filterIcon}
                  alt="symbol"
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <StyledTableButton
                  disabled={filter_index === searchbarBtn.tableBtn}
                  onClick={handletable}
                  disableRipple={true}
                >
                  <StyledTableChartIcon />
                </StyledTableButton>

                <StyledLocationButton
                  disabled={filter_index === searchbarBtn.locationBtn}
                  onClick={handlelocation}
                  disableRipple={true}
                >
                  <StyledLocationOnIcon />
                </StyledLocationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
