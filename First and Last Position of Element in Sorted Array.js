let nums = [5, 7, 7, 8, 8, 10];
let target = 7;
let array = [];
function fun() {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      array.push(i);
      if (array) {
        array.push(nums.lastIndexOf(target));
        return array;
      }
    }
  }
  if (array == "") {
    array.push(-1, -1);
  }
  return array;
}

console.log("fun() :", fun());
