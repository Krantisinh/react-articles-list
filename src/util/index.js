export const mapArrayToObjects = (data) =>
  data.reduce((acc, x) => {
    acc[x.id] = x;
    return acc;
  }, {});

export const toDateString = (date) => new Date(date).toDateString();
