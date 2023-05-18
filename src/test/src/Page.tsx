import React, { useEffect } from "react";

import { Burger } from './API/index'

const Page: React.FC = (props) => {
  const instance = new Burger({
    triggerQuery: 'uvc-burger-trigger',
    menuId: 'uvc-test-burger_MENU-ID'
  });

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <div className="Page">

    </div>
  );
}

export default Page;