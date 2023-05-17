import React, { useEffect } from "react";
import { Accordion } from '../Core'

import '../styles/Basic.scss'
import './AccordionTest.scss'

const AccordionTest: React.FC = (props) => {
  const AccordionInstance1 = new Accordion({ parent: '.uvc-accordion-ex1' })
  const AccordionInstance2 = new Accordion({ parent: '.uvc-accordion-ex2', singleOpen: true })
  const AccordionInstance3 = new Accordion({ parent: '.uvc-accordion-ex3', initialOpen: 'uvc-accordion-initiallyOpened' })

  useEffect(() => {
    AccordionInstance1.init();
    AccordionInstance2.init();
    AccordionInstance3.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #1. Single trigger opens single content.</h2>
      <div className="uvc-accordion uvc-accordion-ex1">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]" />
      <br />

      <h2 className="font-bold text-[24px]">Example #2. Single trigger opens single content. One opened accordion per time.</h2>
      <div className="uvc-accordion uvc-accordion-ex2">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]" />
      <br />

      <h2 className="font-bold text-[24px]">Example #3. Single trigger opens single content. Accordion with one class will opened initially</h2>
      <div className="uvc-accordion uvc-accordion-ex3">
        <button className="uvc-accordion-trigger uvc-accordion-initiallyOpened" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]" />
      <br />
    </div>
  );
}

export default AccordionTest;