import { useNavigate } from "react-router";
import { useStyles } from "./BackButtonStyle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface BackButtonProps {
  className?: any;
}

export const BackButton = ({ className }: BackButtonProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <span
      className={clsx(classes.backBtn, className)}
      onClick={() => navigate(-1)}
    >
      <i className={clsx("fas fa-arrow-up", classes.revertIcon)}></i>
      {t("Back")}
    </span>
  );
};
