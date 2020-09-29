export = (arg: string): boolean => {
  return ["yes", "no", "y", "n"].includes(arg);
};
