export default inital => {
  if (!Array.isArray(inital)) throw new Error("Inital value has to an array");
  let pointer = 0;
  return {
    next() {},
    copy() {}
  };
};
