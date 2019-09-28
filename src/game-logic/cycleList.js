const cycleList= (array,pointer=-1) => {
  if (!Array.isArray(array)) throw new Error("Inital value has to an array");
  return {
    next() {
        pointer++;
        if (pointer===array.length) pointer=0;
        return array[pointer]
    },
    copy() {
        return cycleList(array,pointer)}
  };
};

export default cycleList