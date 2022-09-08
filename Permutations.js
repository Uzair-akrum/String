let nums = [1, 2, 3];
let array = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    for (let k = 0; k < nums.length; k++) {
      if (i !== k && k !== j && i !== j) {
        array.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
}

console.log(array);
