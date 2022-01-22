const solution = (n) => {
  const largeWord = (array) => {
    let longWord = "";
    array.forEach((word) => {
      if (word.length > longWord.length) {
        longWord = word;
      }
    });
    return String(longWord).length - 2;
  };

  let rest = [];
  let gaps = [];
  let binaryGaps = [];
  let gap;

  if (n <= 4) {
    return 0;
  }

  while (n >= 1) {
    rest.push(n % 2);
    n = Math.floor(n / 2);
  }
  rest = rest.reverse();
  for (let i = 0; i < rest.length; i++) {
    gaps[0] = rest[0];
    if (rest[i + 1] === 1) {
      gaps[0] = rest[i + 1];
    }
    if (rest[i + 1] === 0) {
      gaps.push(rest[i + 1]);
    }
    if (rest[i + 2] === 1) {
      gaps.push(rest[i + 2]);
      binaryGaps.push(gaps.join(""));
      gaps = [];
      gaps[0] = rest[i + 2];
    }

    gap = largeWord(binaryGaps);
  }

  if (binaryGaps.length === 0) {
    return 0;
  }

  return gap;
};
module.exports = solution;
