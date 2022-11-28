import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: "1px solid #373F66",
    boxSizing: "border-box",
    borderRadius: "15px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    minHeight: "44px",
    justifyContent: "space-between",
    padding: "5px 15px 5px 20px",
    position: "relative",
  },
  rootIncludePoiner: {
    border: "1px solid #373F66",
    boxSizing: "border-box",
    borderRadius: "15px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    minHeight: "44px",
    justifyContent: "space-between",
    padding: "5px 15px 5px 20px",
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
    width: "100px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    marginLeft: "5px",
  },
  widthFull: {
    width: "100%",
  },
  dropdownRoot: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    width: "100%",
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
  categoryRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    flexWrap: "wrap",
  },
  categoryItem: {
    padding: "5px 10px",
    margin: "2px",
    border: "solid 1px #96A1DB",
    background: "#21263F",
    borderRadius: "15px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    "& i": {
      marginLeft: "5px",
      color: "#ffffff",
      cursor: "pointer",
    },
  },
  displayNone: {
    display: "none",
  },
  justifyContentLeft: {
    justifyContent: "left",
  },
}));

interface PropertiesCategoryProps {
  type?: string;
  name: string;
  item?: any;
  className?: any;
  defaultInputValue: string;
}

const PropertiesCategory = ({
  name,
  type,
  item,
  className,
  defaultInputValue,
}: PropertiesCategoryProps) => {
  const classes = useStyles();
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [categoryItems, setCategoryItems] = useState<any>();
  const [categoryInputItems, setCategoryInputItems] = useState<any>();
  const [inputValue, setInputValue] = useState("");

  const handleListClick = (e: string) => {
    let newItem: string[] = [];
    if (categoryItems === undefined || categoryItems?.length === 0) {
      newItem.push(e);
    } else {
      if (categoryItems.includes(e)) {
        newItem = newItem.concat(categoryItems);
      } else {
        newItem = newItem.concat(categoryItems, e);
      }
    }
    const indexItem = item?.indexOf(e, 0);
    item.splice(indexItem, 1);
    setCategoryItems(newItem);
  };

  const handleClose = (e: string) => {
    let selectedItem: string[] = [];
    const selectedIndex = categoryItems.indexOf(e, 0);
    selectedItem = selectedItem.concat(
      categoryItems.slice(0, selectedIndex),
      categoryItems.slice(selectedIndex + 1)
    );
    setCategoryItems(selectedItem);
    item.push(e);
  };

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
    if (item?.length === 0 || item === undefined) {
      setDropdownStatus(false);
    } else {
      setDropdownStatus(!dropdownStatus);
    }
  };

  const handleEnterChange = (e: any) => {
    let newInputItem: string[] = [];
    if (categoryInputItems === undefined || categoryInputItems?.length === 0) {
      newInputItem.push(e.target.value);
    } else {
      if (categoryInputItems.includes(e.target.value)) {
        newInputItem = newInputItem.concat(categoryInputItems);
      } else {
        newInputItem = newInputItem.concat(categoryInputItems, e.target.value);
      }
    }
    setCategoryInputItems(newInputItem);
    setInputValue("");
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputClose = (e: string) => {
    let selectedItem: string[] = [];
    const selectedIndex = categoryInputItems.indexOf(e, 0);
    selectedItem = selectedItem.concat(
      categoryInputItems.slice(0, selectedIndex),
      categoryInputItems.slice(selectedIndex + 1)
    );
    setCategoryInputItems(selectedItem);
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
        <div
          className={
            type === "dropdown" ? classes.inputAdor : classes.displayNone
          }>
          {name}
        </div>
        {type === "dropdown" ? (
          <div className={classes.dropdownRoot}>
            {categoryItems === undefined ? defaultInputValue : ""}
            <div
              className={
                categoryItems !== undefined
                  ? classes.categoryRoot
                  : classes.displayNone
              }>
              {categoryItems?.map((val: any, key: any) => {
                return (
                  <div key={key} className={classes.categoryItem}>
                    {val}{" "}
                    <i
                      className='fas fa-times'
                      onClick={(e) => handleClose(val)}></i>
                  </div>
                );
              })}
            </div>
            <i className='fas fa-caret-down'></i>
          </div>
        ) : (
          <>
            <div
              className={clsx(
                classes.categoryRoot,
                classes.justifyContentLeft
              )}>
              {categoryInputItems?.map((val: any, key: any) => {
                return (
                  <div key={key} className={classes.categoryItem}>
                    {val}{" "}
                    <i
                      className='fas fa-times'
                      onClick={(e) => handleInputClose(val)}></i>
                  </div>
                );
              })}
              <input
                className={classes.input}
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleEnterChange(e)
                }></input>
            </div>
          </>
        )}
        <div
          className={dropdownStatus ? classes.listPanel : classes.displayNone}>
          {item?.map((val: any, key: any) => {
            return (
              <div
                key={key}
                className={classes.listItem}
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

export default PropertiesCategory;
