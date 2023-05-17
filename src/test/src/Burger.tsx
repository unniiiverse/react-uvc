import React, { useEffect } from "react";
import burger from './API/burger';
import './API/styles/burger.scss'

const Burger: React.FC = (props) => {
  const instance = new burger({
    triggerQuery: '.uvc-burger-trigger-MYOWNCLASS',
    menuId: 'uvc-burger-trigger-MYOWNID'
  });

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.call(e)}>
        TRIGGER
      </button>

      <div className="uvc-burger-menu bg-red-400" id="uvc-burger-trigger-MYOWNID">
        <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.call(e)}>
          TRIGGER
        </button>
      </div>
    </>
  );
}

export default Burger;