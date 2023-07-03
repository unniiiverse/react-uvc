import React, { useEffect } from "react";
import popup from './API/popup'
import './API/styles/popup.scss'

const Popup: React.FC = (props) => {
  const instance = new popup({
    id: 'uvc-popup-dialog-0'
  });
  const instance1 = new popup({
    id: 'uvc-popup-dialog-1'
  });

  useEffect(() => {
    instance.init();

    instance.open();
    instance.supressUserControls = true;

    // instance1.init();
  }, [])

  return (
    <>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={e => instance.open()}>
        TRIGGER
      </button>
      {/* <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog-1" onClick={e => instance1.open()}>
        TRIGGER
      </button> */}

      <div className="uvc-popup-close" id="uvc-popup-layer" onClick={() => instance.close()}>
        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog-0">
          {/* DIALOG #0

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={() => instance.close(true)}>
            TRIGGER
          </button> */}
        </div>

        {/* <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog-1">
          DIALOG #1

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog-1" onClick={() => instance1.close()}>
            TRIGGER
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Popup;