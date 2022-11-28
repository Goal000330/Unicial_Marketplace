import { Button, withStyles } from "@material-ui/core";
import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import book_svg from "../../assets/svg/book.svg";
import location_svg from "../../assets/svg/location.svg";

export const StyledTableButton = withStyles({
  root: {
    backgroundColor: "#333b67",
    borderRadius: "100px 0px 0px 100px",
    padding: "7px 11px",
    minWidth: "35px",
    width: "38px",
    height: "30px",
    "&.Mui-disabled": {
      backgroundColor: "#282E4E !important",
      "& svg": {
        fill: "red",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#333b67",
    },
  },
})(Button);

export const StyledLocationButton = withStyles({
  root: {
    backgroundColor: "#333b67",
    borderRadius: "0px 100px 100px 0px",
    padding: "7px 11px",
    minWidth: "35px",
    width: "38px",
    height: "30px",
    "&.Mui-disabled": {
      backgroundColor: "#282E4E !important",
      "& svg": {
        fill: "#ff2d55",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#333b67",
    },
  },
})(Button);

export default function LandFilterBtns() {
  const [filter_index, setFilterIndex] = React.useState(1);
  const navigate = useNavigate();
  const handleBtn = (index: number) => {
    setFilterIndex(index);
  };
  useEffect(()=> {
    filter_index === 2 && navigate("/lands")
  },[filter_index])
  return (
    <>
      <StyledTableButton
        disabled={filter_index === 1}
        onClick={() => handleBtn(1)}
        disableRipple={true}
      >
        <img src={book_svg} />
      </StyledTableButton>

      <StyledLocationButton
        disabled={filter_index === 2}
        onClick={() => handleBtn(2)}
        disableRipple={true}
      >
        <img src={location_svg} />
      </StyledLocationButton>
    </>
  );
}
