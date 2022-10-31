export const toQuery = (obj) => {
  return Object.keys(obj).reduce((pre, cur) => {
    return obj[cur] != null && obj[cur] != ''
      ? `${pre}${cur}=${obj[cur]}&`
      : pre;
  }, '');
};

export const queryToObject = (searchParams) => {
  const query = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });
  return query;
};

export const getRndInteger = () => {
  return Math.floor(Math.random() * (10000 - 0)) + 0;
};
