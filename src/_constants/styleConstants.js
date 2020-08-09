export const navigationHeight = 60;
export const deviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const colors = {
  parchment: '#f9f8f4',
  brand: '#5352f1',
  fadedBrand: '#b8b3f6',
  subtitle: '#4a4f53',
  border: '#d2d3d4',
  darkGray: '#a7a9ac',
};

export const shadows = {};

const BASE = 1000;
const OVERLAY = BASE + 100;

export const zIndexes = {
  BASE,
  DROPDOWN_FILTER: BASE + 1,
  POPOVER: BASE + 2,
  OVERLAY,
  DROPDOWN_CLIENT_HEADER: OVERLAY + 1,
};
