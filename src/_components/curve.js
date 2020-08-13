import React from 'react';

export const Curve = ({ color, straightOnBottom, className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" transform={straightOnBottom && 'rotate(180)'}><path fill={color} fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
  );
};

