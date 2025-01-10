import constants from "./constants";

export const formatName = (name) => {
  let formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  if (constants.includes(formattedName.slice(0, 2))) {
    return {
      prefix: formattedName.slice(0, 2),
      postfix: formattedName.slice(2),
    };
  } else if (constants.includes(formattedName.slice(0, 1))) {
    return {
      prefix: formattedName.slice(0, 1),
      postfix: formattedName.slice(1),
    };
  }
};
