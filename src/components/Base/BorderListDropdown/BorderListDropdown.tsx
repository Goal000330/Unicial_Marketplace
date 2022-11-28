import React, { useState } from "react";
import { Box } from "@material-ui/core";
import {
  BorderListDropdownStyle,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./BorderListDropdownStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";

interface BorderListDropdownProps {
  className?: any;
  data: any;
}

export default function BorderListDropdown({
  className,
  data,
}: BorderListDropdownProps) {
  const classes = BorderListDropdownStyle();
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const [showIcon, setShowIcon] = useState(false);
  const [itemContent, setitemContent] = React.useState(data[0].content);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
  };

  const handleItem = (index: number) => {
    setShowIcon(true);
    setitemContent(data[index - 1].content);
    handleClose();
  };

  const handleIconClick = () => {
    setShowIcon(false);
    setitemContent(data[0].content);
    handleClose();
  };

  return (
    <>
      {/* network select start */}
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.listDropdown}
      >
        <Box className={classes.listRoot}>
          <Box className={classes.listContainer}>
            <Box className={classes.mainlistLabel}>{itemContent}</Box>
            <IconButton
              onClick={handleOpen}
              className={
                showIcon === false ? classes.moreIcon : classes.displayNone
              }
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton
              onClick={handleIconClick}
              className={
                showIcon === false ? classes.displayNone : classes.cancelIcon
              }
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <StyledCollectionPopover
        id="simple-menu"
        anchorEl={anchorNetwork}
        keepMounted
        open={Boolean(anchorNetwork)}
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
        {data.map((item: any, index: any) => (
          <StyledMenuItem
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
      </StyledCollectionPopover>
    </>
  );
}
