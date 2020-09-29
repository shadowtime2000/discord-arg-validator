export = (
  args: string[],
  validationFunctions: ((arg: string) => boolean)[]
): Promise<boolean> => {
  if (args.length !== validationFunctions.length)
    throw new Error(
      "args and validationFunctions do not have the same length!"
    );
  const result: boolean[] = args.map((arg, i) => validationFunctions[i](arg));
  for (const i of result) {
    if (!i)
      return Promise.reject(
        new TypeError("Types have not validated correctly")
      );
  }
  return Promise.resolve(true);
};
