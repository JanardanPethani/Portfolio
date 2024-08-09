export const parseFloatToFixed = (value: number, fixCount: number = 2) => {
  return parseFloat(value.toFixed(fixCount));
};
