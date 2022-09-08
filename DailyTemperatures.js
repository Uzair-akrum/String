let nums = [73, 74, 75, 71, 69, 72, 76, 73];

let stack = [];
let a = [];

 

stack.push([nums[nums.length - 1], nums.length - 1]);

console.log(" :", stack[stack.length - 1][0]);
for (let i = nums.length - 1; i > 0; i--) {
  while (nums[i] > stack[stack.length - 1][0]) {
    stack.pop();
  }
  if (stack.length && nums[i] < stack[stack.length - 1][0]) {
    const distance = stack[stack.length - 1][1] - i;
    console.log("distance :", distance);
  }
}
