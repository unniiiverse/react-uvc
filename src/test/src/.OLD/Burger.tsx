import React, { useEffect } from "react";
import { Burger } from "./Core";

import './test/MenuTest.scss'

const BurgerC: React.FC = (props) => {
  const BurgerInstance = new Burger({ generalClass: 'uvc-burger-general--0' })

  useEffect(() => {
    BurgerInstance.init()
  }, [])

  return (
    <div className="Burger">
      <button className="uvc-burger-trigger uvc-burger-general--0" onClick={e => BurgerInstance.call(e)}>
        TRIGGER
      </button>

      <div className="uvc-burger-menu uvc-burger-general--0">
        <button className="uvc-burger-trigger uvc-burger-general--0" onClick={e => BurgerInstance.call(e)}>
          TRIGGER
        </button>
        CONTENT
      </div>
    </div>
  );
}

export default BurgerC;