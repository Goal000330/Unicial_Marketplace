export function isEmptyObject(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const pairSplit = (pair: string) => {
  const pairArray = pair.toString().split("/");

  return { coin1: pairArray[0], coin2: pairArray[1] };
};

export const onlyUnique = (value: any, index: any, self: any) => {
  return self.indexOf(value) === index;
};

export const numberWithCommas = (x: any) => {
  if (x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
  }
  return 0;
};

export const dateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  return (
    time.getUTCFullYear() +
    "/" +
    ("0" + (time.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("0" + time.getUTCDate()).slice(-2) +
    " " +
    ("0" + time.getUTCHours()).slice(-2) +
    ":" +
    ("0" + time.getUTCMinutes()).slice(-2)
  );
};
export const dateConvert_untilDate = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  return (
    time.getUTCFullYear() +
    "/" +
    ("0" + (time.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("0" + time.getUTCDate()).slice(-2)
  );
};
export const dateConvert_onlyHourMin = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  return (
    ("0" + time.getUTCHours()).slice(-2) +
    ":" +
    ("0" + time.getUTCMinutes()).slice(-2)
  );
};
export const dateToType_UTC = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  const month = new Array(12);
  month[0] = "JAN";
  month[1] = "FEB";
  month[2] = "MAR";
  month[3] = "APR";
  month[4] = "MAY";
  month[5] = "JUN";
  month[6] = "JUL";
  month[7] = "AUG";
  month[8] = "SEP";
  month[9] = "OCT";
  month[10] = "NOV";
  month[11] = "DEC";
  return (
    time.getUTCDate() +
    " " +
    month[time.getUTCMonth()] +
    " " +
    time.getUTCFullYear() +
    ", " +
    ("0" + time.getUTCHours()).slice(-2) +
    ":" +
    ("0" + time.getUTCMinutes()).slice(-2)
  );
};

export const timestampToDate = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  return (
    time.getFullYear() +
    "-" +
    (time.getMonth() + 1) +
    "-" +
    time.getDate() +
    " " +
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2) +
    ":" +
    ("0" + time.getSeconds()).slice(-2)
  );
};

export const isoDatetoString = (newDate: any) => {
  let date = new Date(newDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  return year + "-" + month + "-" + dt;
};
