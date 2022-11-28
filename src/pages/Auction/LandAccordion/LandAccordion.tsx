import React, { useState, useEffect } from "react";
import ActionButton from "../../../components/Base/ActionButton";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  LandAccordionStyle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledInput,
} from "./LandAccordionStyle";
import { useAppDispatch } from "../../../store/hooks";
import { getparcels } from "../../../store/selectedparcels";
import { fetchTiles } from "../../../hooks/tiles";
import { Tile } from "../../../components/Atlas/Atlas.types";
import { useTranslation } from "react-i18next";
import { getCoords } from "../../../common/utils";

export default function LandAccordion() {
  const classes = LandAccordionStyle();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [x1, setx1] = useState<number>(0);
  const [x2, setx2] = useState<number>(0);
  const [y1, sety1] = useState<number>(0);
  const [y2, sety2] = useState<number>(0);
  const [xy, setxy] = useState<string>();
  const [tiles, setTiles] = useState();
  const [countArea, setCountArea] = useState(0);
  const [countMulti, setCountMulti] = useState(0);
  const dispatch = useAppDispatch();

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const inputx1 = (data: string) => {
    setx1(Number(data));
  };

  const inputx2 = (data: string) => {
    setx2(Number(data));
  };

  const inputy1 = (data: string) => {
    sety1(Number(data));
  };

  const inputy2 = (data: string) => {
    sety2(Number(data));
  };

  const inputxy = (data: string) => {
    setxy(data);
  };

  const showmapArea = () => {
    let newSelectedTile: string[] = [];
    let minx,
      miny,
      maxx,
      maxy,
      count = 0;

    maxx = x1 >= x2 ? x1 : x2;
    minx = x1 >= x2 ? x2 : x1;
    maxy = y1 >= y2 ? y1 : y2;
    miny = y1 >= y2 ? y2 : y1;

    if (maxx === 0 && minx === 0 && maxy === 0 && miny === 0) return;
    for (let x = minx; x <= maxx; x++) {
      for (let y = miny; y <= maxy; y++) {
        const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
        if (tile.owner) {
        } else {
          newSelectedTile.push(getCoords(x, y));
          count++;
        }
      }
    }

    setCountArea(count);
    dispatch(getparcels(newSelectedTile));
  };

  const showmapMultiland = () => {
    let newSelectedTile: string[] = [];
    let count = 0;
    const content_str = xy
      ?.replace("[", "")
      .replace("]", "")
      .slice(1, -1)
      .split('","');
    content_str?.forEach((str) => {
      const tile: any = tiles && (tiles[str] as Tile);
      try {
        if (!tile.owner) {
          newSelectedTile.push(str);
          count++;
        }
      } catch (error) {
        return;
      }
    });
    setCountMulti(count);
    // console.log("accordion", newSelectedTile);
    dispatch(getparcels(newSelectedTile));
  };

  useEffect(() => {
    if (window) {
      fetchTiles().then((_tiles: any) => setTiles(_tiles));
    }
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={classes.title}>
                {t("Select AreaLands")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <div className={classes.areaLandDetailRoot}>
                <div className={classes.cards}>
                  <div className={classes.card}>
                    <div>
                      <FormControl>
                        <StyledInput
                          placeholder="0"
                          onChange={(e) => inputx1(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <span>{t("x1")}</span>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <StyledInput
                          placeholder="0"
                          onChange={(e) => inputy1(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <span>{t("y1")}</span>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.card}>
                    <div>
                      <FormControl>
                        <StyledInput
                          placeholder="0"
                          id="input-with-icon-adornment"
                          onChange={(e) => inputx2(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <span>{t("x2")}</span>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <StyledInput
                          placeholder="0"
                          id="input-with-icon-adornment"
                          onChange={(e) => inputy2(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <span>{t("y2")}</span>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className={classes.selectedLandContainer}>
                  <ActionButton
                    color="dark"
                    onClick={showmapArea}
                    className={classes.showmapBtn}
                  >
                    {t("Show Map")}
                  </ActionButton>
                  <div className={classes.selectedLandLabelContainer}>
                    <div className={classes.selectedLandLabel}>
                      {t("Selected Lands")}:
                    </div>
                    <div className={classes.selectedLandResult}>
                      {countArea}
                    </div>
                  </div>
                </div>
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className={classes.secondAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className={classes.title}>
                {t("Select Multiple Lands")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <div className={classes.areaLandDetailRoot}>
                <div className={classes.inputLands}>
                  <FormControl>
                    <StyledInput
                      id="input-with-icon-adornment"
                      onChange={(e) => inputxy(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">
                          <span>[ " X1 , Y1 ", " X2 , Y2 " ]</span>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className={classes.selectedLandContainer}>
                  <ActionButton
                    color="dark"
                    onClick={showmapMultiland}
                    className={classes.showmapBtn}
                  >
                    {t("Show Map")}
                  </ActionButton>
                  <div className={classes.selectedLandLabelContainer}>
                    <div className={classes.selectedLandLabel}>
                      {t("Selected Lands")}:
                    </div>
                    <div className={classes.selectedLandResult}>
                      {countMulti}
                    </div>
                  </div>
                </div>
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>
        </div>
      </div>
    </>
  );
}
