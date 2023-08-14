import React, { useEffect } from "react";
import Tbs from './API/tabs'

import './styles/index.scss'

const instance = new Tbs({
  parentId: 'uvc-tabs',
  defaultActive: 2
})

const Tabs: React.FC = (props) => {
  useEffect(() => {
    instance.init()
  }, [])

  return (
    <div className="Tabs">
      <div id="uvc-tabs">
        <div className="uvc-tabs-actions" role="tablist">
          <button className="uvc-tabs-tab_action" role="tab" onClick={e => instance.toggle(e)}>
            <p>Tab #1</p>
          </button>

          <button className="uvc-tabs-tab_action" role="tab" onClick={e => instance.toggle(e)}>
            <p>Tab #2</p>
          </button>

          <button className="uvc-tabs-tab_action" role="tab" onClick={e => instance.toggle(e)}>
            <p>Tab #3</p>
          </button>
        </div>

        <div className="uvc-tabs-contents">
          <div className="uvc-tabs-tab_content" role="tabpanel">
            <p>Panel #1</p>
          </div>

          <div className="uvc-tabs-tab_content" role="tabpanel">
            <p>Panel #2</p>
          </div>

          <div className="uvc-tabs-tab_content" role="tabpanel">
            <p>Panel #3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;