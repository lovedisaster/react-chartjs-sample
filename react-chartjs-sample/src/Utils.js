import _ from "lodash";

export const IsEmptyValue = (obj) => {
    return (
      JSON.stringify(obj) === "{}" ||
      JSON.stringify(obj) === "[]" ||
      JSON.stringify(obj) === "null" ||
      obj === "" ||
      obj === null ||
      obj === undefined
    );
};

export const DeepClone = (o) => {
    const output = _.cloneDeep(o);
    return output;
};


export const RoundNumber = (number, precision) => {
  return _.round(number, precision);
};

export const FormatNumber = (n) => {
    if (IsEmptyValue(n)) {
      return 0;
    }
    var parts = n.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

export const FormatDate = (timestamp) => {
  const WeekMonthDay = new Date(timestamp).toString().substr(0, 10);
  var [week, month, day] = WeekMonthDay.split(" ");

  // turn date 04 into 4
  day = day[0] === "0" ? day.substr(1) : day;

  return `${week}, ${day} ${month}`;
};