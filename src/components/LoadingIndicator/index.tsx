import OverlayLayer from "../OverlayLayer";
import { Spinner } from "react-bootstrap";
import "./index.scss";

const LoadingIndicator = () => {
  return (
    <OverlayLayer isShow>
      <Spinner animation="border" className={"spinner"} />
    </OverlayLayer>
  );
};

export default LoadingIndicator;
