import { Props } from "./Coordinate.types";
import styles from "./Coordinate.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Coordinate = (props: Props) => {
  const { x, y, className } = props;

  return (
    <div className={className}>
      <LocationOnIcon className={styles.pin} />
      {`${x}, ${y} `}
    </div>
  );
};

export default Coordinate;
