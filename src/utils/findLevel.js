export const findLevel = (array, value) => {
  const level = array.find((item) => item.value === value);
  return level?.level;
};
