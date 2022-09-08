let s = "ABAB",
  k = 3;
let a = "";
for (let i = 0; i < s.length; i++) {
  while (k) {
    if (s[s.length - 1] !== s[i]) {
      console.log("s[i] :", s[i]);

      
      k--;

      console.log(" :", k);
    }
  }
}

console.log(" :", s);
