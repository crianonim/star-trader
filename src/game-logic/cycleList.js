const cycleList= (inital,pointer=0) => {
  if (!Array.isArray(inital)) throw new Error("Inital value has to an array");
  return {
    next() {
        return inital[pointer++]},
    copy() {
        return cycleList(inital,pointer)}
  };
};

export default cycleList