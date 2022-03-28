export const dateFormatter = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const daterange = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
