import React, { useEffect, useRef, useState } from "react";
import { Ticker as TickerC } from './API/ticker'

import './API/styles/ticker.scss'

const Ticker: React.FC = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [instance] = useState(new TickerC({ parentId: 'uvc-ticker', duration: 10000, parentRef: ref }))

  useEffect(() => {
    instance.init();
  }, [])


  return (
    <>
      <div className="uvc-ticker" id="uvc-ticker" ref={ref}>
        <div className="uvc-ticker-container">
          <div className="uvc-ticker-collection">
            <span className="uvc-ticker-item">ELEM - 1</span>
            <span className="uvc-ticker-item">ELEM - 2</span>
            <span className="uvc-ticker-item">ELEM - 3</span>
            <span className="uvc-ticker-item">ELEM - 4</span>
            <span className="uvc-ticker-item">ELEM - 5</span>
            <span className="uvc-ticker-item">ELEM - 6</span>
            <span className="uvc-ticker-item">ELEM - 7</span>
            <span className="uvc-ticker-item">ELEM - 8</span>
            <span className="uvc-ticker-item">ELEM - 9</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticker;