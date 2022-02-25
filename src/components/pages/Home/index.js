import React, { useContext } from 'react';
import { ThemeApp } from '../../wrappers/context';

export default function WrapperBio() {
  const { themeApp } = useContext(ThemeApp);
  let currentColor = '#1e305f';
  if (themeApp === 'dark') {
    currentColor = '#1e305f';
  } else {
    currentColor = '#b3ccff';
  }
  return (
    <svg width="785" height="742" viewBox="0 0 785 742" xmlns="http://www.w3.org/2000/svg">
      <path d="M409.331 15.2652C216.836 58.524 294.331 -32.4561 142.564 15.2654C-9.20377 62.9868 14.8303 196.357 45.3391 296.143C75.8478 395.929 -21.209 410.751 4.33121 500.044C29.8714 589.336 81.9435 526.848 123.831 673.544C165.719 820.239 317.331 675.044 456.831 724.044C596.331 773.044 759.553 633.215 718.831 537.544C678.11 441.873 766.331 341.044 766.331 341.044C766.331 341.044 836.831 169.802 697.331 98.5437C557.831 27.2852 601.827 -27.9936 409.331 15.2652Z" fill={currentColor} />
    </svg>
  );
}
