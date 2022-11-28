import { useNavigate } from "react-router";
import { useStyles } from "./ShowMoreLessBtnStyle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Props {
  letter: string;
  className?: any;
  onClick?: () => void;
}

export const ShowMoreLessBtn = ({ letter, className, onClick }: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <span className={clsx(classes.backBtn, className)} onClick={onClick}>
      <i className={clsx("fas fa-arrow-up", classes.revertIcon)}></i>
      {letter}
    </span>
  );
};
