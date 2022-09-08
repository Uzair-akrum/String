let strs = ["c", "acc", "ccc"];
let min = strs[0].length;
let prefix, ans;
let start = strs[0];

for (let i = 0; i < strs[0].length; i++) {
  let s = strs.every((str) => {
    return str.slice(0, i + 1) == strs[0].slice(0, i + 1);
  });

  if (s == true) {
    ans = strs[0].slice(0, i + 1);
  }
}

console.log(" :", ans);
if (!ans) {
  console.log(' ""');
}
