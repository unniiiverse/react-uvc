import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';
import { encode } from 'blurhash';
import '../src/styles/blimage.css';

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
    img.crossOrigin = 'Anonymous';
  });

const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  if (context) {
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  }
  throw Error('There is not canvas context');
};

const encodeImageToBlurhash = async (imageUrl: string) => {
  const image = await loadImage(imageUrl);
  const imageData = getImageData(image);
  if (imageData) return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  throw Error('There is no image data');
};



export interface IProps {
  src: string,
  initialHash?: string
}

export const BlImage: React.FC<IProps> = (props: IProps) => {
  const { src, initialHash } = props;
  const [hash] = useState(initialHash || 'LRQ0XHWB?b%M~qofIURjWBt7j[M{');
  const [isPictureReady, setIsPictureReady] = useState(false);

  const onLoaded = () => {
    setIsPictureReady(true);
    document.querySelectorAll('.blurhash-hash').forEach(el => el.setAttribute('style', 'opacity: 0; visibility: hidden'));
  };

  return (
    <>
      <Blurhash hash={hash} className={'blurhash-hash'} width={'100%'} height={'100%'} />
      <motion.img
        className={'blurhash-image'}
        onLoad={onLoaded}
        src={src}
        loading="lazy"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: isPictureReady ? 1 : 0, filter: 'blur(0)' }}
        transition={{
          opacity: { delay: 0.5, duration: 0.4 },
          filter: { delay: 0.5, duration: 0.4 }
        }}
        width={'100%'}
        height={'100%'}
      />
    </>
  );
};

export default BlImage;