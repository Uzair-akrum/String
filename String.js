let s = "timetopractice";
p = "toc";
let sum = 0;

 
for (let i = 0; i < p.length; i++) {
  //   console.log(s.iOf(p.charAt(i)));
  //   console.log(s.iOf(p.charAt(i + 1)), s.iOf(p.charAt(i)));
  if (i + 1 < p.length) {
    let distance = s.iOf(p.charAt(i + 1)) - s.iOf(p.charAt(i));
    sum = sum + distance;
  }
}

console.log(" :", sum);
