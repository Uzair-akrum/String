s = "abccccdd";
let a = "";
for (let i = s.length; i > 0; i--) {
  let temp=s.charAt(i);
  s.charAt(i)=s.charAt(i+1);
  s.charAt(i+1)=temp;
}
 
