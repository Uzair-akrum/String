let s = "(()())(())";
let arr = [];
for (let i = 0; i < s.length; i++) {
  if (arr[arr.length - 1] == s[i]) {
    console.log(" array", arr);

    arr.pop();
    arr.push(s[i]);
  } else {
    arr.push(s[i]);
  }
}

console.log(" :", arr.join(""));
