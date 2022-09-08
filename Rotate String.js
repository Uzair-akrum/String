let s = "abcde",
  goal = "cdeab";
s = s.split("");
for (let i = 0; i < goal.length; i++) {
  //   console.log(" shift", s.shift());
  s.push(s.shift());
 if (s.join("") == goal){
    
 }
}
