export const convertToUrlPath = path => path.split("\\").join("/");

export const formatPrice = price => `$${Number(price).toFixed(2)}`;

export const slugify = stringVal => {
  return stringVal.toLowerCase().replace(/ /g, "-");
};
