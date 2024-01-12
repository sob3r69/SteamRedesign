const divideArray = (arr: string[], divisor: number): string[][] => {
  const dividedArray: string[][] = [];

  for (let i = 0; i < arr.length; i += divisor) {
    dividedArray.push(arr.slice(i, i + divisor));
  }

  return dividedArray;
};

export default divideArray;
