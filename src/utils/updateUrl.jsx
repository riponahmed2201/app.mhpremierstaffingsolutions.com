export const getUpdatedUrl = (key, value) => {
  const obj = window.location.search
    .replace("?", "")
    .split("&")
    .reduce(
      // eslint-disable-next-line no-sequences
      (r, e) => ((r[e.split("=")[0]] = decodeURIComponent(e.split("=")[1])), r),
      {}
    );

  const newObj = [];
  for (const [key2, value2] of Object.entries(obj)) {
    if (key2 && value2 && key2 !== key) {
      newObj.push({
        [key2]: value2,
      });
    }
  }

  if (key && value) {
    newObj.push({ [key]: value });
  }

  let str = "";
  for (const [key, value] of Object.entries(newObj)) {
    console.log(key);
    str +=
      (Object?.keys(value)?.[0]) +
      "=" +
      (Object.values(value)?.[0]) +
      "&";
  }
  const newUrl = `${window.location.pathname}?${str.slice(0, str?.length - 1)}`;

  return newUrl;
};
