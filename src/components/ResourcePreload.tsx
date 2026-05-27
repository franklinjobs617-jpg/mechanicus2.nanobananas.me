'use client';

import ReactDOM from 'react-dom';

export function ResourcePreload() {
  ReactDOM.preconnect('https://fonts.googleapis.cn');
  ReactDOM.preconnect('https://fonts.gstatic.cn');
  ReactDOM.preload('/hero-banner.webp', { as: 'image', type: 'image/webp' });
  return null;
}
