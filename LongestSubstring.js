let s = "bbbbb";
let a = [];
let set = [];
for (let i = 0; i < s.length; i++) {
  if (set.includes(s[i]) || i == s.length - 1) {
    a.push(set);

    set = [];
    set.push(s[i]);
  } else {
    set.push(s[i]);
  }
  a = a.sort((a, b) => b.length - a.length);
}

console.log(" :", a[0].length);
