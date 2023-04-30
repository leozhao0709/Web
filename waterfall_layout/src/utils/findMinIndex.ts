const findMinIndex = (arr: number[]): number => {
  let minValue = Number.MAX_VALUE;
  let minIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
};

export default findMinIndex;
