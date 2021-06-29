import { Fragment } from "react";
import cc from "classnames";
import "./index.scss";

const OverlayLayer = (props: any) => {
  const { isShow, children } = props;

  return (
    <Fragment>
      <div
        className={cc("overlay-layer", {
          show: isShow,
        })}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default OverlayLayer;
