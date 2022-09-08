let k = 2;
let nums = [4, 1, -1, 2, -1, 2, 3];

nums.sort((a, b) => a - b);

let fequent = [];
let m = 0;
let max = 0;
let largest = 0;
let most = [];
 
for (let j = 0; j < nums.length; j++) {
  if (nums[j] == nums[j + 1]) {
 
  } else {
    fequent.push(nums[j]);
    
  }
}
while (k > 0) {
  most.push(fequent[m]);
  m++;
  k--;
}

console.log(" :", most);
