import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: "1px solid #373F66",
    boxSizing: "border-box",
    borderRadius: "100px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 15px 15px 20px",
    position: "relative",
  },
  rootIncludePoiner: {
    border: "1px solid #373F66",
    boxSizing: "border-box",
    borderRadius: "100px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 15px 15px 20px",
    position: "relative",
    cursor: "pointer",
  },
  inputAdor: {
    fontSize: "16px",
    color: "#96A1DB",
    fontFamily: "Lato",
    fontStyle: "Regular",
    lineHeight: "20px",
    minWidth: "90px",
    fontWeight: 400,
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "right",
    color: "#FFFFFF",
  },
  widthFull: {
    width: "100%",
  },
  dropdownRoot: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "right",
    color: "#FFFFFF",
    "& i": {
      marginLeft: "9px",
      color: "#FFFFFF40",
    },
  },
  listPanel: {
    background: "#1A1F37",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "15px",
    padding: "7px 23px 7px 19px",
    position: "absolute",
    right: 0,
    top: "55px",
    zIndex: 30,
  },
  listItem: {
    padding: "15px 0px",
    color: "#70708F",
    "&:hover": {
      color: "#ffffff",
    },
  },
  focusListItem: {
    padding: "15px 0px",
    color: "#ffffff",
  },
  displayNone: {
    display: "none",
  },
}));

interface PropertiesInputProps {
  type?: string;
  name: string;
  item?: any;
  className?: any;
  defaultInputValue: string;
}

const PropertiesInput = ({
  name,
  type,
  item,
  className,
  defaultInputValue,
}: PropertiesInputProps) => {
  const classes = useStyles();
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [itemValue, setItemValue] = useState<string>(defaultInputValue);
  const [inputValue, setInputValue] = useState<string>(defaultInputValue);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (divRef && divRef.current) {
        const ref: any = divRef.current;
        if (!ref.contains(e.target)) {
          setDropdownStatus(false);
        }
      }
    }
  }, [divRef]);

  const handleDropdown = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const handleListClick = (e: any) => {
    setItemValue(e);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div
        className={clsx(
          type === "dropdown" ? classes.rootIncludePoiner : classes.root,
          className
        )}
        onClick={type === "dropdown" ? handleDropdown : () => {}}
        ref={divRef}>
        <div className={classes.inputAdor}>{name}</div>
        {type === "dropdown" ? (
          <div className={classes.dropdownRoot}>
            {itemValue}
            <i className='fas fa-caret-down'></i>
          </div>
        ) : (
          <input
            className={classes.input}
            value={inputValue}
            onChange={(e) => handleChange(e)}></input>
        )}
        <div
          className={dropdownStatus ? classes.listPanel : classes.displayNone}>
          {item?.map((val: any, key: any) => {
            return (
              <div
                key={key}
                className={
                  val === itemValue ? classes.focusListItem : classes.listItem
                }
                onClick={(e) => handleListClick(val)}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PropertiesInput;
