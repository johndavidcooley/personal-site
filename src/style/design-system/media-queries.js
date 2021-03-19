// Node Modules
import { css } from 'styled-components';

const sizes = {
  tiny: 374,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
}

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]-1}px) {
      ${css(...args)}
    }
  `

  return acc;
}, {});