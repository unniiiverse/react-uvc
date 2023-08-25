import React from 'react'
import { ReactUvcError } from './functions.js'
import { gsap } from 'gsap'

interface ITickerProps {
  parentId: string,
  duration: number,
  parentRef: React.RefObject<HTMLDivElement>
}

export class Ticker {
  private _parentId: string
  private _duration: number
  private _parentRef: React.RefObject<HTMLDivElement>

  constructor(props: ITickerProps) {
    this._parentId = props.parentId
    this._duration = props.duration
    this._parentRef = props.parentRef
  }

  init() {
    const parent = (document.querySelector(`#${this._parentId}`) as HTMLDivElement)!;

    if (!parent) {
      throw new ReactUvcError({ msg: `Parent (#${this._parentId}) is not found.`, at: 'Ticker' })
    }

    const container = (parent.querySelector('.uvc-ticker-container')! as HTMLDivElement)
    const collection = (parent.querySelector('.uvc-ticker-collection')! as HTMLDivElement)

    function makeRowFullWidth() {
      while (parent.offsetWidth > collection.offsetWidth) {
        Array.from(collection.children).forEach(el => {
          if (collection.offsetWidth > container.offsetWidth) {
            return;
          }

          collection.append(el.cloneNode(true))
        })
      }
    }

    makeRowFullWidth();

    const collectionClone1 = (collection.cloneNode(true) as HTMLDivElement);

    collection.classList.add('uvc-ticker-collection--1');
    collectionClone1.classList.add('uvc-ticker-collection--2');

    container.append(collectionClone1)

    this._animate();
  }

  private _animate() {
    const collectionWidth = (this._parentRef.current?.querySelector('.uvc-ticker-collection--1')! as HTMLDivElement).offsetWidth;

    gsap.context(() => {
      gsap.fromTo('.uvc-ticker-collection--1', {
        translateX: '100%',
        repeat: -1
      }, {
        translateX: '-100%',
        duration: this._duration / 1000,
        ease: 'linear',
        repeat: -1
      })

      gsap.fromTo('.uvc-ticker-collection--2', {
        delay: this._duration / 2 / 1000,
        translateX: 0,
        repeat: -1
      }, {
        delay: this._duration / 2 / 1000,
        translateX: '-200%',
        duration: this._duration / 1000,
        ease: 'linear',
        repeat: -1
      })
    }, this._parentRef)
  }
}

export default Ticker;