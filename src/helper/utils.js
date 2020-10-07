export function objectIsEmpty(data = {}) {
  return JSON.stringify(data).replace(/{|}/g, "").length === 0;
}

export function head(arr = []) {
  return arr[0];
}

export function tail(arr = []) {
  return arr[arr.length - 1];
}

export function transformObjectInArray(data = {}) {
  return Object.keys(data).map((item) => data[item]);
}
