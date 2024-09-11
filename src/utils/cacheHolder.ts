const cache = new Map();

export const addOnCache = (url: string, data: any) => {
  if (cache.has(url)) {
    return;
  }
  cache.set(url, data);
};

export const getFromCache = (url: string) => {
  const data = cache.get(url);
  if (!data) {
    return null;
  }
  return data;
};

export const deleteFromCache = (url: string) => {
  cache.delete(url);
};
