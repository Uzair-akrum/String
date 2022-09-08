let s = "Let's take LeetCode contest";
let d = s.split(" ");
let a = "",
  b = "";
 
for (let i = 0; i < d.length; i++) {
  for (let j = d[i].length - 1; j >= 0; j--) {
    console.log(" :", d[i]);
    console.log(" :", d[i][j]);
    a += d[i][j];
  }
  b += a + " ";
  a = "";
}

console.log(" :", b);
