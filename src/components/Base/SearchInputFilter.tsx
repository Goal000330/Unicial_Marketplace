import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import search_svg from "./../../assets/svg/search.svg";
import { useLocation, useNavigate } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfilter: {
      display: "flex",
      width: "175px",
    },
    searchIcon: {
      marginRight: "10px",
    },
    searchinput: {
      fontSize: "14px",
      color: "white",
      backgroundPositionY: "4px",
      lineHeight: "17px",
      background: "none",
      fontWeight: 400,
      border: "none",
      borderRadius: "6px",
      padding: "6px 6px 2px 0px",
      outline: "none",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "8px",
      overflow: "visible",
    },
  })
);

export default function SearchInputFilter() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  let searchInput1: any = query.get("search");

  const handleRoute = (search: string) => {
    query.set("search", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const handleChange = (e: any) => {
    handleRoute(e.target.value);
  };

  return (
    <>
      <div className={classes.textfilter}>
        <img src={search_svg} className={classes.searchIcon} alt="symbol" />
        <input
          className={classes.searchinput}
          onChange={handleChange}
          placeholder="Search"
          value={searchInput1}
        />
      </div>
    </>
  );
}
