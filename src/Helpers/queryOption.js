export default function (array) {
  const option = {};
  if (!array[0]) {
    for (const key in array) {
      if (Object.prototype.hasOwnProperty.call(array, key)) {
        if (array[key] === undefined || array[key] === null || array[key] === '') {
          delete array[key];
        }
      }
    }
    return array;
  }
  for (const item of array) {
    if (Object.keys(item).length == 1 && item[Object.keys(item)]) {
      option[Object.keys(item)] = item[Object.keys(item)];
    }
  }
  return option;
}
