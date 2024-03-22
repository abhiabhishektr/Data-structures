


// const names = ["Mary", "John", "Emma"];
// const heights = [180, 165, 170];
// // const result = sortNamesByHeight(names, heights);

// const nameHeightPairs = names.map((name, index) => ({ name, height: heights[index-1] }));

// nameHeightPairs[0].height=17

// console.log(nameHeightPairs);



const numbers = [1, 2, 3, 4, 5];

const squaredAndIndexedNumbers = numbers.map(function(currentNumber, index, array) {
  const squared = currentNumber * currentNumber;
  console.log(`Processing ${currentNumber}, its square is ${squared}, at index ${index} in the array ${array}`);
  return squared;
});

console.log(squaredAndIndexedNumbers);
