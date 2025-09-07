import React from 'react';
import img1 from '../../assets/Random-images/img1.jpg';
import img2 from '../../assets/Random-images/img2.jpg';
import img3 from '../../assets/Random-images/img3.jpg';
import img4 from '../../assets/Random-images/img4.jpg';
import img5 from '../../assets/Random-images/img5.jpg';

const images = [img1, img2, img3, img4, img5];

// Random image generator
export function genImg() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
