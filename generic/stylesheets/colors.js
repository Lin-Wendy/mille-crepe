import camelCase from 'lodash/camelCase';
import reduce from 'lodash/reduce';
import scssColors from './scss/_colors.scss';

export default reduce(scssColors, (colors, scssColor, index) => {
  colors[camelCase(index)] = scssColor;
  return colors;
}, {});
