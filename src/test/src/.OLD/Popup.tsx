import React, { useEffect } from "react";
import { Popup } from "./Core";

import './styles/Basic.scss'

const PopupC: React.FC = (props) => {
  const PopupInstance1 = new Popup({ connector: 'uvc-popup-connector--0' });
  const PopupInstance2 = new Popup({ connector: 'uvc-popup-connector--1' });

  useEffect(() => {
    PopupInstance1.init();
    PopupInstance2.init();
  }, [])

  return (
    <div className="Popup">
      <button className="uvc-popup-trigger uvc-popup-connector--0" onClick={e => PopupInstance1.call(e)}>
        TRIGGER
      </button>
      <button className="uvc-popup-trigger uvc-popup-connector--1" onClick={e => PopupInstance2.call(e)}>
        TRIGGER
      </button>

      <div className="uvc-popup-layer uvc-popup-close" onClick={() => PopupInstance1.close()}>
        <div className="uvc-popup-dialog uvc-popup-connector--0">
          <div className="uvc-popup-dialog_wrapper">
            content #1
            <button className="uvc-popup-close" onClick={() => PopupInstance1.close()}>
              CLOSE
            </button>
          </div>
        </div>
        <div className="uvc-popup-dialog uvc-popup-connector--1">
          <div className="uvc-popup-dialog_wrapper">
            content #2
            <button className="uvc-popup-close" onClick={() => PopupInstance1.close()}>
              CLOSE
            </button>
          </div>
        </div>
      </div>

      <button tabIndex={2}>fsd</button>
    </div>
  );
}

export default PopupC;