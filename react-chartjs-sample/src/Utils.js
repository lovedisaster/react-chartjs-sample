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

export const FormatNumber = (n) => {
    if (IsEmptyValue(n)) {
      return 0;
    }
    var parts = n.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};