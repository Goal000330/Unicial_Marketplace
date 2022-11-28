import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { Box } from "@material-ui/core";
import {
  GeneralListDropdownStyle,
  StyledListPopover,
  StyledMenuItem,
} from "./GeneralListDropdownStyle";
import clsx from "clsx";

export default function GeneralListDropdown(props: any) {
  const classes = GeneralListDropdownStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [itemContent, setitemContent] = React.useState(props.data[0].content);

  const handleItem = (index: number) => {
    setitemContent(props.data[index - 1].content);
    handleRoute(props.data[index - 1].smallContent);
    handleClose();
  };

  const handleRoute = (search: string) => {
    query.set("sortBy", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    const sortBy = query.get("sortBy");

    if (sortBy === "" || sortBy === null) {
      setitemContent(props.data[0].content);
    } else {
      switch (query.get("sortBy")) {
        case "recently_sold":
          setitemContent("Recently sold");
          break;
        case "newest":
          setitemContent("Newest");
          break;
        case "name":
          setitemContent("Name");
          break;
      }
    }
  }, [location]);

  return (
    <>
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Box className={classes.listRoot}>
          <Box className={clsx(classes.listContainer, props.className)}>
            <Box className={classes.gradientlistLabel}>{itemContent}</Box>
            <div className={classes.filterDownArrow}>
              <i className="far fa-chevron-down"></i>
            </div>
          </Box>
        </Box>
      </Box>
      <StyledListPopover
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {props.data.map((item: any, index: any) => (
          <StyledMenuItem
            disableRipple
            onClick={() => handleItem(item.index)}
            key={index}
            className={classes.menuItem}
          >
            <Box className={classes.listContainer}>
              <Box
                className={clsx(classes.listLabel, {
                  [classes.activeLabel]: itemContent === item.content,
                })}
              >
                {item.content}
              </Box>
            </Box>
          </StyledMenuItem>
        ))}
      </StyledListPopover>
    </>
  );
}
