import { FormControlLabel, Switch } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    OnSaleSwicthRoot: {
      "& .MuiSwitch-thumb": {
        width: "12px",
        height: "12px",
        marginTop: "3px",
        marginLeft: "3px",
      },
    },
    switch: {
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(to right, #7F64E2, #41A6EF)",
      },
      "& .MuiSwitch-root": {
        padding: "12.5px 12px",
        marginTop: "1px",
      },
    },
    activeSwitch: {
      "& .MuiTypography-root": {
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      },
    },
  })
);
const StyledFormControlLabel = withStyles({
  label: {
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient(to right, #7F64E2, #41A6EF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(FormControlLabel);
const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#333b67",

    "&$checked": {
      color: "#ff7c4c",
    },
    "&$checked + $track": {
      backgroundColor: "#333B67",
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
interface Props {
  letter: string;
  className?: any;
}

export default function OnSaleSwitch({ letter, className }: Props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [switchStatus, setSwitchStatus] = React.useState(false);

  const query = new URLSearchParams(location.search);

  const handleRoute = (search: string) => {
    query.set("onlyOnSale", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };
  useEffect(() => {
    const category = query.get("onlyOnSale");
    if (category === "false" || category === null) {
      setSwitchStatus(false);
    } else {
      setSwitchStatus(true);
    }
  }, [location]);

  const handleChange = () => {
    handleRoute((!switchStatus).toString());
    setSwitchStatus(!switchStatus);
  };

  return (
    <div className={clsx(classes.OnSaleSwicthRoot, className)}>
      <StyledFormControlLabel
        control={
          <PurpleSwitch
            checked={switchStatus}
            onChange={handleChange}
            name='checkedA'
            disableRipple={true}
          />
        }
        label={letter}
        className={clsx(classes.switch, {
          [classes.activeSwitch]: switchStatus,
        })}
      />
    </div>
  );
}
